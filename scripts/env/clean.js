import chalk from 'chalk';
import prompts from 'prompts';
import { execute } from '../utils/execute.js';
import { getModules } from '../utils/modules.js';
import { loadingCreate } from '../utils/loading.js';
import { logEnd, logInit, logStepEnd, logStepInit } from '../utils/logger.js';
import { WorkspaceError } from '../utils/error.js';

const loading = loadingCreate();

async function clean() {
  logInit('Ambiente', 'Restaurar o ambiente de desenvolvimento');

  console.log('');
  const confirmation = await prompts({
    type: 'confirm',
    name: 'selected',
    message:
      'Isso irá restaurar o estado do ambiente de desenvolvimento (Yarn + Git + Cache de Build).' +
      '\nTodas as alterações locais serão descartadas.' +
      chalk.red.bold('\nDeseja prosseguir?'),
    initial: false,
  });
  if (!confirmation.selected) process.exit();

  logStepInit('Restaurando Yarn Cache');
  loading.start();
  const modules = await getModules();
  for (const mod of modules) {
    await execute(`cd ${mod.path} && yarn cache clean --all`, 'pipe');
  }
  loading.stop();
  logStepEnd();

  logStepInit('Restaurando Git');
  loading.start();
  await execute('git submodule foreach git clean -df', 'pipe');
  await execute('git submodule foreach git reset --hard', 'pipe');
  await execute('git submodule foreach git clean -dfX', 'pipe');
  await execute('git submodule foreach git checkout master', 'pipe');
  await execute('git submodule foreach git pull', 'pipe');
  loading.stop();
  logStepEnd();

  logEnd();
}

try {
  await clean();
} catch (err) {
  loading.stop();
  WorkspaceError.handleError(err);
}
