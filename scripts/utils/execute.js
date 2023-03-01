import chalk from 'chalk';
import { spawn } from 'child_process';
import { WorkspaceError } from './error.js';

/** Executar um comando no shell, com a opção de acessar ou exibir o output. */
export async function execute(command, stdio = 'inherit', ignoreError = false) {
  if (process.env.DEBUG) {
    console.log(
      `\n${chalk.bold('Comando em execução')}\n${chalk.underline(command)}\n`
    );
  }

  return new Promise((resolve, reject) => {
    try {
      let output = '';
      let error = '';

      const child = spawn(command, [], {
        shell:
          process.platform === 'win32'
            ? 'C:\\Program Files\\git\\usr\\bin\\bash.exe'
            : true,

        stdio,
        encoding: 'utf-8',
      });

      child.stdout?.on('data', function (data) {
        if (stdio === 'pipe') {
          output += data.toString();
        }
      });

      child.stderr?.on('data', function (data) {
        error += data.toString();
      });

      child.on('error', function (data) {
        error += data.toString();
      });

      child.on('close', function (code) {
        if (code === 0 || ignoreError) {
          resolve(output || error);
        } else {
          reject(new WorkspaceError(command, error || output));
        }
      });
    } catch (error) {
      if (ignoreError) {
        resolve();
      } else {
        reject(new WorkspaceError(command, error || output));
      }
    }
  });
}
