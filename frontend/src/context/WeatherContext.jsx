import { createContext,useState } from "react";

export const WeatherContext = createContext({
    currentWeather : null,
    setCurrentWeather:()=> null
})

export const WeatherProvider=({children})=>{
    const [currentWeather,setCurrentWeather] = useState(null)
    const value = {currentWeather,setCurrentWeather}

    return(
        <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
    )
}