import React from "react";
import './TimeLocation.styles.css'


const TimeLocation = () => {
    return (
        <div className="time-date-bar">
            <span>Tuesday 14 February 2023</span>
            <span>|</span>
            <span>Local Time 8::30 AM</span>
            <h1>London<i class="fa-solid fa-location-dot"></i></h1>
            <h2>Rain</h2>
        </div>
    )
}

export default TimeLocation