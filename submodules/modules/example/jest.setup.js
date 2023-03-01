/* eslint-disable no-undef */
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
const mockLog = jest.fn();
const mockRecordError = jest.fn();

jest.mock('@react-native-firebase/crashlytics', () =>
  jest.fn().mockImplementation(() => ({
    log: mockLog,
    recordError: mockRecordError,
  })),
);

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      push: jest.fn(),
      addListener: jest.fn(),
    }),
  };
});
