import React from "react";
import './SearchInput.style.css'
import getWeather from '../../utils/WeatherData.util'

const SearchInput = () => {
    console.log("searchinput")
    const onClickHelper = () => {
        const city = document.getElementById("cname").value
        const helperfunction = async () => {
            const response = await getWeather(city)
            console.log(response)
        }
        helperfunction()
    }

    return (
        <div className="search-bar">
            <div>
                <input id="cname" type="text" placeholder="Search your city..." />
                <button onClick={onClickHelper}><i class="fa-solid fa-magnifying-glass"></i></button>
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