const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6fce67da35mshfad58ee9ad1f8e0p144406jsn1eb1636ee5f7',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};


const getWeather=(city)=>{
    cityName.innerHTML =city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        cloud_pct1.innerHTML = response.cloud_pct
        temp1.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like1.innerHTML = response.feels_like
        humidity1.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp1.innerHTML = response.min_temp
        max_temp1.innerHTML = response.max_temp
        wind_speed1.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise1.innerHTML = response.sunrise
        sunset1.innerHTML = response.sunset

    })
    .catch(err =>console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)

})

getWeather("Delhi")

//  async function getWeatherData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getWeatherData(); // Call the async function to make the API request


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
.then(response => response.json())
.then((response) => {

    console.log(response)
    cloud_pctd.innerHTML = response.cloud_pct
    tempd.innerHTML = response.temp
    feels_liked.innerHTML = response.feels_like
    humidityd.innerHTML = response.humidity
    min_tempd.innerHTML = response.min_temp
    max_tempd.innerHTML = response.max_temp
    wind_speedd.innerHTML = response.wind_speed
    wind_degreesd.innerHTML = response.wind_degrees
    sunrised.innerHTML = response.sunrise
    sunsetd.innerHTML = response.sunset

})
.catch(err =>console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata',options)
.then(response => response.json())
.then((response) => {

    console.log(response)
    cloud_pctc.innerHTML = response.cloud_pct
    tempc.innerHTML = response.temp
    feels_likec.innerHTML = response.feels_like
    humidityc.innerHTML = response.humidity
    min_tempc.innerHTML = response.min_temp
    max_tempc.innerHTML = response.max_temp
    wind_speedc.innerHTML = response.wind_speed
    wind_degreesc.innerHTML = response.wind_degrees
    sunrisec.innerHTML = response.sunrise
    sunsetc.innerHTML = response.sunset

})
.catch(err =>console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York',options)
.then(response => response.json())
.then((response) => {

    console.log(response)
    cloud_pctn.innerHTML = response.cloud_pct
    tempn.innerHTML = response.temp
    feels_liken.innerHTML = response.feels_like
    humidityn.innerHTML = response.humidity
    min_tempn.innerHTML = response.min_temp
    max_tempn.innerHTML = response.max_temp
    wind_speedn.innerHTML = response.wind_speed
    wind_degreesn.innerHTML = response.wind_degrees
    sunrisen.innerHTML = response.sunrise
    sunsetn.innerHTML = response.sunset

})
.catch(err =>console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Moscow',options)
.then(response => response.json())
.then((response) => {

    console.log(response)
    cloud_pctw.innerHTML = response.cloud_pct
    tempw.innerHTML = response.temp
    feels_likew.innerHTML = response.feels_like
    humidityw.innerHTML = response.humidity
    min_tempw.innerHTML = response.min_temp
    max_tempw.innerHTML = response.max_temp
    wind_speedw.innerHTML = response.wind_speed
    wind_degreesw.innerHTML = response.wind_degrees
    sunrisew.innerHTML = response.sunrise
    sunsetw.innerHTML = response.sunset

})
.catch(err =>console.error(err));

