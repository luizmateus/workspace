import { WorkspaceError } from '../utils/error.js';
import { deployModule, getModules } from '../utils/modules.js';

async function deploy() {
  const modules = await getModules();

  const deploy = process.argv[2];
  const moduleToDeploy = modules.find((mod) => mod.name === deploy);

  if (moduleToDeploy) {
    await deployModule(moduleToDeploy);
  }

  process.exit();
}

try {
  await deploy();
} catch (err) {
  WorkspaceError.handleError(err);
}
