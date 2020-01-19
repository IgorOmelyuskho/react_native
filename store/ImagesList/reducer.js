import {
    IMAGES_LIST_ADD_IMAGES,
    IMAGES_LIST_SET_LOADER_VISIBLE,
    IMAGES_LIST_SET_PAGE_NUMBER
} from './actions';


const defaultState = {
  imagesArr: [],
  loaderIsVisible: false,
  pageNumber: 1
}

const imagesListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IMAGES_LIST_ADD_IMAGES:
      return {
        ...state,
        imagesArr: state.imagesArr.concat(action.payload),
        pageNumber: state.pageNumber + 1
      }
    case IMAGES_LIST_SET_LOADER_VISIBLE:
      return {
        ...state,
        loaderIsVisible: action.payload
      }

    default: return state;
  }
}

export default imagesListReducer;

