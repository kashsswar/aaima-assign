import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the Home Screen</Text>
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate('Profile'); // Navigate to Profile screen
          }}
          style={styles.button}
        >
          Go to Profile
        </Button>
        {/* Add more content and buttons */}
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
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;
