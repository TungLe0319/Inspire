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
  }

  get WeatherDetailsTemplate() {
    return /*html */ `
    
   <div class=" ">
<div class="card-body  ">
<div class="d-flex justify-content-between">
<p>${this.Celcius}<i class="mdi mdi-temperature-celsius fs-2"></i></p>


</div>
<div>
<p>${this.Farenheit}<i class="mdi mdi-temperature-fahrenheit fs-2"></i></p></div>
<p>${this.name}</p>
<p>${this.weather[0].main}</p>
<p>${this.weather[0].description}</p>
</div>

   </div>
    `;
  }

  
get Celcius(){
  let temp = this.main.temp
  let celcius = temp -273.15
  return celcius.toFixed(2)
}


get Farenheit(){
  let temp = this.main.temp
  let farenheit=  temp *(9/5)-459.67
  return farenheit.toFixed(2)
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


