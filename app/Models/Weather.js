export class Weather {
  constructor(data) {
    this.id = data.id;
    this.coord = data.coord;
    this.weather = data.weather;
    this.main = data.main;
    this.timezone = data.timezone;
    this.name = data.name;
    this.wind = data.wind;
    this.clouds = data.clouds;
    this.toggled = data.toggled || false;
  }

  get WeatherDetailsTemplate() {
    return /*html */ `
    
  
<div class="card-body  position-relative">
<div class="d-flex justify-content-center align-items-center pt-2 rounded" 
>
<div class="ms-4 " onclick="app.weatherDetailsController.toggleTemp()">
<p class="fs-5 animate__flip animate__animated selectable p-1 rounded">
${this.toggled ? `${this.Celcius}` : `${this.Farenheit}`}
<i class="mdi ${
      this.toggled ? `mdi-temperature-celsius` : `mdi-temperature-fahrenheit`
    } fs-3"></i></p>
 
</div>
<div class="d-flex flex-column mx-5">
<small>   ${this.weather[0].description}</small>
<img src="https://openweathermap.org/img/wn/${this.weather[0].icon}.png" alt="">
</div>

<div class="text-light " >



<p >
   <i class="rounded  selectable mdi mdi-dots-vertical fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
     aria-expanded="false" aria-controls="collapseWidthExample"></i>
</p>

</div>
</div>


</div>

  
    `;
  }

  get extraDetailsTemplate() {
    return /*html */ `
   <div class="p-1 rounded  text-shadow" >
    
  
        <div class="p-1 selectable rounded">
          <small>
        ${
          this.toggled
            ? `${this.Celciusmin} ... ${this.Celciusmax}`
            : `${this.Farenheitmin} ... ${this.Farenheitmax}`
        }
         <i class="mdi ${
           this.toggled
             ? `mdi-temperature-celsius`
             : `mdi-temperature-fahrenheit`
         } fs-6"></i>
          </small>
        </div>
        <div>
          <small>
          <i class="mdi mdi-water "></i>Humidity
          ${this.main.humidity}%
          </small>
        </div>
      <div>
        <small>
        <i class="mdi mdi-weather-dust "></i>Wind Speed
        ${this.wind.speed}
        </small>
      </div>
   </div>
   `;
  }

  get Celcius() {
    let temp = this.main.temp;
    let celcius = temp - 273.15;
    return celcius.toFixed(1);
  }

  get Farenheit() {
    let temp = this.main.temp;
    let farenheit = temp * (9 / 5) - 459.67;
    return farenheit.toFixed(1);
  }
  get Celciusmax() {
    let temp = this.main.temp_max;
    let celcius = temp - 273.15;
    return celcius.toFixed(1);
  }

  get Farenheitmax() {
    let temp = this.main.temp_max;
    let farenheit = temp * (9 / 5) - 459.67;
    return farenheit.toFixed(1);
  }
  get Celciusmin() {
    let temp = this.main.temp_min;
    let celcius = temp - 273.15;
    return celcius.toFixed(1);
  }

  get Farenheitmin() {
    let temp = this.main.temp_min;
    let farenheit = temp * (9 / 5) - 459.67;
    return farenheit.toFixed(1);
  }
}

/**
 * -----------this.main----------
 * feels_like
humidity
pressure
temp
temp_max
temp_min
 */
