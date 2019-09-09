// Init Weather obj
const weather = new Weather("Boston", 'MA');

const ui = new UI();
console.log(ui)
// Get weather when DOM load 
document.addEventListener("DOMContentLoaded", getWeather);

//Change Location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
   const city = document.getElementById("city").value;
   const state = document.getElementById("state").value;

   weather.changeLocation("Miami", "FL");

   //Get and display weather
   getWeather();

   //close modal
  $('#locModal').modal('hide')

e.preventDefault
})


 //Wather.changeLocation("Phoenix", "AZ")
 function getWeather(){
  weather.getWeather()
  .then(results =>{
   ui.paint(results)
  })
  .catch(err => console.log(err))
 }


  function convertKelvinToCelsius(kelvin){
    if (kelvin < (0)) {
      return 'below absolute zero (0 K)';
    } else {
      let myCelcius = 0;
      let myCelciusRounded = 0;
  
      myCelcius = kelvin-273.15;
      myCelciusRounded = Math.round(myCelcius);
      return myCelciusRounded;
    }
  }



 function metresPerSecondToMilesPerHour(mps){
   let milesPerSecond = 0;
   let milePerHour = 0;
   let milesPerHourRound = 0;

   milesPerSecond = mps/1609.3;
   milePerHour = milesPerSecond * 3600 ;
   milesPerHourRound = Math.round(milePerHour);

   return milesPerHourRound;
 }


 function windDirectionFromDegree(deg){
if(deg <= 44) {
  return "N";
}else if(deg <= 89){
  return "NE";
}else if(deg <= 134){
  return "E"
}else if(deg <= 179){
  return 'SE'
}else if(deg <= 224){
  return 'S'
}else if (deg <= 269){
  return "SW"
}else if(deg <= 314){
  return "W"
}else{
  return "NW"
}
 }