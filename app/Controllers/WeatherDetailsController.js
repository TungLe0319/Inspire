import { appState } from '../AppState.js';
import { weatherDetailsService } from '../Services/WeatherDetailsService.js';
import { Pop } from '../Utils/Pop.js';
import { setHTML } from '../Utils/Writer.js';

function _drawWeatherDetails() {
  let weather = appState.weatherDetails;

  setHTML('weatherDOM', weather.WeatherDetailsTemplate);
  setHTML('weatherextraDOM', weather.extraDetailsTemplate);
}

export class WeatherDetailsController {
  constructor() {
    this.getWeatherDetails();
    appState.on('weatherDetails', _drawWeatherDetails);
  }

  async getWeatherDetails() {
    try {
      await weatherDetailsService.getWeatherDetails();
    } catch (error) {
      console.error('[]', error);
      Pop.error(error);
    }
  }

  toggleTemp() {
    try {
      weatherDetailsService.toggleTemp();
    } catch (error) {
      console.error('[]', error);
      Pop.error(error);
    }
  }
}
