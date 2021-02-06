import 'react-native-gesture-handler/jestSetup';
import { NativeModules } from 'react-native';

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {};

    return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('./node_modules/react-native-gesture-handler');



jest.mock('react-native/Libraries/Utilities/Platform', () => ({
    OS: 'ios', // or 'ios' , 'android'
    select: () => null
}));

//
// jest.mock('./node_modules/react-native/Libraries/BatchedBridge/NativeModules', () => ({
//     IOSVideoModule: {
//         getVideoData: jest.fn(),
//     },
// }));


