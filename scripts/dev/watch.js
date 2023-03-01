import _ from 'lodash';
import chalk from 'chalk';
import chokidar from 'chokidar';
import path from 'path';
import kill from 'tree-kill';
import { WorkspaceError } from '../utils/error.js';
import { logInit, logStepInit } from '../utils/logger.js';
import { spawn } from 'child_process';
import { getModules } from '../utils/modules.js';

const listeners = [];

async function watch() {
  logInit('Desenvolvimento', 'Hot Reload');

  const modules = await getModules();

  for (const mod of modules) {
    if (mod.name === '@mobk/main') return;
    let child;
    let childKilledOnPurpose = false;

    const watcherExec = () => {
      logStepInit(`Disparando Publicação >> ${chalk.cyan.bold(mod.name)}`);

      childKilledOnPurpose = false;
      child = spawn(`yarn dev:deploy ${mod.name}`, [], {
        shell: true,
        stdio: 'inherit',
        encoding: 'utf-8',
      });

      child.on('exit', (code) => {
        if (!childKilledOnPurpose) {
          child = undefined;
        }

        if (code === 0) {
          console.log(chalk.cyan('________________'));
          listeners.forEach((listener) => {
            console.log(`\nObservando Repositório: ${chalk.bold(listener)}`);
          });
        }
      });
    };

    const watcherDebounce = _.debounce(() => {
      if (child) {
        childKilledOnPurpose = true;
        kill(child.pid, 'SIGKILL', () => {
          console.log('');
          logStepInit(chalk.red(`Cancelando Publicação >> ${mod.name}`));
          watcherExec();
        });
      } else {
        watcherExec();
      }
    }, 1000);

    const watcher = chokidar.watch(mod.path, {
      ignored: [
        path.join(mod.path, '.yarn'),
        path.join(mod.path, 'demo'),
        path.join(mod.path, 'lib'),
        path.join(mod.path, 'node_modules'),
      ],
      ignoreInitial: true,
    });

    watcher.on('change', watcherDebounce);
    watcher.on('add', watcherDebounce);
    watcher.on('unlink', watcherDebounce);
    watcher.on('ready', () => {
      listeners.push(mod.name);
      console.log(`\nObservando Repositório: ${chalk.bold(mod.name)}`);
    });
  }
}

try {
  await watch();
} catch (err) {
  WorkspaceError.handleError(err);
}
