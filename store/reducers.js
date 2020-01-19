import { combineReducers } from 'redux';
import imagesListReducer from './ImagesList/reducer';

export default combineReducers({
  imagesList: imagesListReducer,
})