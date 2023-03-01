fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## homolog

### homolog full

```sh
[bundle exec] fastlane homolog full
```

Gerar Aplicativo FULL

### homolog standalone

```sh
[bundle exec] fastlane homolog standalone
```

Gerar App STANDALONE

----


## prepare

### prepare yarn

```sh
[bundle exec] fastlane prepare yarn
```

Executar Yarn

### prepare version

```sh
[bundle exec] fastlane prepare version
```

Trocar Versão

### prepare module

```sh
[bundle exec] fastlane prepare module
```

Trocar Módulo

### prepare name

```sh
[bundle exec] fastlane prepare name
```

Trocar Nome

----


## Android

### android name

```sh
[bundle exec] fastlane android name
```

Trocar Nome

### android generate

```sh
[bundle exec] fastlane android generate
```

Gerar Aplicativo

### android artifacts

```sh
[bundle exec] fastlane android artifacts
```

Mover Artefatos

----


## iOS

### ios name

```sh
[bundle exec] fastlane ios name
```

Trocar Nome

### ios generate

```sh
[bundle exec] fastlane ios generate
```

Gerar Aplicativo

### ios artifacts

```sh
[bundle exec] fastlane ios artifacts
```

Mover Artefatos

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
