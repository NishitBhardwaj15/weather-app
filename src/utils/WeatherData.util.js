const getWeather=(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=671a6cf4223f253eac3e9b019796a83e&units=metric`

    const response = fetch(url).then((res)=>res.json()).then((data)=>data)
    return response
}

export default getWeather