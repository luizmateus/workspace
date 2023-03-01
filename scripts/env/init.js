import prompts from 'prompts';
import { execute } from '../utils/execute.js';
import { loadingCreate } from '../utils/loading.js';
import { logEnd, logInit, logStepEnd, logStepInit } from '../utils/logger.js';
import { WorkspaceError } from '../utils/error.js';
import { getModules, publishModule, updateModule } from '../utils/modules.js';
import { initSandbox } from '../utils/sandbox.js';

const loading = loadingCreate();

async function init() {
  logInit('Ambiente', 'Inicializar o ambiente de desenvolvimento');

  logStepInit('Clonando Repositórios');
  loading.start();
  await execute('git submodule update --init --remote', 'pipe');
  await execute('git submodule foreach git reset --hard', 'pipe');
  await execute('git submodule foreach git clean -df', 'pipe');
  await execute('git submodule foreach git checkout master', 'pipe');
  await execute('git submodule foreach git pull', 'pipe');
  loading.stop();
  logStepEnd();

  logStepInit('Iniciando Sandbox');
  loading.start();
  await initSandbox();
  loading.stop();
  logStepEnd();

  const modules = await getModules();
  for (const mod of modules) {
    await execute(`cd ${mod.path} && touch yarn.lock`, 'pipe');

    logStepInit(`Instalando e Publicando >> ${mod.name}`);
    loading.start();

    await execute(`cd ${mod.path} && yarn`, 'pipe');

    if (mod.name !== '@mobk/main') {
      await publishModule(mod);
      await updateModule(mod);
    }

    loading.stop();
    logStepEnd();
  }

  logEnd();
}

try {
  await init();
} catch (err) {
  loading.stop();
  WorkspaceError.handleError(err);
}
