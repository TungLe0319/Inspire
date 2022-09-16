import { appState } from "../AppState.js"

export class Clock {


  constructor(data) {


  }



  get ClockTemplate() {
    return /*html */ `
    <span>
              <h1 class="text-shadow"> ${this.Time}</h1>
            </span>
   
    `;
  }
}