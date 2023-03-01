# Lanes Principais

Abaixo constam os detalhes das Lanes do Fastlane do aplicativo, que tem o explícito propósito de serem acionadas pelas esteiras de geração de aplicativos.

Estes comandos orquestram diversos dos comandos da categoria **Lanes Adicionais**, por isso geralmente não há necessidade de executá-los diretamente.

## Homologação

```sh
# Formato
fastlane homolog <type> <params>

# Exemplos
fastlane homolog push
fastlane homolog full
fastlane homolog standalone version:1.0.0 module:@mobk/module-example name:Example
```

- As variações de `type` disponíveis são:
    - `push`: Executar o deploy somente do Bundle via CodePush (configuração atual _mockada_);
    - `full`: Gerar um aplicativo Full, contendo todos os módulos;
    - `standalone`: Gerar um aplicativo Standalone, contendo somente um Módulo + Módulos mandatórios;

- Os parâmetros disponíveis em `params` são utilizados caso o `type` seja `standalone`, e devem ser passados no formato `param:value`:
    - `version`: Número da versão para o aplicativo a ser gerado;
    - `module`: Nome do pacote NPM do módulo qeu deve ser incluído no aplicativo;
    - `name`: Nome do aplicativo que será exibido no celular (e também será utilizado para customizar o Bundle ID);

## Produção

TO-DO

---

# Lanes Adicionais

Abaixo constam os detalhes das Lanes que não são necessariamente para uso nas esteiras, mas sim para orquestração interna por parte das **Lanes Principais**.

## Preparação de Ambiente

Preparação do ambiente para compilação.

### Yarn

```sh
fastlane prepare yarn pkg:<pkg>

# Exemplos
fastlane prepare yarn pkg:rc
fastlane prepare yarn pkg:latest
```

Este comando instala todos os pacotes prefixados com `@mobk` com base no Package Registry configurado no `.yarnrc.yml`.

Parâmetros:

- `pkg`: Versão dos pacotes que devem ser instalados. Pode ser `latest` (versão da branch *master*) ou `rc` (versão da branch *develop*).

### Version

```sh
# Formato
fastlane prepare version version:<version>

# Exemplos
fastlane prepare version version:1.2.0
fastlane prepare version version:1.3.5
```

Este comando aplica a versão passada como parâmetro no `package.json`, e nos aplicativos Android e iOS.

Parâmetros:

- `version`: Versão do aplicativo, no formato Semantic Versioning;

### Module

```sh
# Formato
fastlane prepare module module:<module>

# Exemplos
fastlane prepare module module:@mobk/module-example
fastlane prepare module module:@mobk/module-pix
```

Este comando liga o módulo Standalone no aplicativo, registrando qual módulo deve ser compilado.

Parâmetros:

- `module`: Nome do pacote NPM do módulo que deve ser incluído no aplicativo.

### Name

```sh
# Formato
fastlane prepare name name:<name>

# Exemplos
fastlane prepare name name:Example
fastlane prepare name name:Pix
```

Este comando altera o nome do aplicativo que será compilado.

Parâmetros:

- `name`: Nome que deve ser aplicado.

## Android

Executar comandos relacionados à plataforma Android.

### Name

```sh
# Formato
fastlane android name name:<name>

# Exemplos
fastlane android name name:Example
fastlane android name name:Pix
```

Este comando altera o nome do aplicativo que será compilado, assim como seu Bundle ID.

Parâmetros:

- `name`: Nome que deve ser aplicado.

### Generate

```sh
# Formato
fastlane android generate flavor:<flavor>

# Exemplos
fastlane android generate flavor:Homolog
fastlane android generate flavor:Production
```

Este comando gera um aplicativo APK, conforme o flavor escolhido.

Parâmetros:

- `flavor`: Flavor do aplicativo, podendo ser `Homolog` ou `Production`.

## iOS

Executar comandos relacionados à plataforma iOS.

### Name

```sh
# Formato
fastlane ios name name:<name>

# Exemplos
fastlane ios name name:Example
fastlane ios name name:Pix
```

Este comando altera o nome do aplicativo que será compilado, assim como seu Bundle ID.

Parâmetros:

- `name`: Nome que deve ser aplicado.

### Generate

```sh
# Formato
fastlane ios generate flavor:<flavor>

# Exemplos
fastlane ios generate flavor:Homolog
fastlane ios generate flavor:Production
```

Este comando gera um aplicativo IPA, conforme o flavor escolhido.

Parâmetros:

- `flavor`: Flavor do aplicativo, podendo ser `Homolog` ou `Production`.

