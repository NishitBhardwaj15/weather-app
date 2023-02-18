import axios from 'axios'

const getWeatherData = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=671a6cf4223f253eac3e9b019796a83e&units=metric`
  const urldata = axios.get(url)
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
  const formattedCurrentWeatherData = currentWeatherFormatter(currentWeatherData.data)
  return formattedCurrentWeatherData
}

export default getFormattedData

