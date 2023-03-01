import ora from 'ora';

export function loadingCreate() {
  return ora({
    text: 'Aguarde, em execução...',
    spinner: 'point',
  });
}
