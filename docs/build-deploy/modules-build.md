# Como funciona?

Os módulos (`@mobk/modules-*`), assim como a Engine (`@mobk/engine`) e o Design System (`@mobk/design-system`), foram gerados através do gerador `Create React Native Library`, que é utilizado para gerar bibliotecas NPM compatíveis com React Native.

Bibliotecas geradas com `Create React Native Library` já vêm acopladas com o compilador `React Native Builder Bob`. Este compilador se responsabiliza por gerar um pacote NPM pronto para instalação, assim como compilar os desenvolvimentos nativos.

---

# Comando

Execute o comando `yarn prepare` para compilar o projeto.

Vale notar que o script `prepare` é reservado pelo NPM/Yarn, e será automaticamente executado antes de qualquer comando `publish` (seja do Yarn/NPM ou do Yalc).

O resultado da compilação fica dentro da pasta `lib`.

---

# TypeScript

A tipagem TypeScript é gerada automaticamente pelo `React Native Builder Bob`. O projeto é compatível com arquivos `.ts` e `.tsx`.

Se houver algum problema de tipagem, será identificado pelo compilador.

---

# Referências Externas

[Documentação do `React Native Builder Bob`](https://github.com/callstack/react-native-builder-bob)