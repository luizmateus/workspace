import chalk from 'chalk';
import { logEndError } from './logger.js';

export class WorkspaceError {
  static handleError(err) {
    if (err instanceof WorkspaceError) {
      err.handle();
    } else {
      console.log(`\n${chalk.bgRed.bold('Ocorreu um erro desconhecido!')}`);
      console.log(`\n${chalk.bold('ERRO')}\n${err}`);
      console.log(`\n${chalk.bold('MENSAGEM')}\n${err.message}`);
      console.log(`\n${chalk.bold('STACK')}\n${err.stack}`);
    }

    logEndError();
  }

  constructor(command, error) {
    this.command = command;
    this.error = error;
  }

  handle() {
    console.log(
      `\n${chalk.bgRed.bold('Ocorreu um erro na execução de um comando!')}`
    );
    console.log(`\n${chalk.bold('COMANDO')}\n${this.command}`);
    console.log(`\n${chalk.bold('ERRO')}\n${this.error}`);
  }
}
