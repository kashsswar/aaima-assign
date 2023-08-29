// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UploadComponent from './components/UploadComponent';
import DownloadComponent from './components/DownloadComponent';
import VideoComponent from './components/VideoComponent';
import QuizComponent from './components/QuizComponent';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Upload" component={UploadComponent} />
      <Tab.Screen name="Download" component={DownloadComponent} />
      <Tab.Screen name="Video" component={VideoComponent} />
      <Tab.Screen name="Quiz" component={QuizComponent} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
