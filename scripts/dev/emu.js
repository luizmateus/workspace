import chalk from 'chalk';
import prompts from 'prompts';
import { execute } from '../utils/execute.js';
import { getModules, getMainModule } from '../utils/modules.js';
import { loadingCreate } from '../utils/loading.js';
import { logEnd, logInit, logStepEnd, logStepInit } from '../utils/logger.js';
import { WorkspaceError } from '../utils/error.js';

const loading = loadingCreate();

async function run() {
  logInit('Desenvolvimento', 'Executar emulador/simulador');

  const modules = await getModules();
  const main = getMainModule(modules);

  console.log('');
  const platform = await prompts({
    type: 'select',
    name: 'selected',
    message: 'O que deseja executar?',
    choices: [
      {
        title: 'Emulador Android',
        value: 'android',
      },
      {
        title: 'Simulador iOS',
        value: 'ios',
      },
    ],
  });
  if (!platform.selected) process.exit();

  const ios = platform.selected === 'ios';
  if (ios) {
    logStepInit('Buscando Simuladores');
    loading.start();
    await execute('rm -rf ~/Library/Developer/CoreSimulator/Caches', 'pipe');
    const simulatorList = await execute(
      'xcrun simctl list --json devices available',
      'pipe'
    );
    const devices = JSON.parse(simulatorList).devices;
    const simulator = [];
    for (const simType of Object.keys(devices)) {
      if (simType.includes('iOS-') && devices[simType].length) {
        simulator.push(
          ...devices[simType].map((dev) => ({
            id: dev.udid,
            name: `(${simType.split('SimRuntime.')[1]}) ${dev.name}`,
            state: dev.state,
          }))
        );
      }
    }
    const simulatorSorted = simulator.sort((a, b) => a.name - b.name);
    loading.stop();
    logStepEnd();

    if (!simulatorSorted.length) {
      throw new Error('Nenhum simulador encontrado!');
    }

    console.log('');
    const simulatorToRun = await prompts({
      type: 'select',
      name: 'selected',
      message: 'Escolha um simulador',
      choices: [
        ...simulatorSorted.map((emu) => ({
          title: emu.name,
          value: emu.id,
        })),
      ],
    });
    if (!simulatorToRun.selected) process.exit();

    logStepInit(
      `Executando Simulador >> ${chalk.underline(simulatorToRun.selected)}`
    );
    const simulatorToRunObj = simulator.find(
      (sim) => sim.id === simulatorToRun.selected
    );
    await execute(
      `open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/`,
      'pipe'
    );
    if (simulatorToRunObj.state !== 'Shutdown') {
      await execute(`xcrun simctl shutdown ${simulatorToRun.selected}`, 'pipe');
    }
    await execute(`xcrun simctl boot ${simulatorToRun.selected}`, 'pipe');
  } else {
    logStepInit('Buscando Emuladores');
    loading.start();
    const emulatorList = await execute('emulator -list-avds', 'pipe');
    const emulator = emulatorList.split('\n').filter((r) => r);
    loading.stop();
    logStepEnd();

    if (!emulator.length) {
      throw new Error('Nenhum emulador encontrado!');
    }

    console.log('');
    const emulatorToRun = await prompts({
      type: 'select',
      name: 'selected',
      message: 'Escolha um emulador',
      choices: [
        ...emulator.map((emu) => ({
          title: emu,
          value: emu,
        })),
      ],
    });
    if (!emulatorToRun.selected) process.exit();

    logStepInit(
      `Executando Emulador >> ${chalk.underline(emulatorToRun.selected)}`
    );
    await execute(
      `emulator -avd ${emulatorToRun.selected} -dns-server 8.8.8.8 -no-snapshot-load`,
      'pipe'
    );
  }

  logEnd();
}

try {
  await run();
} catch (err) {
  loading.stop();
  WorkspaceError.handleError(err);
}
