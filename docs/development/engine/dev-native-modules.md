# Como Funciona?

Os Native Modules são pontes de comunicação entre o React Native (TypeScript) e o desenvolvimento Nativo (Kotlin/Swift), permitindo que funcionalidades sejam desenvolvidos na área Nativa da aplicação, e fiquem expostas para uso na área React Native.

---

# Criando Native Module

#### src/native-modules/my-example-module/index.ts

```typescript
import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR = "The package '@mobk/engine' doesn't seem to be linked.";

const ModuleCrypto = NativeModules.MyExampleModule
  ? NativeModules.MyExampleModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );

function myFunction(value: string): Promise<string> {
  return MyExampleModule.myFunction(value);
}

export const myExampleModule = {
  myFunction,
};
```

---

# Código iOS

#### ios/MyExampleModule/MyExampleModule-Bridging-Header.h

```objective-c
#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
```

#### ios/MyExampleModule/MyExampleModule.m

```objective-c
#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>

@interface RCT_EXTERN_MODULE(ModuleCrypto, NSObject)

RCT_EXTERN_METHOD(myFunction:(NSString *)value
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
```

#### ios/MyExampleModule/MyExampleModule.swift

```swift
import Foundation

@objc(MyExampleModule)
class MyExampleModule: NSObject {
  @objc(myFunction:withResolver:withRejecter:)
    func myFunction(value: String, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {

        let data = thirdPartyIntegration.execute(value)
          resolve(data)
      }
}

```

---

# Código Android

#### ios/MyNativeModule.kt

```kotlin
// Código aqui
```

---

# Exemplo: Chamando NativeModule

```typescript
// Código aqui
```

---

# Dica: Warnings

Como a Engine não é um repositório de Aplicativo React Native, e sim uma biblioteca de Componentes React Native, algumas classes do React Native na parte Nativa podem acusar algum warning ou erro de que não foram encontradas (principalmente no Xcode).

Isso pode ser ignorado, pois quando o `@mobk/engine` é instalado no `@mobk/main`, estes erros desaparecem, visto que o `@mobk/main` é um ambiente de Aplicativo React Native e conterá essas classes. É um erro comum identificado no React Native Builder Bob.

# Dica: Nome dos Módulos

TO-DO
