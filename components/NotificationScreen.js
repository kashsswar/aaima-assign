import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Download Complete', body: 'Your file download is complete and ready for viewing!' },
    { id: '2', title: 'Video Deleted', body: 'Video 1 has been deleted successfully.' },
    // Add more notification objects as needed
  ]);

  const navigation = useNavigation(); // Initialize the navigation hook

  const handleNotificationPress = (notification) => {
    // You can navigate to the relevant screen using deep linking here
    // navigation.navigate(notification.deepLink);
    // For now, just display an alert with the notification details
    alert(`Notification: ${notification.title}`);
  };

  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNotificationPress(item)}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
      />
    </View>
  );
};

export default NotificationScreen;
