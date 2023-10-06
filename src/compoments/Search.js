import React, { useState } from "react";
import '../compoments-css/search.css'

export default function Search({  onFilterChange }) {
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        onFilterChange(event.target.value.toLowerCase());
    };

   

   

    // Call the callback function with filtered anime data

    return (
        <div className="product__sidebar">
            <div className="product__sidebar__view">
                <div className="section-title">
                    <h5>Search <span className="zx">Anime</span></h5>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search anime..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>
        </div>
    );
}