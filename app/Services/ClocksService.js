import { appState } from '../AppState.js';
import { ClocksController } from "../Controllers/ClocksController.js";
import { Clock } from '../Models/Clock.js';

class ClocksService {
  getTime() {
  const d = new Date()
  let regularTime = d.toLocaleTimeString()
 return regularTime
  }


  getmilitary(){
    let d = new Date()

let PMtime = true
   let military = d.toLocaleTimeString('en-US',{hour12 : false})

if (!PMtime) {
 return military + " AM"
}
else{
  return military + " PM"}

}

 async toggleTime(){
 
let time = appState.clock
time.localTime = !time.localTime
console.log(appState.clock.localTime);
}

}

export const clocksService = new ClocksService();
