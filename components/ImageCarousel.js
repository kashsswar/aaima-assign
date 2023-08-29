import React from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const ImageCarousel = () => {
  const images = [
    require('./assets/image1.jpeg'),
    require('./assets/image2.jpg'),
    require('./assets/image3.jpg'),
  ];

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <Carousel
      data={images}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={200}
      layout={'default'}
    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 200,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },
});

export default ImageCarousel;
