import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { downloadAsync } from 'expo-file-dl';
import VideoPlayer from './components/VideoPlayer';
import { useDispatch } from 'react-redux';
import { sendNotificationAsync } from 'expo-notifications';
import { increment } from '../actions/counterActions';
import * as Progress from 'react-native-progress'; // Import Progress

const DownloadComponent = () => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const videoUrl = 'https://example.com/sample.mp4';

  const dispatch = useDispatch();

  const handleDownload = async () => {
    const downloadResumable = downloadAsync(
      'https://example.com/sample.pdf',
      'file.pdf',
      {},
      (progressEvent) => {
        const progress = progressEvent.totalBytesWritten / progressEvent.totalBytesExpectedToWrite;
        setDownloadProgress(progress);
      }
    );

    try {
      await downloadResumable.downloadAsync();

      dispatch(increment());

      await sendNotificationAsync({
        title: 'Download Complete',
        body: 'Your file download is complete and ready for viewing!',
      });

      Alert.alert('Download completed successfully!');
    } catch (error) {
      Alert.alert('Download failed!');
    }
  };

  return (
    <View>
      <VideoPlayer videoUrl={videoUrl} />
      <Button title="Download File" onPress={handleDownload} />
      <View style={{ height: 10 }} />
      <Progress.Bar progress={downloadProgress} width={200} />
    </View>
  );
};

export default DownloadComponent;
