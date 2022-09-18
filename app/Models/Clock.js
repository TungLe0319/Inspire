import { appState } from "../AppState.js"

export class Clock {
  constructor(data) {
    this.id = data.id;
    this.name = 'RegularTime';
    this.localTime = data.localTime || false;
  }

  get ClockTemplate() {
    return /*html */ `
 <span>
 <h1 class="text-shadow display-3" id="clockDOM" ">
                
       ${this.localTime? `${this.GetTime}` : `${this.GetMilitary}`}         </h1>
 </span>
    `;
  }

get GetTime() {
    const d = new Date();
    let regularTime = d.toLocaleTimeString();
    return regularTime;
  }

get   GetMilitary() {
    let d = new Date();

    let PMtime = true;
    let military = d.toLocaleTimeString('en-US', { hour12: false });

    if (!PMtime) {
      return military + ' AM';
    } else {
      return military + ' PM';
    }
  }
}