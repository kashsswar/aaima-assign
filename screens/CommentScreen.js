// CommentScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import Comment from './Comment';
import Reply from './Reply';

const CommentScreen = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from API and update state
    // For example, using Axios or Fetch
    // setComments(responseData);
  }, []);

  const handleReply = (comment) => {
    // Show a reply input box for the selected comment
    // Set the comment ID to track which comment is being replied to
  };

  return (
    <View>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Comment comment={item} onReply={handleReply} />
            {item.replies.map((reply) => (
              <Reply key={reply.id} reply={reply} />
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default CommentScreen;
