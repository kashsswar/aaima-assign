import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <View style={styles.content}>
        <Text style={styles.title}>User Profile</Text>
        <Text>Name: John Doe</Text>
        <Text>Email: john@example.com</Text>
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate('VideoPlayer'); // Navigate to VideoPlayer screen
          }}
          style={styles.button}
        >
          Play Video
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

export default ProfileScreen;
