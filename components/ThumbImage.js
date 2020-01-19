import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

export default class ThumbImage extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.showFullPhoto.bind(this, this.props.imageData)}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: this.props.imageData.urls.thumb }}
          />
          <Text ellipsizeMode='tail' numberOfLines={1} style={styles.name}>{this.props.imageData.description || this.props.imageData.alt_description || 'without name'}</Text>
          <Text ellipsizeMode='tail' numberOfLines={1} style={styles.author}>Author: {this.props.imageData.user.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  showFullPhoto = (imageData) => {
    this.props.navigation.navigate('ImageScreen', {
      imageData
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 0,
    width: vw(90)
  },
  image: {
    width: 100,
    height: 100
  },
  name: {
    fontSize: 15,
    lineHeight: 15,
    marginLeft: 10
  },
  author: {
    marginTop: 5,
    marginLeft: 10
  }
});