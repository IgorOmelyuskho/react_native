import UnsplashService from '../../services/unsplashService';

export const IMAGES_LIST_ADD_IMAGES = 'IMAGES_LIST_ADD_IMAGES';
export const IMAGES_LIST_SET_LOADER_VISIBLE = 'IMAGES_LIST_SET_LOADER_VISIBLE';
export const IMAGES_LIST_SET_PAGE_NUMBER = 'IMAGES_LIST_SET_PAGE_NUMBER';


export const addImages = imagesArr => ({
  type: IMAGES_LIST_ADD_IMAGES,
  payload: imagesArr
})

export const setLoaderVisible = (visible) => ({
  type: IMAGES_LIST_SET_LOADER_VISIBLE,
  payload: visible
})


export const getImagesThunk = (pageNumber) => {
  return dispatch => {
    dispatch(setLoaderVisible(true));
    UnsplashService.getPhotosList(pageNumber, 10)
      .then(response => {
        dispatch(addImages(response.data));
        dispatch(setLoaderVisible(false));
      })
  }
};
