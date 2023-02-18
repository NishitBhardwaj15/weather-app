import React from "react";
import './SearchInput.style.css'
import getFomattedData from "../../utils/WeatherData.util"

const SearchInput = () => {
    const onClickRest=()=>{
        document.getElementById("cname").value = null
    }

    const onClickSearch=async()=>{
        const city = document.getElementById("cname").value
        const dataValues = await getFomattedData(city)
        console.log(dataValues)
    }
    return (
        <div className="search-bar">
            <div>
                <input id="cname" type="text" placeholder="Search your city..." />
                <button onClick={onClickSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
                <button onClick={onClickRest}><i class="fa-solid fa-broom"></i></button>
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