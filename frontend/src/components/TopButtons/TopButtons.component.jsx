import React from "react";
import './TopButtons.style.css'

const TopButtons=()=>{
    const onClickHelper = ()=>{
        const city = document.getElementsByTagName("span").innerHTML
        console.log(city)
    }

    return(
        <div className="city-bar">
            <span onClick={onClickHelper}>Delhi</span>
            <span onClick={onClickHelper}>Mumbai</span>
            <span onClick={onClickHelper}>Bangaluru</span>
            {/* {
                cities.map((element)=>{
                    return(
                        <button id="cbutton" onClick={onClickHelper} key={element.id}>{element.cname}</button>
                    )
                })
            } */}
        </div>
    )
}

export default TopButtons