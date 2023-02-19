import React from "react"
import './ExtraDetails.style.css'


const ExtraDetails=()=>{
    return(
        <div className="extra-detail-bar">
            <span><i class="fa-solid fa-sun"></i> Rise</span>
            <span>|</span>
            <span><i class="fa-solid fa-moon"></i> Set</span>
            <span>|</span>
            <span><i class="fa-solid fa-arrow-up"></i> High</span>
            <span>|</span>
            <span><i class="fa-solid fa-arrow-down"></i> Low</span>
        </div>
    )
}

export default ExtraDetails