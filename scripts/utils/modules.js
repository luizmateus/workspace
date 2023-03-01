import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import prompts from 'prompts';
import slash from 'slash';
import jsonDiff from 'json-diff';
import { execute } from './execute.js';
import { loadingCreate } from './loading.js';
import { logStepEnd, logStepInit } from './logger.js';

/** Ler arquivo package.json de um repositório. */
export async function getPackageJson(modulePath) {
  try {
    return JSON.parse(fs.readFileSync(`${modulePath}/package.json`));
  } catch {
    return {};
  }
}

/** Regra de ordem dos módulos para que as instalações ocorram do menos dependente
 *  de outro módulos até o mais dependente.
 */
export function getModulesOrder(moduleName) {
  if (moduleName === '@mobk/design-system') return 1;
  if (moduleName === '@mobk/engine') return 2;
  if (moduleName.includes('@mobk/module-')) return 3;
  return 4;
}

/** Obter módulos registrados no Git Submodules. */
export async function getModules() {
  const gitSubmodules = await execute(
    "git config --file .gitmodules --get-regexp path | awk '{ print $2 }'",
    'pipe'
  );

  const parsedGitSubmodules = gitSubmodules.split('\n').filter((r) => r);

  const modules = [];
  for (const mod of parsedGitSubmodules) {
    let modulePath = slash(path.join(path.resolve(), mod));
    if (process.platform === 'win32') {
      modulePath = modulePath.substring(2);
    }
    const moduleName = (await getPackageJson(modulePath)).name;
    const mappedModule = {
      name: moduleName,
      module: mod,
      path: modulePath,
    };
    modules.push(mappedModule);
  }

  const sortedModules = modules.sort((a, b) => {
    const aOrder = getModulesOrder(a.name);
    const bOrder = getModulesOrder(b.name);
    return aOrder - bOrder;
  });

  return sortedModules;
}

/** Obter módulo @mobk/main. */
export function getMainModule(modules) {
  return modules.find((mod) => mod.name === '@mobk/main');
}

/** Obter módulos que contenham determinada dependência. */
export async function getModulesByDependency(dep) {
  const modules = await getModules();

  const modulesByDependency = [];
  for (const mod of modules) {
    const dependencies = (await getPackageJson(mod.path)).dependencies;
    const hasDependency = dependencies[dep];
    if (hasDependency) modulesByDependency.push(mod);
  }

  return modulesByDependency;
}

/** Solicitar que o usuário escolha módulos em uma lista. */
export async function promptModules(message, multi = true, filter = '') {
  const modules = await getModules();

  let otherModules = modules.filter((mod) => mod.name !== '@mobk/main');
  if (filter) {
    otherModules = modules.filter((mod) => mod.name.includes(filter));
  }

  const choices = otherModules.map((mod) => ({
    title: `Módulo ${mod.name}`,
    value: mod.name,
    selected: false,
  }));

  return await prompts({
    type: multi ? 'multiselect' : 'select',
    name: 'selected',
    instructions: false,
    hint: false,
    message,
    choices,
  });
}

/** Mudar a versão de um módulo. */
export async function versionModule(modulePath, version) {
  await execute(
    `cd ${modulePath} && npm version ${version} --no-git-tag-version --allow-same-version --force`,
    'pipe'
  );
}

/** Publicar um módulo. */
export async function publishModule(mod) {
  await execute(`cd ${mod.path} && yarn prepare`, 'pipe');
}

/** Atualizar versão de um módulo instalado. */
export async function updateModule(mod) {
  const modulesToRunYarn = [];

  const modules = await getModules();
  for (const modUpdate of modules) {
    const destination = `${modUpdate.path}/node_modules/${mod.name}`;

    const pkgOld = await getPackageJson(destination);
    const pkgNew = await getPackageJson(mod.path);
    const diff = jsonDiff.diff(pkgOld, pkgNew) || {};
    if (diff?.dependencies) {
      const changedDeps = Object.keys(diff.dependencies).filter(
        (dep) => !dep.includes('@mobk/')
      );
      if (changedDeps.length) {
        modulesToRunYarn.push(modUpdate);
      }
    }

    await execute(`rm -rf ${mod.path}/android/{build,.gradle}`, 'pipe');
    await execute(`rm -rf ${mod.path}/ios/build`, 'pipe');
    await execute(`mkdir -p ${destination}`, 'pipe');
    await execute(
      `cp -R ${mod.path}/{lib,src,package.json,*.podspec,android,ios} ${destination} 2>/dev/null || :`,
      'pipe'
    );
    await execute(
      `sed -i.script s%./node_modules/%../../%g ${destination}/package.json`,
      'pipe'
    );
    await execute(`rm -rf ${destination}/package.json.script`, 'pipe');
  }

  return modulesToRunYarn;
}

/** Fazer o deploy de um módulo.
 *  - Subir a versão patch do módulo e salver no package.json
 *  - Publicar o módulo
 *  - Restaurar a versão original do package.json, para não deixá-lo com sujeira
 *  - Atualizar instalações deste módulo em todos os repositórios que o utilizam
 */
export async function deployModule(mod) {
  const loading = loadingCreate();

  console.log(`\n${chalk.bgCyan.bold(mod.name)}`);

  logStepInit(`Atualizando Código`);
  loading.start();
  const modulesToRunYarn = await updateModule(mod, true);
  loading.stop();
  logStepEnd();

  logStepInit(`Atualizando Types`);
  loading.start();
  await execute(`cd ${mod.path} && yarn prepare`, 'pipe');
  await updateModule(mod, true);
  loading.stop();
  logStepEnd();

  if (modulesToRunYarn.length) {
    logStepInit(
      `Mudanças encontradas no ${chalk.underline(
        'package.json'
      )}! Atualizando...`
    );
    loading.start();
    for (const modYarn of modulesToRunYarn) {
      await execute(`cd ${modYarn.path} && yarn`, 'pipe');
    }
    loading.stop();
    logStepEnd();
  }
}
