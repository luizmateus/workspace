# VSCode

#### Download

A IDE mais compatível com esta modalidade de projeto é o Visual Studio Code.

Download: [VSCode](https://code.visualstudio.com/)

#### Configuração

Nenhuma configuração especial necessária.

> **_DICA:_** Configure o VSCode como linha de comando para facilitar o uso do Terminal. Um exemplo seria adicionar a linha a seguir no `.zshrc` (ou `.bash_profile`): `code () { VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $* ;}`.

---

# Node

#### Download

Como é um projeto estável, é recomendado sempre utilizar as versões pares do Node, especificamente as versões **16** ou **18** (no tempo de escrita desta documentação).

Download: [NodeJS Docs](https://github.com/nvm-sh/nvm)

#### Configuração

Nenhuma configuração especial necessária.

> **_DICA:_** Instale o [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) para facilitar a instalação e atualização das versões do Node. Para Windows, existe também o [Chocolatey](https://chocolatey.org/).

---

# Yarn

#### Download

O gerenciador de pacotes escolhido para o projeto é o **Yarn**, especificamente a versão **Berry**.

É necessário instalar o Yarn v1 globalmente através do comando abaixo:

```sh
npm install --global yarn
```

#### Configuração

É importante que o Yarn não seja instalado com usuário `root`, mas sim com o usuário local da máquina.

Dentro de cada repositório, existe uma pasta `.yarn`. Essa pasta contém a versão **Berry** que será utilizada pelo Yarn automaticamente. Isso já foi aplicado automaticamente através do comando `yarn set version berry`.

---

# Git Bash (Somente Windows)

#### Download

Para melhor funcionamento dos comandos deste Workspace, é recomendado utilizar o Git Bash no Windows.

Download: [Git SCM for Windows](https://git-scm.com/download/win)

#### Configuração

Garanta que o seu Git Bash está instalado no seguinte caminho:

`C:\Program Files\git\usr\bin\bash.exe`

---

# React Native

#### Download

Siga as instruções definidas na própria documentação do React Native para a preparação do ambiente necessário: [React Native Docs](https://reactnative.dev/docs/environment-setup)

Vale notar que não estaremos utilizando Expo neste projeto, portanto siga sempre os passos que não são relacionados ao mesmo.

#### Configuração

Nenhuma configuração especial necessária.

Existe uma CLI do React Native que é disparado pelos scripts automaticamente utilizando os pacotes instalados nas dependências dos projetos, não há mais necessidade de instalá-lo globalmente na máquina. Alguns outros scripts são executando utilizando **NPX**, que já embutido no próprio **NPM**.

---

# Android SDK

#### Download

Baixe o Android Studio mais atual, e instale o SDK recomendado.

Download: [Android Studio Download](https://developer.android.com/studio)

#### Configuração

Após a instalação, é necessário criar a variável de ambiente `ANDROID_HOME`. Também é recomendado adicionar os sub-diretórios `platform-tools` e `emulator` ao `PATH`.

Abaixo a configuração no `.zshrc` (ou `.bash_profile`) de um Mac:

```sh
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/emulator:$PATH
```

---

# Android Emulator

#### Download

Ao instalar o Android Studio, o mecanismo do emulador será instalado em conjunto automaticamente.

#### Configuração

Nas configurações do Android Studio, entre em AVD (Android Virtual Devices) e crie um emulador.

Caso queira, você pode criar um `alias` no seu ambiente para facilitar a abertura do emulador, sem a necessidade de abrir o Android Studio para executá-lo.

Abaixo a configuração no `.zshrc` (ou `.bash_profile`) de um Mac:

```sh
# No arquivo de configuração:
# -dns-server: Indica o servidor de DNS, resolve o problema de conexão de internet do emulador em algumas máquinas (opcional).
# -no-snapshot-load: Inicia o emulador em cold boot, resolve o problema de recarregar estado do emulador em algumas máquinas (opcional).
alias emu11="emulator -avd <nome-do-emulador> -dns-server 8.8.8.8 -no-snapshot-load"

# Para executar o emulador via terminal:
emu11
```

---

# JDK (Android)

#### Download

Necessário para a geração do aplicativo Android. Utilizamos a versão 11.

Você pode baixar o JDK oficial da Oracle. Contudo, para ambientes Mac/Linux (e até mesmo para Windows) recomendamos o OpenJDK, distribuído pelo Azul Zulu.

Download: [Azul Zulu OpenJDK 11](https://www.azul.com/downloads/?version=java-11-lts&package=jdk)

#### Configuração

Após a instalação, é necessário criar a variável de ambiente `JAVA_HOME`, e adicioná-la no `PATH`.

Abaixo a configuração no `.zshrc` (ou `.bash_profile`) de um Mac:

```sh
export JAVA_HOME=`/usr/libexec/java_home -v 11`
export PATH=${JAVA_HOME}/bin:${PATH}
```

Para confirmar a versão do Java que você tem instalado, execute o comando abaixo.

```sh
java -version
```

---

# iOS Xcode

#### Download

Você pode baixar o Xcode através do App Store no Mac. Outra opção é utilizar o Xcode Releases.

Download: [Xcode Releases](https://xcodereleases.com/)

#### Configuração

Nenhuma configuração especial necessária.

---

# iOS Simulator

#### Download

Ao instalar o iOS Xcode, o mecanismo do simulador será instalado em conjunto automaticamente.

#### Configuração

Caso necessite trocar a versão do iOS do Simulador, basta entrar no caminho abaixo do Xcode, e selecione a versão do iOS que queira utilizar.

`Xcode >> Preferences >> Components`

---

# Ruby (iOS)

#### Download

Para utilizar o CocoaPods no aplicativo iOS, é necessário ter o Ruby instalado em sua máquina.

Geralmente, as instalações do Mac já incluem os pacotes `gem`, `ruby` e `bundle` pré-instalados.

É necessário utilizar um gerenciador de versões do Ruby. Não utilize o RVM (por questões de compatibilidade).

**RBENV: [Ruby Environment Manager](https://github.com/rbenv/rbenv)**

```sh
# Instalar o RBENV
brew install rbenv ruby-build

# Inicializar o RBENV
rbenv init

# Instalar e usar versão específica do Ruby
rbenv install 2.7.5
rbenv global 2.7.5
```

#### Configuração

Através do `Gemfile`, `_ruby-version` e `_bundle` do projeto, as versões do Ruby + CocoaPods serão definidas automaticamente pelo gerenciador de versões do Ruby.

Caso seu Mac seja M1, ou esteja com problemas no build, adicione no seu `.zshrc` (ou `.bash_profile`) as seguintes linhas:

```sh
if [ -d "/opt/homebrew/opt/ruby/bin" ]; then
  export PATH=/opt/homebrew/opt/ruby/bin:$PATH
  export PATH=`gem environment gemdir`/bin:$PATH
fi
```

---

Próximo passo: [Primeiros Passos >> Configuração do Workspace](./config-workspace.md)