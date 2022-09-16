import { appState } from "../AppState.js";
import { weatherDetailsService } from "../Services/WeatherDetailsService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeatherDetails() {
  let weather = appState.weatherDetails
  
  setHTML('weatherDOM', weather.WeatherDetailsTemplate);
}

export class WeatherDetailsController{


  
  constructor() {
    this.getWeatherDetails()
    appState.on('weatherDetails',_drawWeatherDetails)
  }


  async getWeatherDetails(){
    try {
        await weatherDetailsService.getWeatherDetails()
      } catch (error) {
        console.error('[]',error)
        Pop.error(error)
      }
  }
}