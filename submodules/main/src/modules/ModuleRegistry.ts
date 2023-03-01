import type { ComponentClass } from 'react';
import { register } from 'react-native-bundle-splitter';
import { Sandbox } from '../sandbox';
import ModuleDeployment from './ModuleDeployment';

interface ModuleRegistry {
  /** Nome da rota para o Navigator. */
  route: string;
  /** Nome do pacote NPM, utilizado somente para gerar o app Standalone. */
  packageName: string;
  /** Este módulo é mandatório para a execução do app? */
  required: boolean;
  /** Componente exportado do módulo. */
  component: ComponentClass | React.FC;
}

export default (): ModuleRegistry[] => {
  const moduleDeployment = String(ModuleDeployment);

  const registry: ModuleRegistry[] = [
    {
      route: 'Example',
      packageName: '@mobk/module-example',
      required: true,
      component: register({
        loader: () => import('@mobk/module-example'),
      }),
    },
  ];

  // App Sandbox
  if (moduleDeployment === 'sandbox') {
    const sandbox: ModuleRegistry[] = [
      {
        route: 'Sandbox',
        packageName: 'sandbox',
        required: true,
        component: Sandbox,
      },
    ];
    return sandbox;
  }

  // App Full
  if (moduleDeployment === '*') {
    return registry;
  }

  // App Flex
  return registry.filter(mod => moduleDeployment === mod.packageName || mod.required);
};
