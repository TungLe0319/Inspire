import { appState } from '../AppState.js';
import { Image } from '../Models/Image.js';
import { SandBox } from './AxiosService.js';

class ImagesService {
  async getImages() {
    const res = await SandBox.get('/api/images', {
      params: {
        category: `${appState.style.light ? 'bird' : 'turtle'}`,
      },
    });

    appState.image = new Image(res.data);
  }
}
export const imagesService = new ImagesService();
