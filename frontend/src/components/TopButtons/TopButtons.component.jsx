import React from "react";
import './TopButtons.style.css'

const TopButtons=()=>{

    const cities = [
        {
            id:1,
            cname:"Delhi",
        },
        {
            id:2,
            cname:"Jorhat",
        },
        {
            id:3,
            cname:"Mumbai",
        },
        {
            id:4,
            cname:"Pune",
        }
    ]

    return(
        <div className="city-bar">
            {
                cities.map((element)=>{
                    return(
                        <button key={element.id}>{element.cname}</button>
                    )
                })
            }
        </div>
    )
}

export default TopButtons