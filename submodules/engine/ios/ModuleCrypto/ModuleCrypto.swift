import Foundation

@objc(ModuleCrypto)
class ModuleCrypto: NSObject {

    @objc(asymmetricEncrypt:withKey:withResolver:withRejecter:)
    func asymmetricEncrypt(value: String, isProduction: Bool, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
      
        let data = AsymmetricCryptography.encryptV2(value: value, isProduction: isProduction)
          resolve(data)
    }

  @objc(getRandomByteKey:withResolver:withRejecter:)
    func getRandomByteKey(value: String, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {

        let data = SymmetricCryptography.getRandomByteKey()
          resolve(data)
      }

    @objc(symmetricEncrypt:withKey:withResolver:withRejecter:)
    func symmetricEncrypt(value: String, key: String, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        
        let data = SymmetricCryptography.encryptV2(value: value, key: key)
          resolve(data)
        }

    @objc(symmetricDecrypt:withKey:withResolver:withRejecter:)
    func symmetricDecrypt(encrypted: String, key: String, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {

        let data = SymmetricCryptography.decryptV2(encrypted: encrypted, key: key)
          resolve(data)
        }
}
