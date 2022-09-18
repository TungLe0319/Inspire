import { appState } from '../AppState.js';
import { clocksService } from '../Services/ClocksService.js';
import { Pop } from '../Utils/Pop.js';
import { setHTML, setText } from '../Utils/Writer.js';

function _drawClock() {

  let time = clocksService.getTime();

  let militaryTime = clocksService.getmilitary()
  if (appState.clock.localTime) {
    
    setText('clockDOM', time);
  }else{

    setText('clockDOM',militaryTime);
  }
}


function _testDrawClock(){
  setHTML('testclock', appState.clock.ClockTemplate)
}

export class ClocksController {
  constructor() {
    _drawClock();
    setInterval(_drawClock, 1000);

  }

  getTime() {
    try {
      clocksService.get24Hour();
    } catch (error) {
      console.error('[]', error);
      Pop.error(error);
    }
  }

 async toggleTime(){
    try {
     await  clocksService.toggleTime()
      } catch (error) {
        console.error('[]',error)
        Pop.error(error)
      }
  }


}
