import { appState } from '../AppState.js';
import { Weather } from '../Models/Weather.js';
import { SandBox } from './AxiosService.js';

class WeatherDetailsService {
  async getWeatherDetails() {
    const res = await SandBox.get('/api/weather');

    appState.weatherDetails = new Weather(res.data);
    console.log('appstate', appState.weatherDetails);
  }

  toggleTemp() {
    let weather = appState.weatherDetails;
    weather.toggled = !weather.toggled;
    appState.emit('weatherDetails');
    console.log(weather.toggled);
  }
}

export const weatherDetailsService = new WeatherDetailsService();
