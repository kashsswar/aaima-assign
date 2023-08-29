// Reply.js
import React from 'react';
import { View, Text } from 'react-native';

const Reply = ({ reply }) => {
  return (
    <View>
      <Text>{reply.text}</Text>
      <Text>By: {reply.author}</Text>
    </View>
  );
};

export default Reply;
