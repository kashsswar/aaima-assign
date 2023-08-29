import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const DifferentCards = () => {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Card Title 1</Title>
          <Paragraph>This is the content of Card 1.</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Card Title 2</Title>
          <Paragraph>This is the content of Card 2.</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
    width: '48%',
    marginBottom: 16,
  },
});

export default DifferentCards;
