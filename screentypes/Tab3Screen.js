import React from 'react';
import { View, Text } from 'react-native';

const Tab3Screen = ({ route }) => {
  const { params } = route;

  return (
    <View>
      <Text>Tab 3 Screen</Text>
      {params && <Text>Received Param: {params.paramName}</Text>}
    </View>
  );
};

export default Tab3Screen;
