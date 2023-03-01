//
//  RSAUtil.swift
//  FoundationOriginalFoundationIphone
//
//  Created by de GFT on 18/12/17.
//
//

import Foundation

class RSAUtil {
    
    var publicKey = ""
    
    static let sharedInstance = RSAUtil()
    
    func initKey(){
//        var myDict: NSDictionary?
//        if let path = Bundle.main.path(forResource: "Crypto", ofType: "plist") {
//            myDict = NSDictionary(contentsOfFile: path)
//        }
//        if let dict = myDict {
//            publicKey = dict["serverPublicKey"] as? String ?? ""
//        }
    }

    
    //MARK: - Crypt and Decrypt methods
    
    func encrypt(plainStr : String) -> String {
        
        let encryptedStr = encryptWithRSAPublicKey(plainStr: plainStr, base64Key: publicKey)
        return encryptedStr
    }
    
    // MARK: - RSA Methods

    // Encrypt data with a RSA public key
    func encryptWithRSAPublicKey(plainStr: String, base64Key: String) -> String {
        
        let utf8str = (plainStr as NSString).data(using: String.Encoding.utf8.rawValue)
        let dataEncrypted = RSA.encryptData(utf8str, publicKey: base64Key)
        let decodesString = dataEncrypted?.base64EncodedString()
        return decodesString ?? ""
        
    }
    
}
