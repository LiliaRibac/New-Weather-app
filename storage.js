class Storage {
  constructor(){
    this.city;
    this.state;
    this.defaultCity = "Miami";
    this.defaultState = "FL";
  }

  getLocationData(){

  }

  setLocationDate(){
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
}