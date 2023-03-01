import boxen from 'boxen';
import chalk from 'chalk';

/** Imprimir log de início de etapa. */
export function logStepInit(message) {
  console.log(`\n>> ${chalk.cyan.bold(message)}`);
}

/** Imprimir log de conclusão de etapa. */
export function logStepEnd() {
  console.log(chalk.cyan('Concluído!'));
}

/** Imprimir log de início. */
export function logInit(type, name) {
  const text = `${chalk.green.bold(type.toUpperCase())}\n${chalk.bold(name)}`;
  console.log(
    boxen(text, {
      padding: 1,
      borderColor: 'green',
      title: chalk.green('Banco Original | @mobk/workspace'),
      titleAlignment: 'center',
      textAlignment: 'center',
    })
  );
}

/** Imprimir log de conclusão. */
export function logEnd() {
  console.log(`\n${chalk.green.bold('>> Processo concluído com sucesso!')}\n`);
  process.exit();
}

/** Imprimir log de conclusão com erro. */
export function logEndError() {
  console.log(`\n${chalk.red.bold('>> Processo concluído com erro!')}`);
  process.exit();
}
