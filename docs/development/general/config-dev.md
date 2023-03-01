# Desafio de Desenvolvimento

O grande desafio de se trabalhar nessa proposta de arquitetura é fazer com que os pacotes se comuniquem. Ou seja, precisamos desenvolver uma funcionalidade no `@mobk/engine`, por exemplo, e fazer com que essa nova alteração seja replicada e atualizada em todos os repositórios que o utilizam.

Inicialmente, o `yarn link` seria uma solução mais prática. Contudo, ele não é compatível com React Native, e não é recomendado pelo React Native Builder Bob para esse processos.

---

# Solução de Desenvolvimento

Para solucionar esse problema, escolhemos utilizar um sistema caseiro de cópia de repositórios.

Quando executamos o `yarn prepare` em um repositório, ele irá preparar o pacote com as pastas `src`, `lib` e `package.json` (e `android`, `ios` e `.podspec` no caso da Engine). Com isso, fazemos uma cópia desse resultado, e enviamos para todos os repositórios do projeto.

Dentro do `package.json` de cada repositório, apontamos os pacotes de prefixo `@mobk/` para a própria `node_modules`, com um caminho relativo, visto que nós preencheremos ela manualmente através dos comandos disponibilizados no Workspace.

---

Próximo passo: [Desenvolvimento >> Fluxo de Desenv](./flow-dev.md)
