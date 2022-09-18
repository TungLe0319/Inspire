import { appState } from '../AppState.js';
import { Image } from '../Models/Image.js';
import { SandBox } from './AxiosService.js';

class ImagesService {
  async getImages() {
    const res = await SandBox.get('/api/images', {
      params: {
        category: 'scenic,night',
      },
    });
    // console.log( 'images',res.data);
    appState.image = new Image(res.data);
    // console.log('appState',appState.image);
  }
}
export const imagesService = new ImagesService();
