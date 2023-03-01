# Globais

Em tese, o repositório `@mobk/main` não deve ter desenvolvimento de regra de negócio, visto que cada módulo contemplará suas próprias regras e telas.

Contudo, existem pontos que necessitam, obrigatoriamente, de implementação na Main: **configurações globais**.

As configurações globais são, geralmente, atreladas com frameworks específicos, ou associadas com alguma mudança no processo de build da aplicação (Android e iOS). Um exemplo é o **Firebase**, que só funciona se as suas configurações estiverem implementadas diretamente na Main.

Para casos assim, é permitido o desenvolvimento diretamente neste repositório. Contudo, é importante utilizar a `@mobk/engine` para exportar funcionalidades. Por exemplo, no caso do **Firebase**, ele está configurado dentro da Main (arquivos de build do Android, arquivos de build do iOS, inicialização de listeners na abertura do aplicativo, etc.). Contudo, as funções que podemos chamar do Firebase (enviar tagueamento, implementação dos handlers de notificação) se encontram dentro da Engine, de forma que fiquem disponíveis para todos os módulos do aplicativo.
