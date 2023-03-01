import fs from 'fs';
import { getMainModule, getModules } from './modules.js';

export async function initSandbox() {
  const modules = await getModules();
  const main = getMainModule(modules);
  const sandboxPath = `${main.path}/src/sandbox`;

  fs.mkdirSync(sandboxPath, { recursive: true });
  fs.writeFileSync(
    `${sandboxPath}/index.tsx`,
    "import { AppPage } from '@mobk/engine';\n" +
      "import React, { useEffect } from 'react';\n" +
      "import { Text, View } from 'react-native';\n" +
      '\n' +
      'export const Sandbox: React.FC = () => {\n' +
      '  useEffect(() => {\n' +
      "    console.log('Sandbox');\n" +
      '  }, []);\n' +
      '\n' +
      '  return (\n' +
      '    <AppPage>\n' +
      '      <View>\n' +
      '        <Text>Sandbox</Text>\n' +
      '      </View>\n' +
      '    </AppPage>\n' +
      '  );\n' +
      '};\n'
  );
}
