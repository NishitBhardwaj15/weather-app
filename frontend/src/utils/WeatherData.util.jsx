import axios from "axios";

const GetWeatherData = (city) => {
  let dataobj = {}

  const fun = async()=>{
    await axios.post('/api', {
      cityname:city
    })
    .then(function (response) {
      dataobj = response.data
    })
    .catch(function (error) {
      console.log(error);
    });
    return dataobj
  }
  const actualWeatherData = fun()
  
  return actualWeatherData
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

export const getFormattedData = async (searcharg) => {
  const currentWeatherData = await GetWeatherData(searcharg)
  const formattedCurrentWeatherData = currentWeatherFormatter(currentWeatherData)
  return formattedCurrentWeatherData
}

export const getIcon=(icode)=>{
  return `http://openweathermap.org/img/wn/${icode}.png`
}

