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
<div class="d-flex justify-content-between selectable pt-2 rounded" 
>
<div class="ms-4" onclick="app.weatherDetailsController.toggleTemp()">
<p class="fs-5 animate__flip animate__animated">
${this.toggled ? `${this.Celcius}` : `${this.Farenheit}`}
<i class="mdi ${
      this.toggled ? `mdi-temperature-celsius` : `mdi-temperature-fahrenheit`
    } fs-3"></i></p>
</div>
<div class="">
<small>${this.name}</small>
</div>
<div class="text-light ">



<p>
   <i class="rounded  selectable mdi mdi-dots-vertical fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
     aria-expanded="false" aria-controls="collapseWidthExample"></i>
</p>

</div>
</div>


</div>

  
    `;
  }



get extraDetailsTemplate(){
   return /*html */ `
   <div class="p-1 rounded  text-shadow">
    
      <span>
        <small>
        ${this.main.humidity}
        <i class="mdi mdi-cloud-percent fs-5"></i>
        </small>
      </span>
   </div>
   `

}

  get Celcius() {
    let temp = this.main.temp;
    let celcius = temp - 273.15;
    return celcius.toFixed(2);
  }

  get Farenheit() {
    let temp = this.main.temp;
    let farenheit = temp * (9 / 5) - 459.67;
    return farenheit.toFixed(2);
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
