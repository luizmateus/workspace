import chalk from 'chalk';
import { execute } from '../utils/execute.js';
import { loadingCreate } from '../utils/loading.js';
import { logEnd, logInit, logStepEnd, logStepInit } from '../utils/logger.js';
import { WorkspaceError } from '../utils/error.js';

const loading = loadingCreate();
const notFound = '\u2717 Não encontrado!';
const versions = {
  node: '16',
  npm: '8',
  npx: '8',
  yarn: '3',
  java: '11',
  xcode: '13',
  cocoapods: '1.11.3',
};
const values = {
  node: '',
  npm: '',
  npx: '',
  yarn: '',
  watchman: '',
  android: '',
  java: '',
  javaVar: '',
  xcode: '',
  cocoapods: '',
};
const results = {
  warnings: [],
  errors: [],
};

async function doctor() {
  logInit('Ambiente', 'Checar consistência do ambiente de desenvolvimento');

  const vscodeStep = 'Visual Studio Code';
  const nodeStep = 'NodeJS';
  const yarnStep = 'Yarn';
  const javaStep = 'Java';
  const androidStep = 'Android';
  const iosStep = 'iOS';
  const path = await execute('echo $PATH', 'pipe');

  console.log('');
  loading.start();

  // Visual Studio Code
  await checkCommand(
    'command -v asdasd',
    vscodeStep,
    'Linha de comando `code` não configurada',
    true
  );

  // NodeJS
  values.node = await checkCommand(
    'node -v',
    nodeStep,
    '`node` não configurado'
  );
  values.node = values.node.replace('v', '');
  values.npm = await checkCommand('npm -v', nodeStep, '`npm` não configurado');
  values.npx = await checkCommand('npx -v', nodeStep, '`npx` não configurado');

  // Yarn
  values.yarn = await checkCommand(
    'yarn -v',
    yarnStep,
    '`yarn` não configurado'
  );

  // Watchman
  values.watchman = await checkCommand(
    'watchman -v',
    yarnStep,
    '`watchman` não configurado'
  );

  // Java
  values.javaVar = await checkCommand(
    'echo $JAVA_HOME',
    javaStep,
    '`JAVA_HOME` não configurado'
  );
  values.java = await checkCommand(
    `java -version 2>&1 | head -n 1 | awk -F '"' '{print $2}'`,
    javaStep,
    '`java` não configurado'
  );
  values.java = values.java.split('.')[0];

  // Android
  values.android = await checkCommand(
    'echo $ANDROID_HOME',
    androidStep,
    '`ANDROID_HOME` não configurado'
  );
  await checkCommand('adb version', androidStep, '`adb` não configurado');
  await checkCommand(
    'emulator -list-avds',
    androidStep,
    'Nenhum emulador foi configurado',
    true
  );
  if (!path.includes('platform-tools')) {
    results.errors.push({
      step: androidStep,
      message: 'Caminho `platform-tools` não adicionado ao PATH',
    });
  }
  if (!path.includes('emulator')) {
    results.errors.push({
      step: androidStep,
      message: 'Caminho `emulator` não adicionado ao PATH',
    });
  }

  // iOS
  values.xcode = await checkCommand(
    "xcodebuild -version | sed -En 's/Xcode[[:space:]]+([0-9.]*)/\\1/p'",
    iosStep,
    '`Xcode` não configurado'
  );
  values.cocoapods = await checkCommand(
    'pod --version',
    iosStep,
    '`cocoapods` não configurado'
  );

  // Versões
  if (values.node !== notFound) {
    checkVersion('NodeJS', values.node, versions.node, 'gt');
  }
  if (values.npm !== notFound) {
    checkVersion('NPM', values.npm, versions.npm, 'gt');
  }
  if (values.npx !== notFound) {
    checkVersion('NPX', values.npx, versions.npx, 'gt');
  }
  if (values.yarn !== notFound) {
    checkVersion('Yarn', values.yarn, versions.yarn, 'gt');
  }
  if (values.java !== notFound) {
    checkVersion('Java (JDK)', values.java, versions.java, 'eq');
  }
  if (values.xcode !== notFound) {
    checkVersion('Xcode', values.xcode, versions.xcode, 'gt');
  }
  if (values.cocoapods !== notFound) {
    checkVersion('CocoaPods', values.cocoapods, versions.cocoapods, 'eq');
  }

  loading.stop();

  console.log(`${chalk.dim('Ambiente Geral')}`);
  console.log(`\u2794  ${chalk.bold('NodeJS')}: ${values.node}`);
  console.log(`\u2794  ${chalk.bold('NPM')}: ${values.npm}`);
  console.log(`\u2794  ${chalk.bold('NPX')}: ${values.npx}`);
  console.log(`\u2794  ${chalk.bold('Yarn')}: ${values.yarn}`);
  console.log(`\u2794  ${chalk.bold('Watchman')}: ${values.watchman}\n`);
  console.log(`${chalk.dim('Ambiente Android')}`);
  console.log(`\u2794  ${chalk.bold('Java (JDK)')}: ${values.java}`);
  console.log(`\u2794  ${chalk.bold('Java (JAVA_HOME)')}: ${values.javaVar}`);
  console.log(
    `\u2794  ${chalk.bold('Android (ANDROID_HOME)')}: ${values.android}\n`
  );
  console.log(`${chalk.dim('Ambiente iOS')}`);
  console.log(`\u2794  ${chalk.bold('Xcode')}: ${values.xcode}`);
  console.log(`\u2794  ${chalk.bold('CocoaPods')}: ${values.cocoapods}`);

  console.log('________________');
  console.log(`\n${chalk.dim('Avisos')}`);
  results.warnings.forEach((warning) => {
    console.log(
      `${chalk.yellow.bold(`\u26A0  ${warning.step}`)}: ${warning.message}`
    );
  });
  if (!results.warnings.length) {
    console.log(`${chalk.green('\u2713')} Nenhum aviso identificado!`);
  }

  console.log('________________');
  console.log(`\n${chalk.dim('Erros')}`);
  results.errors.forEach((error) => {
    console.log(`${chalk.red.bold(`\u00D7  ${error.step}`)}: ${error.message}`);
  });
  if (!results.errors.length) {
    console.log(`${chalk.green('\u2713')} Nenhum erro identificado!`);
  }

  console.log('________________');
  logEnd();
}

async function checkCommand(command, step, message, isWarning = true) {
  try {
    const result = await execute(command, 'pipe');
    const resultFirstLine = result.split('\n')[0];
    if (!resultFirstLine) throw new Error();
    return resultFirstLine;
  } catch (err) {
    const array = isWarning ? 'warnings' : 'errors';
    results[array].push({
      step,
      message,
    });
    return notFound;
  }
}

function checkVersion(step, version, required, comparison) {
  const numberVersion = Number(version.split('.')[0]);
  const numberRequired = Number(required);

  switch (comparison) {
    case 'eq':
      if (required !== version) {
        results.errors.push({
          step,
          message: `Versão do ${step} deve ser \`${required}\` (está \`${version}\`)`,
        });
      }
      break;

    case 'lt':
      if (numberVersion > numberRequired) {
        results.errors.push({
          step,
          message: `Versão do ${step} deve ser no máximo \`${required}\` (está \`${version}\`)`,
        });
      }

    case 'gt':
      if (numberVersion < numberRequired) {
        results.errors.push({
          step,
          message: `Versão do ${step} deve ser no mínimo \`${required}\` (está \`${version}\`)`,
        });
      }
      break;

    default:
      break;
  }
}

try {
  await doctor();
} catch (err) {
  loading.stop();
  WorkspaceError.handleError(err);
}
