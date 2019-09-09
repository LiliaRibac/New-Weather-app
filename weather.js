class Weather {
  constructor(city, state) {
    this.apiKey = "025a6ab2e41939c5841bf37943e480d5";
    this.city = city;
    this.state = state;
  }

  //Featch weather from API
  async getWeather() {
  

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&state=${this.state}&APPID=${this.apiKey}`);

    const responseDate = await response.json();
    return responseDate.sys
    

    
  }


//  Change weather location
changeLocation(city, state){
  this.city = city;
  this.state = state;
}
}