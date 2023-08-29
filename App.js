import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import mmkv from './StorageService';
import { Updates } from 'expo';
import UploadComponent from './components/UploadComponent';
import DownloadComponent from './components/DownloadComponent';
import VideoComponent from './components/VideoComponent';
import { useQuery } from '@tanstack/react-query';

import Config from 'react-native-config';
import QuizComponent from './components/QuizComponent';
import { Provider as PaperProvider, Snackbar } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './redux/store';
import { init } from '@sentry/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { withProfiler } from '@sentry/tracing';
import * as Sentry from '@sentry/react-native';
import * as Notifications from 'expo-notifications';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CachedImage, ImageCacheProvider } from 'react-native-image-cache';

import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { NavigationContainer, useLinking } from '@react-navigation/native'; // Import useLinking
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screentypes/SplashScreen';
import LoginScreen from './screentypes/LoginScreen';
import Tab1Screen from './screentypes/Tab1Screen';
import Tab2Screen from './screentypes/Tab2Screen';
import Tab3Screen from './screentypes/Tab3Screen';

init({
  dsn: 'https://e1010633771b5c73e16b192acad2dfd8@o4505767229980672.ingest.sentry.io/4505767237779456',
  enableInExpoDevelopment: true,
});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();


const theme = {
  // Define your theme here
};

const App = () => {
  const [permissionsGranted, setPermissionsGranted] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    const checkPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      if (status === 'granted') {
        setPermissionsGranted(true);
      }
    };

    checkPermissions();
  }, []);

  const checkForUpdates = async () => {
    const update = await Updates.checkForUpdateAsync({
      channel: Config.RELEASE_CHANNEL,
    });

    if (update.isAvailable) {
      // Update is available, prompt user to reload
      await Updates.reloadAsync();
    }
  };

  // Call the function whenever needed
  checkForUpdates();
  const MyComponent = () => {
    const { data, error, isLoading } = useQuery('myData', fetchMyData);
  
    if (isLoading) {
      return <Text>Loading...</Text>;
    }
  
    if (error) {
      return <Text>Error: {error.message}</Text>;
    }

  const handleStorage = async () => {
    mmkv.set('key', 'Hello, MMKV!');
    const data = mmkv.getString('key');
    console.log('Data from MMKV:', data);
  };

  const captureCustomEvent = () => {
    Sentry.captureEvent({
      message: 'Custom event captured',
      level: Sentry.Severity.Info,
    });
  };

  const offset = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value * 100 }],
    };
  });

  const startAnimation = () => {
    offset.value = withSpring(1);
    setTimeout(() => {
      offset.value = withTiming(0, { duration: 1000, easing: Easing.linear });
    }, 1000);
  };

  const showSnackbar = () => {
    setSnackbarVisible(true);
  };

  // Define your deep linking configuration here
  const { getInitialState } = useLinking(/* your deep linking config */);

  // Add the initial state to the NavigationContainer
  const [initialState, setInitialState] = useState();
  useEffect(() => {
    getInitialState()
      .then((state) => {
        if (state !== undefined) {
          setInitialState(state);
        }
      });
  }, [getInitialState]);

  return (
    <QueryClientProvider client={queryClient}>
    <ImageCacheProvider>
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <NavigationContainer initialState={initialState}> {/* Pass the initial state */}
                <Stack.Navigator initialRouteName="Splash">
                  <Stack.Screen name="Splash" component={SplashScreen} />
                  <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
                <BottomTabNavigator />
                <Tab.Navigator>
                  <Tab.Screen name="Tab1" component={Tab1Screen} />
                  <Tab.Screen name="Tab2" component={Tab2Screen} />
                  <Tab.Screen name="Tab3" component={Tab3Screen} />
                </Tab.Navigator>
              </NavigationContainer>
              <View>
                <Text>File Handling App</Text>
                <Text>Environment: {Config.ENVIRONMENT}</Text>
                <Button title="Test Storage" onPress={handleStorage} />
                <Button title="Show Snackbar" onPress={showSnackbar} />
                <Button title="Capture Event" onPress={captureCustomEvent} />
                <Button title="Start Animation" onPress={startAnimation} />
                {permissionsGranted && (
                  <View>
                  <Text>{data}</Text>
                    {/* Regular Image */}
                    <Image source={{ uri: 'your-image-url' }} />

                    {/* Cached Image */}
                    <CachedImage source={{ uri: 'your-image-url' }} />
                    <UploadComponent />
                    <DownloadComponent />
                    <VideoComponent />
                    <QuizComponent />
                  </View>
                )}
                <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}>
                  <Animated.View style={[{ width: 100, height: 100, backgroundColor: 'red' }, animatedStyle]} />
                </View>
              </View>
              <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                action={{
                  label: 'Dismiss',
                  onPress: () => setSnackbarVisible(false),
                }}
              >
                This is a snackbar!
              </Snackbar>
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </Provider>
      </PaperProvider>
    </ImageCacheProvider>
    </QueryClientProvider>
  );
};

export default withProfiler(App);
