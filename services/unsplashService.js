import axios from 'axios';

export default class UnsplashService {
  static getPhotosList(page = 1, per_page = 10) {
    const params =  {
      page,
      per_page,
      client_id: '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'
    }
    return axios.get('https://api.unsplash.com/photos/', { params });
  }
}