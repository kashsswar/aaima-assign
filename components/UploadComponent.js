import React, { useState } from 'react';
import { View, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { sendNotificationAsync } from 'expo-notifications';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { increment } from '../actions/counterActions'; // Import the increment action
import RazorpayCheckout from 'react-native-razorpay'; // Import Razorpay
import * as Progress from 'react-native-progress'; // Import Progress

const UploadComponent = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const dispatch = useDispatch(); // Get the dispatch function

  const handleUpload = async () => {
    // ... Existing upload logic ...

    // Dispatch the increment action
    dispatch(increment());
  };

  const handlePayment = () => {
    const options = {
      description: 'File Upload Payment',
      image: 'https://your-image-url.com/logo.png',
      currency: 'INR',
      key: 'YOUR_RAZORPAY_KEY',
      amount: '100', 
      name: 'File Upload App',
      prefill: {
        email: 'user@example.com',
        contact: '1234567890',
        name: 'John Doe',
      },
      theme: { color: '#FF0000' },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        // Handle success
        console.log(data);
      
      })
      .catch((error) => {
        // Handle error (if any)
        console.log(error);
      });
  };

  return (
    <View>
      <Button title="Upload File" onPress={handleUpload} />
      <View style={{ height: 10 }} />
      <Button title="Pay for Upload" onPress={handlePayment} />
      <View style={{ height: 10 }} />
      <Progress.Bar progress={uploadProgress} width={200} />
    </View>
  );
};

export default UploadComponent;
