import axios from "axios";

const getWeatherData = (city) => {
  
  axios.post('/test', {
    cityname:city
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

  const urldata = fetch('/api/wdata').then((res)=>res.json()).then((data)=>data)
  return urldata
}

const currentWeatherFormatter = (currentWeatherData) => {
  const {
    coord: { lon, lat },
    main: { feels_like, humidity, temp, temp_max, temp_min },
    dt,
    name,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed }
  } = currentWeatherData
  
  const {main,icon} = weather[0]

  return {lon,lat,feels_like,humidity,temp,temp_max,temp_min,dt,name,country,sunrise,sunset,main,icon,speed}
}

const getFormattedData = async (searcharg) => {
  const currentWeatherData = await getWeatherData(searcharg)
  const formattedCurrentWeatherData = currentWeatherFormatter(currentWeatherData)
  return formattedCurrentWeatherData
}

export default getFormattedData

