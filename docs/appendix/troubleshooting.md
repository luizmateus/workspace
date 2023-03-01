# React Native

---

# Android

---

# iOS

#### Erro no "RCTBridgeDelegate"

Se você estiver trabalhando no repositório `@mobk/engine`, este erro é comum, e pode ser ignorado. Isso ocorre porque, como a Engine não é aplicativo React Native, ele não encontra o pacote. Contudo, como o destino dela é ser instalada em um aplicativo React Native, na hora da execução em si, encontrará o pacote.

Se este erro aparecer no momento do build do aplicativo, isso pode indicar que o `pod install` não executou corretamente. Verifique se você tem a versão correta do Ruby, assim como o CocoaPods corretamente instalado.

Geralmente, ocorre em casos de Mac M1. Caso nada funcione, peça para um colega com Mac M1 testar o build - infelizmente, como é uma arquitetura nova de computação, ainda ocorrem alguns erros que a comunidade de React Native ainda não identificaram. Um deles, por exemplo, é existir um erro de código iOS na Engine, e na hora de instalar na Main, retorna este erro genérico ao invés do erro correto.