import { appState } from '../AppState.js';
import { Clock } from '../Models/Clock.js';

class ClocksService {
  getTime() {
    const d = new Date();

    return d.toLocaleTimeString();
  }


  getmilitary(){
    let d = new Date()

let PMtime = true
   let military = d.toLocaleTimeString('en-US',{hour12 : false})

if (!PMtime) {
 return military + "PM"
}
else{
  return military + "AM"}

}
}

export const clocksService = new ClocksService();
