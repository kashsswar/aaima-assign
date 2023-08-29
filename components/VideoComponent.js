import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import { sendNotificationAsync } from 'expo-notifications';
import { useDispatch } from 'react-redux';
import { increment } from '../actions/counterActions';
import YouTubePlayer from './components/YouTubePlayer'; // Import YouTubePlayer

const sampleVideoData = [
  { id: '1', videoId: 'dQw4w9WgXcQ', filename: 'Video 1' },
  { id: '2', videoId: 'xvFZjo5PgG0', filename: 'Video 2' },
];

const VideoComponent = () => {
  const [videoData, setVideoData] = useState(sampleVideoData);
  const dispatch = useDispatch();

  const deleteVideo = (assetId, filename) => {
    const updatedVideoData = videoData.filter((item) => item.id !== assetId);
    setVideoData(updatedVideoData);

    // Send push notification on video deletion
    sendNotificationAsync({
      title: 'Video Deleted',
      body: `${filename} has been deleted successfully.`,
    });

    // Dispatch the increment action
    dispatch(increment());
  };

  const renderVideoItem = ({ item }) => (
    <View>
      <YouTubePlayer videoId={item.videoId} height={200} />
      <Button title={`Delete ${item.filename}`} onPress={() => deleteVideo(item.id, item.filename)} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={videoData}
        keyExtractor={(item) => item.id}
        renderItem={renderVideoItem}
      />
    </View>
  );
};

export default VideoComponent;
