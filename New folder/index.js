let input = document.getElementById("input");
let button =document.getElementById("btn");
let temp = document.getElementById("temperature");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let cityName= document.getElementsByClassName("cityName");

const  url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2a3dc7db49mshc84dfa3025702c2p1efa56jsnaea05cc0eb0e',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getweather= ((city)=>{
	cityName.innerHTML = cityName+city;
fetch ('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city ,options)
.then(response => response.json())
.then(response => {
  console.log(response)
temp.innerHTML= response.temp + " °C";
wind.innerHTML=response.wind_speed + "KM/H";
humidity.innerHTML=response.humidity;
})
.catch(err =>console.error(err));

})
button.addEventListener('click',(e)=>{
	e.preventDefault()
  // citye = target.input.value ;

	getweather(input.value);
  })
getweather("london")