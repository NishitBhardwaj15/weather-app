import { useContext } from "react"
import React from "react"
import './ExtraDetails.style.css'
import {WeatherContext} from "../../context/WeatherContext"

const ExtraDetails=()=>{
    const {currentWeather} = useContext(WeatherContext)
    return(
        <div className="extra-detail-bar">
            {
                currentWeather?(<span><i class="fa-solid fa-sun"></i> {currentWeather.sunrise}</span>):( <span><i class="fa-solid fa-sun"></i> Rise</span>)

            }
            {
                currentWeather?(<span><i class="fa-solid fa-moon"></i> {currentWeather.sunset}</span>):( <span><i class="fa-solid fa-moon"></i> Set</span>)

            }
            {
                currentWeather?(<span><i class="fa-solid fa-arrow-up"></i> {currentWeather.temp_max}</span>):( <span><i class="fa-solid fa-arrow-up"></i> High</span>)

            }
            {
                currentWeather?(<span><i class="fa-solid fa-arrow-down"></i> {currentWeather.temp_min}</span>):( <span><i class="fa-solid fa-arrow-down"></i> Low</span>)

            }
        </div>
    )
}

export default ExtraDetails