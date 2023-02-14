import React from "react";
import './SearchInput.style.css'

const SearchInput = () => {
    return (
        <div className="search-bar">
            <div>
                <input type="text"/>
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
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