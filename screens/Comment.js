// Comment.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Comment = ({ comment, onReply }) => {
  return (
    <View>
      <Text>{comment.text}</Text>
      <Button title="Reply" onPress={() => onReply(comment)} />
    </View>
  );
};

export default Comment;
