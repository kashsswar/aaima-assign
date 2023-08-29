import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import Video from 'react-native-video';

const VideoPlayerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Video Player" />
      </Appbar.Header>
      <View style={styles.content}>
        <Video
          source={{ uri: 'https://www.example.com/sample.mp4' }} // Replace with your video URL
          style={styles.video}
          controls
        />
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
  video: {
    width: 300,
    height: 200,
  },
});

export default VideoPlayerScreen;
