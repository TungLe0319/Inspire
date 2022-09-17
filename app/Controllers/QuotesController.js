import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quotesService } from "../Services/QuotesService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuote() {
let quote= appState.quote
  document.getElementById('quoteDOM')
  setHTML('quoteDOM', quote.QuoteTemplate);
}

export class QuotesController{
  constructor(){
    this.getQuote()
appState.on('quote',_drawQuote)
  }


  async getQuote(){
    try {
        await quotesService.getQuote()
      } catch (error) {
        console.error('[]',error)
        Pop.error(error)
      }
  }

//  async changeQuote(){
//     try {
//        await quotesService.
//       } catch (error) {
//         console.error('[]',error)
//         Pop.error(error)
//       }
//   }


}