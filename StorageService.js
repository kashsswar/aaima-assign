// StorageService.js
import MMKVStorage from 'react-native-mmkv-storage';

// Create an instance of MMKV and initialize it
const mmkv = new MMKVStorage.Loader().initialize();

export default mmkv;
