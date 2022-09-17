import { appState } from '../AppState.js';
import { Quote } from '../Models/Quote.js';
import { SandBox } from './AxiosService.js';

class QuotesService {
  async getQuote() {
    const res = await SandBox.get('/api/quotes', {
      params: {
        author: 'alan watts',
      },
    });
    // console.log(res.data);
    appState.quote = new Quote(res.data);
    //  console.log('appState',appState.quote);
  }


  
}

export const quotesService = new QuotesService();
