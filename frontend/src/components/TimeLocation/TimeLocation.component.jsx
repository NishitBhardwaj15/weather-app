import {WeatherContext} from "../../context/WeatherContext"
import { useContext } from "react";
import React from "react";
import './TimeLocation.styles.css'
import {DateTime} from 'luxon'

const TimeLocation = () => {
    
    const {currentWeather} = useContext(WeatherContext)

    const helper=()=>{
        console.log(currentWeather)
        if(currentWeather){
            const lon = currentWeather.lon 
            const lat = currentWeather.lat
            const locationTime = DateTime.local().setZone(lon,lat)
            const locationTimeString = locationTime.toFormat("hh:mm:ss")
            console.log(locationTimeString)
        }
    }
    helper()

    return (
        <div className="time-date-bar">
            <span >Tuesday 14 February 2023</span>
            <span>|</span>
            <span>Local Time 8::30 AM</span>
            {
                currentWeather?(<h1>{currentWeather.name}<i class="fa-solid fa-location-dot"></i></h1>):(<h1>City<i class="fa-solid fa-location-dot"></i></h1>)
            }

            {
                currentWeather?(<h2>{currentWeather.main}</h2>):(<h2>Description</h2>)
            }
        </div>
    )
}

export default TimeLocation