//
//  RSAManager.h
//  FoundationOriginalFoundationIphone
//
//  Created by supremeleader on 22/01/16.
//
//

#ifndef RSA_h
#define RSA_h


#import <Foundation/Foundation.h>

@interface RSA : NSObject

+ (NSData *)encryptData:(NSData *)data withKeyRef:(SecKeyRef) keyRef;
+ (NSData *)decryptData:(NSData *)data withKeyRef:(SecKeyRef) keyRef;

// return base64 encoded string
+ (NSString *)encryptString:(NSString *)str publicKey:(NSString *)pubKey;
// return raw data
+ (NSData *)encryptData:(NSData *)data publicKey:(NSString *)pubKey;

// decrypt base64 encoded string, convert result to string(not base64 encoded)
+ (NSString *)decryptString:(NSString *)str publicKey:(NSString *)pubKey;
+ (NSData *)decryptData:(NSData *)data publicKey:(NSString *)pubKey;
+ (NSString *)decryptString:(NSString *)str privateKey:(NSString *)privKey;
+ (NSData *)decryptData:(NSData *)data privateKey:(NSString *)privKey;


@end

#endif /* RSA_h */


