/** @type {Detox.DetoxConfig} */
module.exports = {
  logger: {
    level: process.env.CI ? 'debug' : undefined,
  },
  testRunner: {
    args: {
      config: '__tests__/e2e/jest.config.js',
      maxWorkers: process.env.CI ? 2 : undefined,
      _: ['e2e'],
    },
  },
  artifacts: {
    plugins: {
      log: process.env.CI ? 'failing' : undefined,
      screenshot: process.env.CI ? 'failing' : undefined,
    },
  },
  apps: {
    'ios.release': {
      type: 'ios.app',
      binaryPath: '../../main/ios/build/Build/Products/Debug-iphonesimulator/Original.app',
      build:
        'export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild -workspace ../../main/ios/Original.xcworkspace -UseNewBuildSystem=NO -scheme Original -configuration Release -sdk iphonesimulator -derivedDataPath ../../main/ios/build -quiet',
    },
    'ios.debug': {
      type: 'ios.app',
      binaryPath: '../../main/ios/build/Build/Products/Debug-iphonesimulator/Original.app',
      build:
        'xcodebuild -workspace ../../main/ios/Original.xcworkspace -UseNewBuildSystem=NO -scheme Original -configuration Debug -sdk iphonesimulator -derivedDataPath ../../main/ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: '../../main/android/app/build/outputs/apk/homolog/debug/app-homolog-debug.apk',
      testBinaryPath: '../../main/android/app/build/outputs/apk/androidTest/homolog/debug/app-homolog-debug-androidTest.apk',
      build: 'cd ../../main/android  ; ./gradlew assembleHomologDebug assembleAndroidTest -DtestBuildType=debug ; cd -',
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: '../../main/android/app/build/outputs/apk/homolog/release/app-homolog-release.apk',
      testBinaryPath: '../../main/android/app/build/outputs/apk/androidTest/homolog/release/app-homolog-release-androidTest.apk',
      build: 'cd ../../main/android  ; ./gradlew assembleHomologRelease assembleAndroidTest -DtestBuildType=release ; cd -',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      headless: Boolean(process.env.CI),
      device: {
        type: 'iPhone 14 Pro',
      },
    },
    emulator: {
      type: 'android.emulator',
      headless: Boolean(process.env.CI),
      gpuMode: process.env.CI ? 'off' : undefined,
      device: {
        avdName: 'Pixel_3a_API_33_x86_64',
      },
      // utilBinaryPaths: [
      //   "./cache/test-butler-app.apk"
      // ],
    },
    'genymotion.emulator.uuid': {
      type: 'android.genycloud',
      device: {
        recipeUUID: 'a50a71d6-da90-4c67-bdfa-5b602b0bbd15',
      },
      // utilBinaryPaths: [
      //   "./cache/test-butler-app.apk"
      // ],
    },
    'genymotion.emulator.name': {
      type: 'android.genycloud',
      device: {
        recipeName: 'Detox_Pixel_API_29',
      },
      // utilBinaryPaths: [
      //   "./cache/test-butler-app.apk"
      // ],
    },
  },
  configurations: {
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release',
    },
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'ios.manual': {
      type: 'ios.manual',
      behavior: {
        launchApp: 'manual',
      },
      artifacts: false,
      session: {
        autoStart: true,
        server: 'ws://localhost:8099',
        sessionId: 'com.wix.demo.react.native',
      },
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
    },
  },
};
