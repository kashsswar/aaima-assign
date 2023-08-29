import React from 'react';
import { View, Text } from 'react-native';
import { Video } from 'react-native-video';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <View>
      <Video
        source={{ uri: videoUrl }}
        style={{ width: 300, height: 200 }}
        controls
        resizeMode="contain"
      />
    </View>
  );
};

export default VideoPlayer;
