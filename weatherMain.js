
console.log("Script loaded!");

function getWeatherInformation(event){
  console.log("hello");
  
  if(event.keyCode==13){
    let selectedLocation=document.getElementById("weatherSearch").value;
    const apiKey = '74982a1b5ba6125665a8e393e24b03a9';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedLocation}&appid=${apiKey}&units=imperial`;


// Make a GET request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the data here
    console.log(data);
    const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    if(data['cod']==404)
    console.log("city not found")
    else
    {
      const weatherCont=document.getElementById("weatherContent");
      const cuurentDetails = document.createElement('p');
      clearAll();
      cuurentDetails.textContent = 'Current Details';
      weatherCont.appendChild(cuurentDetails);
      
      const paragraph2 = document.createElement('p');
      paragraph2.innerHTML = 'Temperature:'+data['main'].temp+' F<br>' +
      'Feels Like:'+data['main'].feels_like+' F<br>'+
      'Max Temperature:'+data['main'].temp_max+' F<br>'+
      'Min Temperature:'+data['main'].temp_min+' F<br>'+
      'Description:'+data['weather'][0].description;
     
      weatherCont.appendChild(paragraph2);
      weatherCont.style.border='2px solid ';
      
    }
  })
  .catch(error => {
    
    console.log(error);
  });
}}

function clearAll(){
  const weatherCont=document.getElementById("weatherContent");
  weatherCont.innerHTML="";
}