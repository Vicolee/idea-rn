
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
      />
      <Text>
        This is going to be the homefeed.
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
});
