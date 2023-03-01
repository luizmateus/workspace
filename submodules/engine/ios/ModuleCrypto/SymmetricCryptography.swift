//
//  SymmetricCryptography.swift
//  Common
//
//  Created by Sergio Osiro Bergmann on 22/07/19.
//  Copyright © 2019 Banco Original. All rights reserved.
//

import Foundation
import CryptoSwift

public class SymmetricCryptography {
    private static func getSecretKeySepc(_ key: String) -> Array<UInt8> {
        return Array(key.utf8)
    }
    
    public static func encrypt(value: String, key: String) -> String {
        let skeySpec = getSecretKeySepc(key)
        let dataValue = Array(value.utf8)
        
        let iv: Array<UInt8> = AES.randomIV(AES.blockSize)
        var encrypted: Array<UInt8> = Array.init()
        do {
            let aes = try AES(key: skeySpec, blockMode: CBC(iv: iv), padding: .pkcs5)
            encrypted = try aes.encrypt(dataValue)
        }
        catch { }
        var cipherMessage = Data.init()
        cipherMessage.append(Data(iv))
        cipherMessage.append(Data(encrypted))
        
        return cipherMessage.base64EncodedString()
    }
    
    public static func decrypt(encrypted: String, key: String) -> String {
    
        let skeySpec = getSecretKeySepc(key)
        let dataEncrypted: Data = Data.init(base64Encoded: encrypted) ?? Data.init()
        
        let iv = Array(dataEncrypted.prefix(upTo: AES.blockSize))
        
        var encrypted: Array<UInt8> = Array.init()
        let cipherText = Array(dataEncrypted.suffix(from: AES.blockSize))
        
        do {
            let aes = try AES(key: skeySpec, blockMode: CBC(iv: iv), padding: .pkcs5)
            encrypted = try aes.decrypt(cipherText)
        }
        catch { }
        
        return String(data: Data(encrypted), encoding: .utf8) ?? ""
    }
    
    public static func encryptV2(value: String, key: String) -> String {
            
        let skeySpec = getSecretKeySepc(key)
        let dataValue = Array(value.utf8)
        
        let ivString = SymmetricCryptography.getRandom()
        let iv: Array<UInt8> = ivString.bytes
        var encrypted: Array<UInt8> = Array.init()
        do {
            let aes = try AES(key: skeySpec, blockMode: GCM(iv: iv, mode: .combined), padding: .noPadding)
            encrypted = try aes.encrypt(dataValue)
        }
        catch { }
        
        var cipherMessageString = String()
        cipherMessageString = String(decoding: Data(iv), as: UTF8.self)
        cipherMessageString = cipherMessageString + Data(encrypted).base64EncodedString()
        return cipherMessageString
    }
    
    public static func decryptV2(encrypted: String, key: String) -> String {
            
        let skeySpec = getSecretKeySepc(key)
        
        let ivString = encrypted.substring(0, length: 16)
        let message = encrypted.substring(16)
        
        let dataEncrypted: Data = Data.init(base64Encoded: message) ?? Data.init()
        
        let iv = ivString.bytes
        
        var encrypted: Array<UInt8> = Array.init()
        guard let messageDecoded = Data(base64Encoded: message)?.bytes else { return "" }
        
        do {
            let aes = try AES(key: skeySpec, blockMode: GCM(iv: iv, mode: .combined), padding: .noPadding)
            encrypted = try aes.decrypt(messageDecoded)
        }
        catch { }
        
        return String(data: Data(encrypted), encoding: .utf8) ?? ""
    }
    
    public static func getRandomByteKey() -> String {
        var bytes = [UInt8](repeating: 0, count: 16)
        let result = SecRandomCopyBytes(kSecRandomDefault, bytes.count, &bytes)
        guard result == errSecSuccess else {
            print("Problem generating random bytes")
            return ""
        }
        return Data(bytes).base64EncodedString()
    }
    
    public static func getRandomBytes() -> [UInt8] {
        var bytes = [UInt8](repeating: 0, count: 16)
        let result = SecRandomCopyBytes(kSecRandomDefault, bytes.count, &bytes)
        guard result == errSecSuccess else {
            print("Problem generating random bytes")
            return []
        }
        return bytes
    }
    
    private static func getRandom() -> String {
        let alphabet        = "ABCDEFGHIJKLMNOPQRSTUVXZabcdefghijklmnopqrstuv/+"
        let alphabetArray   = Array(alphabet)
        
        var editedString = ""
        for _ in 0...15 {
            editedString = editedString + String(alphabetArray.randomElement() ?? "A")
        }
        
        return editedString
    }

}


extension String {
    func substring(_ from: Int, length: Int? = nil) -> String {
        
        let to: Int = length ?? self.count - from
        let start = index(startIndex, offsetBy: from)
        let end = index(startIndex, offsetBy: from + to)
        return String(self[start ..< end])
    }
    
    public var bytes: Array<UInt8> {
        data(using: String.Encoding.utf8, allowLossyConversion: true)?.bytes ?? Array(utf8)
    }
}

extension Data {
    public var bytes: Array<UInt8> {
        Array(self)
    }
}
