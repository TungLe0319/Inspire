import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandBox } from "./AxiosService.js"



class WeatherDetailsService{



  async getWeatherDetails(){
    const res = await SandBox.get('/api/weather')
    // console.log(res.data);
  appState.weatherDetails = new Weather(res.data)
  console.log('appstate',appState.weatherDetails);
  }
}

export const weatherDetailsService = new WeatherDetailsService()