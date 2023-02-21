import React from "react";
import './WeatherValues.styles.css'
import { WeatherContext } from "../../context/WeatherContext"
import { useContext } from "react";
import { getIcon } from "../../utils/WeatherData.util";
import pic from "../../assets/search.png"

const WeatherValues = () => {
    const { currentWeather } = useContext(WeatherContext)

    return (
        <div className="weather-box">
            <div>
                {
                    currentWeather ? (<img src={getIcon(currentWeather.icon)} alt="img"></img>) : (<img src={pic} alt="img"></img>)
                }
            </div>
            {
                currentWeather ? (<h2>{currentWeather.temp}<sup>&#x2022;</sup></h2>) : (<h2>Temp<sup>&#x2022;</sup></h2>)
            }
            <div className="weather-details">
                {
                    currentWeather ? (<span><i class="fa-solid fa-temperature-low"></i>{currentWeather.feels_like}<sup>&#x2022;</sup></span>) : (<span><i class="fa-solid fa-temperature-low idetails"></i>Feels Like<sup>&#x2022;</sup></span>)

                }

                {
                    currentWeather ? (<span><i class="fa-solid fa-droplet"></i>{currentWeather.humidity} %</span>) : (<span><i class="fa-solid fa-droplet idetails"></i>Humidity %</span>)

                }

                {
                    currentWeather ? (<span><i class="fa-solid fa-wind"></i>{currentWeather.speed} m/s</span>) : (<span><i class="fa-solid fa-wind idetails"></i>Wind m/s</span>)

                }

            </div>
        </div>
    )
}

export default WeatherValues