import { appState } from "../AppState.js"
import { Clock } from "../Models/Clock.js"

class ClocksService {
  getTime() {
    const d = new Date();
    let hour = d.getHours();

    let minutes= d.getMinutes()


    let time = hour + ":"+ minutes + " AM"
    // console.log(time);
   return time
  }

 


}

export const clocksService = new ClocksService()