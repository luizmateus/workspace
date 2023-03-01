//
//  AsymmetricCryptography.swift
//  Common
//
//  Created by Sergio Osiro Bergmann on 22/07/19.
//  Copyright © 2019 Banco Original. All rights reserved.
//

import Foundation

public class AsymmetricCryptography {
    
    static let cryptoBits = 2048
    static let tag = "AsymmetricCryptography"
    
    public static func generateKeyPair() -> (Data, Data) {
        return try! CC.RSA.generateKeyPair(cryptoBits)
    }
    
    private static func publicKeyFromString(_ value: String) -> Data? {
        do {
            return try SwKeyConvert.PublicKey.pemToPKCS8DER(value)
        } catch {
            return nil
        }
    }
    
    private static func publicKeyFromByteArray(_ value: Data) -> String? {
        return SwKeyConvert.PublicKey.derToPKCS8PEM(value)
    }
    
    private static func privateKeyFromString(_ value: String) -> Data? {
        do {
            return try SwKeyConvert.PrivateKey.pemToPKCS1DER(value)
        } catch {
            return nil
        }
    }
    
    public static func encrypt(value: String, publicKey: String) -> String? {
        return encrypt(value: value, publicKey: publicKeyFromString(publicKey))
    }
    
    public static func encrypt(value: String, publicKey: Data?) -> String? {
    
        if (publicKey == nil) {
            return nil
        }
        
        let dataValue: Data = Data.init(base64Encoded: value) ?? Data.init()
        let dataTag: Data = Data(tag.utf8)
        
        do {
            let encryptedBytes: Data = try CC.RSA.encrypt(dataValue, derKey: publicKey!, tag: dataTag, padding: .oaep, digest: .sha1)
            return encryptedBytes.base64EncodedString()
        }
        catch {
            return nil
        }
    }
    
    public static func decrypt(value: String, privateKey: String) -> String? {
        return decrypt(value: value, privateKey: privateKeyFromString(privateKey))
    }
    
    public static func decrypt(value: String, privateKey: Data?) -> String? {
    
        if (privateKey == nil) {
            return nil
        }
        
        let dataValue: Data = Data.init(base64Encoded: value) ?? Data.init()
        let dataTag: Data = Data(tag.utf8)
        
        do {
            let decryptedBytes: (Data, Int) = try CC.RSA.decrypt(dataValue, derKey: privateKey!, tag: dataTag, padding: .oaep, digest: .sha1)
            return String.init(data: decryptedBytes.0, encoding: .utf8)
        }
        catch {
            return nil
        }
    }
}

public extension AsymmetricCryptography {
    static func encryptV2(value: String, isProduction: Bool) -> String? {
        
        let encryptedMessage = RSAUtil().encryptWithRSAPublicKey(plainStr: value, base64Key: AsymmetricCryptography.getPublicKey(isProduction: isProduction))
        
        return encryptedMessage
    }
        
    private static func getPublicKey(isProduction: Bool) -> String {
        if(isProduction){
            return PublicKeyHelper.keyProd
        }
        return PublicKeyHelper.keyHomol

    }

}
