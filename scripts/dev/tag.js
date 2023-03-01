import prompts from 'prompts';
import { execute } from '../utils/execute.js';
import { getModules, getMainModule } from '../utils/modules.js';
import { loadingCreate } from '../utils/loading.js';
import { logEnd, logInit, logStepEnd, logStepInit } from '../utils/logger.js';
import { WorkspaceError } from '../utils/error.js';

const loading = loadingCreate();

async function tag() {
  logInit('Desenvolvimento', 'Ligar ou desligar o Firebase DebugView');

  const modules = await getModules();
  const main = getMainModule(modules);

  console.log('');
  const confirmation = await prompts({
    type: 'select',
    name: 'selected',
    instructions: false,
    hint: false,
    message: 'Escolha o modo do Firebase DebugView',
    choices: [
      { title: 'Habilitar', value: 'enable', selected: true },
      { title: 'Desabilitar', value: 'disable', selected: false },
    ],
  });
  if (!confirmation.selected) process.exit();

  const iosPath = `${main.path}/ios/Original.xcodeproj/xcshareddata/xcschemes/OriginalHomolog.xcscheme`;

  if (confirmation.selected === 'enable') {
    logStepInit('Habilitando Firebase DebugView');
    loading.start();
    await execute(
      'adb shell setprop debug.firebase.analytics.app com.original.mobk',
      'pipe',
      true
    );
    await execute(
      `sed -i.script 's/FIRDebugDisabled/FIRDebugEnabled/g' ${iosPath}`,
      'pipe'
    );
  } else {
    logStepInit('Desabilitando Firebase DebugView');
    loading.start();
    await execute(
      'adb shell setprop debug.firebase.analytics.app .none.',
      'pipe',
      true
    );
    await execute(
      `sed -i.script 's/FIRDebugEnabled/FIRDebugDisabled/g' ${iosPath}`,
      'pipe'
    );
  }

  await execute(`rm -rf ${iosPath}.script`, 'pipe');
  loading.stop();
  logStepEnd();
  logEnd();
}

try {
  await tag();
} catch (err) {
  loading.stop();
  WorkspaceError.handleError(err);
}
