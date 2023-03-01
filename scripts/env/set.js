import chalk from 'chalk';
import fs from 'fs';
import prompts from 'prompts';
import { WorkspaceError } from '../utils/error.js';
import { execute } from '../utils/execute.js';
import { loadingCreate } from '../utils/loading.js';
import { logEnd, logInit, logStepEnd, logStepInit } from '../utils/logger.js';
import { getModules, getMainModule, promptModules } from '../utils/modules.js';
import { initSandbox } from '../utils/sandbox.js';

const loading = loadingCreate();

function logChangedEnv() {
  console.log(
    `\n${chalk.cyan.bold('@mobk/main')} ${chalk.bold(
      '>> src/modules >>'
    )} Ambiente alterado!`
  );
}

async function set() {
  logInit('Ambiente', 'Escolher o ambiente de desenvolvimento');

  logStepInit('Obtendo módulos');
  loading.start();
  const modules = await getModules();
  const main = getMainModule(modules);
  loading.stop();
  logStepEnd();

  const moduleDeploymentPath = `${main.path}/src/modules/ModuleDeployment.ts`;

  let environment = { selected: process.argv[2] };
  if (!['sandbox', 'standalone', 'full'].includes(environment.selected)) {
    logStepInit('Escolha de ambiente');
    environment = await prompts({
      type: 'select',
      name: 'selected',
      message: 'Qual ambiente quer desenvolver?',
      choices: [
        {
          title: 'Sandbox',
          description:
            'Ambiente para testes diretamente no Sandbox da @mobk/main.',
          value: 'sandbox',
          selected: true,
        },
        {
          title: 'Standalone',
          description: 'Ambiente para executar somente um módulo.',
          value: 'standalone',
          selected: false,
        },
        {
          title: 'Full',
          description: 'Ambiente com todos os módulos.',
          value: 'full',
          selected: false,
        },
      ],
    });

    if (!environment.selected) process.exit();
    logStepEnd();
  }

  await initSandbox();

  // Sandbox
  if (environment.selected === 'sandbox') {
    fs.writeFileSync(moduleDeploymentPath, `export default 'sandbox';\n`);
    logChangedEnv();
    console.log(
      `${chalk.cyan.bold('@mobk/main')} ${chalk.bold(
        '>> src/sandbox >>'
      )} Ambiente Sandbox inicializado!`
    );
  } else {
    await execute(
      `cd ${main.path} && git checkout -- src/modules/ModuleRegistry.ts`
    );
  }

  // Standalone
  if (environment.selected === 'standalone') {
    const mod = await promptModules(
      'Qual módulo irá desenvolver?',
      false,
      '@mobk/module-'
    );
    if (!mod.selected) process.exit();

    fs.writeFileSync(
      moduleDeploymentPath,
      `export default '${mod.selected}';\n`
    );
    logChangedEnv();
    console.log(
      `${chalk.cyan.bold('@mobk/main')} ${chalk.bold('>>')} Módulo ${
        mod.selected
      } foi habilitado!`
    );
  }

  // Full
  if (environment.selected === 'full') {
    fs.writeFileSync(moduleDeploymentPath, `export default '*';\n`);
    logChangedEnv();
    console.log(
      `${chalk.cyan.bold('@mobk/main')} ${chalk.bold(
        '>>'
      )} Todos os módulos foram habilitados!`
    );
  }

  logEnd();
}

try {
  await set();
} catch (err) {
  WorkspaceError.handleError(err);
}
