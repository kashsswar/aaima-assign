import React from 'react';
import { View, Text } from 'react-native';

const Tab1Screen = ({ route }) => {
  const { params } = route;

  return (
    <View>
      <Text>Tab 1 Screen</Text>
      {params && <Text>Received Param: {params.paramName}</Text>}
    </View>
  );
};

export default Tab1Screen;
