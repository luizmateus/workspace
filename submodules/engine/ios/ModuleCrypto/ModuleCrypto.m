#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>


@interface RCT_EXTERN_MODULE(ModuleCrypto, NSObject)

RCT_EXTERN_METHOD(asymmetricEncrypt:(NSString *)value withKey:(BOOL *)isProduction
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)


RCT_EXTERN_METHOD(getRandomByteKey:(NSString *)value
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(symmetricEncrypt:(NSString *)value withKey:(NSString *)key
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(symmetricDecrypt:(NSString *)encrypted withKey:(NSString *)key
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end


