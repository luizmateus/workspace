# Pacotes NPM

Uso de pacotes NPM padronizado, onde cada módulo exporta um Stack Navigator, é instalado no aplicativo principal, e utilizado como um Stack Navigator aninhado. Além disso, os módulos compartilhados (Engine e Design System) também são exportados como pacotes NPM. A ideia é que tudo seja visto como componente ou utilitário, e utilize a própria resolução de pacotes para a distribuição.

---

#### Opção Descartada: Re.Pack

É um pacote criado pela Callstack para utilizar o Webpack dentro do ambiente do React Native. Contudo, ainda está um pouco experimental, e não se encaixa muito bem com a arquitetura multi-repositório proposta - por exemplo, os frameworks de Vendors teriam que ser especificados de forma duplicada em todos os repositórios.

Foi mantido como ponto de estudo, caso tenham novas evoluções que facilitem a implementação.

#### Opção Descartada: Wix Engine

É um exemplo de arquitetura multi-repositório construído pela Wix. Contudo, observamos que possui uma complexidade muito grande para a abordagem mais simplista que precisamos. Por exemplo, no caso da Wix, eles necessitavam que cada módulo fosse um sub-aplicativo por si mesmo (que possa ter seu próprio ciclo de vida), enquanto que no caso do Original, cada módulo é somente parte de um único aplicativo. Abstraímos para a nossa abordagem as melhores partes.
