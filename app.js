// Init Weather obj
const weather = new Weather("Boston", 'MA');

const ui = new UI();

// Get weather when DOM load 
document.addEventListener("DOMContentLoaded", getWeather);


 //Wather.changeLocation("Phoenix", "AZ")
 function getWeather(){
  weather.getWeather()
  .then(results =>{
   ui.paint(results)
  })
  .catch(err => console.log(err))
 }


