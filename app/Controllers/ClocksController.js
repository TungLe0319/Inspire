import { appState } from '../AppState.js';
import { clocksService } from '../Services/ClocksService.js';
import { Pop } from '../Utils/Pop.js';
import { setHTML, setText } from '../Utils/Writer.js';

function _drawClock() {
  let time = clocksService.getTime();
  setText('clockDOM', time);
}

export class ClocksController {
  constructor() {
    this.getTime();
    _drawClock();
  }

  getTime() {
    try {
      clocksService.getTime();
    } catch (error) {
      console.error('[]', error);
      Pop.error(error);
    }
  }



}
