- [Firebase: RNFirebase](#firebase-rnfirebase)
- [Release NPM: Semantic Release](#release-npm-semantic-release)
- [Release App: Fastlane](#release-app-fastlane)
- [Compiler: Metro + Babel + ESBuild](#compiler-metro--babel--esbuild)

# Firebase: RNFirebase

Versões do Jest e React Testing Library adaptados para o ambiente do React Native, simples de utilizar e fácil de implementar.

# Release NPM: Semantic Release

Versões do Jest e React Testing Library adaptados para o ambiente do React Native, simples de utilizar e fácil de implementar.

# Release App: Fastlane

Versões do Jest e React Testing Library adaptados para o ambiente do React Native, simples de utilizar e fácil de implementar.

# Compiler: Metro + Babel + ESBuild

Versões do Jest e React Testing Library adaptados para o ambiente do React Native, simples de utilizar e fácil de implementar.

---

<!-- omit in toc -->
#### Opção Descartada: Yalc

Ferramenta para publicação de pacotes NPM no ambiente do desenvolvedor. Não teve um bom suporte para uso com sub-dependências (ex: Engine dependendo de Design System), e ocasionava alterações no `package.json`, que podiam ser commitados pelo desenvolvedor e impactar os outros ambientes.

<!-- omit in toc -->
#### Opção Descartada: Verdaccio

Ferramenta para publicação de pacotes NPM no ambiente do desenvolvedor, assim como o Yalc, mas com uma vertente mais próxima de um Package Registry oficial. Não teve um bom suporte para uso com sub-dependências (ex: Engine dependendo de Design System), e ocasionava alterações no `package.json`, que podiam ser commitados pelo desenvolvedor e impactar os outros ambientes. Além disso, a lentidão atrapalhava o Hot Reload.

<!-- omit in toc -->
#### Opção Descartada: Release It

Análogo ao Semantic Release. Não teve boa compatibilidade com GitLab e AWS CodeArtifact.
