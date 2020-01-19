import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function ImageScreen(props) {
  ImageScreen.navigationOptions = {
    title: 'VIEW IMAGE'
  };

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={{ uri: props.navigation.getParam('imageData', 'NO-ID').urls.regular }}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  }
});