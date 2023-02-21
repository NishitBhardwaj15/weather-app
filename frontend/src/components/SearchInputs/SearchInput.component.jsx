import React from "react";
import './SearchInput.style.css'
import { getFormattedData } from "../../utils/WeatherData.util";
import { useState,useContext } from "react";
import {WeatherContext} from "../../context/WeatherContext"

const SearchInput = () => {
    const[currentCity,setCurrentCity] = useState("")
    const {setCurrentWeather} = useContext(WeatherContext)

    const onChangeInput = (event)=>{
        const cityname = event.target.value
        setCurrentCity(cityname)
    }

    const onClickReset=()=>{
        document.getElementById("cname").value = ""
        setCurrentCity()
    }

    const onClickSearch=async()=>{
        console.log(currentCity)
        const dataValues = await getFormattedData(currentCity)
        setCurrentWeather(dataValues)
    }

    return (
        <div className="search-bar">
            <div>
                <input onChange={onChangeInput} name="cname" id="cname" type="text" placeholder="Search your city..." />
                <button onClick={onClickSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
                <button onClick={onClickReset}><i class="fa-solid fa-broom"></i></button>
            </div>
            <div>
                <span>&#8451;</span>
                <span>|</span>
                <span>&#8457;</span>
            </div>
        </div>
    )
}

export default SearchInput