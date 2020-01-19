import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ImagesListScreenContainer from './components/ImagesListScreen/ImagesListScreenContainer';
import ImageScreen from './components/ImageScreen';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

const AppNavigator = createStackNavigator(
  {
    ImageScreen: {
      screen: ImageScreen,
    },
    ImagesListScreen: {
      screen: ImagesListScreenContainer,
    }
  },
  {
    initialRouteName: 'ImagesListScreen',
  }
);

export const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <AppContainer />
    </Provider>;
  }
}