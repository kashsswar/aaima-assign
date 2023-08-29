import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading process or fetch necessary data
    // For example, you can use a setTimeout to navigate to the Login screen after a few seconds
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Navigate to the Login screen
    }, 3000); // Wait for 3 seconds

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="My App" />
      </Appbar.Header>
      <View style={styles.content}>
        <Image
          source={require('../assets/splash.png')} // Update with your splash screen image
          style={styles.image}
        />
        <Text style={styles.text}>Welcome to My App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
