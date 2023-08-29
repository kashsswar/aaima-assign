import React from 'react';
import { View, Text } from 'react-native';

const Tab2Screen = ({ route }) => {
  const { params } = route;

  return (
    <View>
      <Text>Tab 2 Screen</Text>
      {params && <Text>Received Param: {params.paramName}</Text>}
    </View>
  );
};

export default Tab2Screen;
