# Variáveis de Ambiente

Utilizamos a biblioteca `react-native-config` para implementar as variáveis de ambiente locais da aplicação.

Como essa biblioteca exige configuração no build Nativo da aplicação, ela deve ser aplicada e configurada no repositório `@mobk/main`. Com isso, as variáveis ficam expostas para o aplicativo como um todo (inclusive todos os módulos).

O build Nativo se encarrega, automaticamente, de trocar entre os arquivos `.env.homolog` e `.env.production` dependendo do flavor de build que foi escolhido. Em ambiente do desenvolvedor, é de costume compilar sempre com o flavor Homolog (flavor `Homolog` no Android, schema `OriginalHomolog` no iOS).

Atualmente, a `react-native-config` é a forma utilizada para acessar as variáveis de ambiente em tempo de execução. Ela está instalada somente no `mobk/main` e `@mobk/engine`, pois entende-se que não precisam ser expostas para cada módulo (somente para a Engine). Essa conjectura pode mudar ao longo do desenvolvimento.

#### Arquivo .env.homolog (@mobk/main)

```sh
MINHA_VAR="meu valor para homologação"
```

#### Arquivo .env.production (@mobk/main)

```sh
MINHA_VAR="meu valor para produção"
```

#### Lendo Variáveis (@mobk/engine)

```typescript
import Config from 'react-native-config'

console.log(Config.MINHA_VAR); // Dependerá do flavor do build do App.
```