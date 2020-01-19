import { connect } from 'react-redux';
import ImagesListScreen from './ImagesListScreen';
import { getImagesThunk } from '../../store/ImagesList/actions';

const mapStateToProps = state => {
  const st = state.imagesList;
  return {
    imagesArr: st.imagesArr,
    loaderIsVisible: st.loaderIsVisible,
    pageNumber: st.pageNumber
  }
}

const mapDispatchToProps = {
  getImagesThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesListScreen);