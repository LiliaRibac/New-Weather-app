class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.name},${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${convertKelvinToCelsius(weather.main.temp)}\u00B0C`;
        this.icon.setAttribute("src", weather.weather[0].icon)
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}% `;
    this.dewpoint.textContent = `Feel Like: ${weather.main.pressure} hpa`;
    this.wind.textContent = `Wind Speed: ${metresPerSecondToMilesPerHour(weather.wind.speed)} mph`
    this.feelsLike.textContent = `Wind Direction: ${windDirectionFromDegree(weather.wind.deg)}`
  }
}  
