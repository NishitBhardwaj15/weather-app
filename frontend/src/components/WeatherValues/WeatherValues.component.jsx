import React from "react";
import './WeatherValues.styles.css'

const WeatherValues=()=>{
    return(
        <div className="weather-box">
            <div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="img"></img>
            </div>
            <h2>21<sup>&#x2022;</sup></h2>
            <div className="weather-details">
                <span><i class="fa-solid fa-temperature-low"></i> Feels Like</span>
                <span><i class="fa-solid fa-droplet"></i> Humidity</span>
                <span><i class="fa-solid fa-wind"></i> Wind</span>
            </div>
        </div>
    )
}

export default WeatherValues