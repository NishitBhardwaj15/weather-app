import React from "react";
import './ForeCast.styles.css'
import { Fragment } from "react";

const ForeCast=()=>{
    return(
        <Fragment>
            <h2 className="hr-forecast">Hourly Forecast</h2>
            <hr></hr>
            <div className="forecast-container">
                <div className="individual-forecast">
                    <p>8:30 PM</p>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="img" />
                    <p>20</p>
                </div>
                <div className="individual-forecast">
                    <p>8:30 PM</p>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="img" />
                    <p>20</p>
                </div>
                <div className="individual-forecast">
                    <p>8:30 PM</p>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="img" />
                    <p>20</p>
                </div>
                <div className="individual-forecast">
                    <p>8:30 PM</p>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="img" />
                    <p>20</p>
                </div>
                <div className="individual-forecast">
                    <p>8:30 PM</p>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="img" />
                    <p>20</p>
                </div>
            </div>
            </Fragment>

    )
}

export default ForeCast