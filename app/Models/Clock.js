import { appState } from "../AppState.js"

export class Clock {


  constructor(data) {

this.localtime=data.localtime ||false
  }



  get ClockTemplate() {
    return /*html */ `
    <span>
              <h1 class="text-shadow "> ${this.Time}</h1>
            </span>
   
    `;
  }
}