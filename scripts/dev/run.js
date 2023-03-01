import prompts from 'prompts';
import { execute } from '../utils/execute.js';
import { getModules, getMainModule } from '../utils/modules.js';
import { loadingCreate } from '../utils/loading.js';
import { logEnd, logInit, logStepEnd, logStepInit } from '../utils/logger.js';
import { WorkspaceError } from '../utils/error.js';

const loading = loadingCreate();

async function run() {
  logInit('Desenvolvimento', 'Executar aplicativo na plataforma escolhida');

  const modules = await getModules();
  const main = getMainModule(modules);

  console.log('');
  const platform = await prompts({
    type: 'select',
    name: 'selected',
    message: 'Qual plataforma quer executar?',
    choices: [
      {
        title: 'Android',
        value: 'android',
      },
      {
        title: 'iOS',
        value: 'ios',
      },
    ],
  });
  if (!platform.selected) process.exit();

  const ios = platform.selected === 'ios';
  if (ios) {
    logStepInit('iOS - Atualizando CocoaPods');
    loading.start();
    await execute(`cd ${main.path} && yarn ios:pods`, 'pipe');
    loading.stop();
    logStepEnd();

    logStepInit('iOS - Buscando Simulador Aberto');
    loading.start();
    const simulators = await execute(
      `xcrun simctl list devices booted`,
      'pipe'
    );
    let simulatorToRun = '';
    simulators.split('\n').forEach((sim) => {
      if (sim.includes('(Booted)')) {
        const split = sim.split(' (')[1].split(')')[0];
        simulatorToRun = `--udid='${split}'`;
      }
    });
    loading.stop();
    logStepEnd();

    logStepInit('Executando Aplicativo');
    loading.start();
    await execute(
      `cd ${main.path} && yarn ${platform.selected}:homolog ${simulatorToRun}`,
      'pipe'
    );
    loading.stop();
    logStepEnd();
  } else {
    logStepInit('Executando Aplicativo');
    loading.start();
    await execute('adb reverse tcp:8081 tcp:8081', 'pipe', true);
    await execute(
      `cd ${main.path} && yarn ${platform.selected}:homolog`,
      'pipe'
    );
    loading.stop();
    logStepEnd();
  }

  logEnd();
}

try {
  await run();
} catch (err) {
  loading.stop();
  WorkspaceError.handleError(err);
}
