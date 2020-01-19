import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ThumbImage from '../ThumbImage';
import { BallIndicator } from 'react-native-indicators';

export default function ImagesListScreen(props) {
  ImagesListScreen.navigationOptions = {
    title: 'IMAGES LIST'
  };

  // OR USE REDUX
  // const [photosArr, setPhotosArr] = useState([]);

  useLayoutEffect(() => {
    props.getImagesThunk(props.pageNumber);
  }, []);

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            props.getImagesThunk(props.pageNumber);
          }
        }}
        scrollEventThrottle={400}>
        {props.imagesArr.map((imageData, index) =>
          <View key={index} style={styles.thumbImageWrapper}>
            <ThumbImage navigation={props.navigation} imageData={imageData} />
          </View>
        )}
      </ScrollView>
      {props.loaderIsVisible && <BallIndicator style={styles.indicator} color='orange' animationDuration={1000} />}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbImageWrapper: {
    marginTop: 10,
    marginBottom: 10
  },
  indicator: {
    position: 'absolute'
  }
});