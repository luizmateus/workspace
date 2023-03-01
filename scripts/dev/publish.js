import chalk from 'chalk';
import { WorkspaceError } from '../utils/error.js';
import { execute } from '../utils/execute.js';
import { loadingCreate } from '../utils/loading.js';
import { logInit } from '../utils/logger.js';
import { getModules, promptModules } from '../utils/modules.js';

const loading = loadingCreate();

async function publishCall() {
  console.log('');
  const publish = await promptModules('Quais módulos deseja publicar?');
  if (!publish?.selected?.length) process.exit();

  const modules = await getModules();
  const modulesToPublish = modules.filter((mod) =>
    publish.selected.includes(mod.name)
  );

  for (const mod of modulesToPublish) {
    await execute(`yarn dev:deploy ${mod.name}`);
  }

  console.log(chalk.cyan('________________'));
}

async function publish() {
  logInit('Desenvolvimento', 'Publicar um ou mais módulos');
  while (true) {
    await publishCall();
  }
}

try {
  await publish();
} catch (err) {
  loading.stop();
  WorkspaceError.handleError(err);
}
