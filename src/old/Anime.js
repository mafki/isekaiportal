import React, { useState, useEffect } from "react";
import Card from "../compoments/Card";
import '../page-css/anime-css.css'
import { NavLink } from "react-router-dom";
import '../page-css/homepage-css.css'
import Pagen from "../compoments/Pagen";
import { useOutletContext } from "react-router-dom";
import Search from "../compoments/Search";
import { isMobile } from 'react-device-detect';
import AnimeDataApi from '../compoments/Anime-Page/AnimeDataApi'
import image from "../images/loading.jpg"

function filterAnimeData(animeData, searchTerm) {
    const filteredData = {};
    for (const key in animeData) {
      const anime = animeData[key];
      if (anime.media.title.romaji.toLowerCase().startsWith(searchTerm.toLowerCase())) {
        filteredData[key] = anime;
      }
    }
    return filteredData;
  }
  
  export default function Anime() {
    const [data, setData] = useState([]);
    const [searchTerm] = useOutletContext();
    const [filteredAnimeData, setFilteredAnimeData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;
  
    useEffect(() => {
      async function fetchData() {
        try {
          const fetchedData = await AnimeDataApi();
          if (fetchedData) {
            setData(fetchedData);
          }
        } catch (error) {
          // Handle error if needed
        }
      }
      fetchData();
    }, []);
  
    useEffect(() => {
      if (searchTerm) {
        const filteredData = filterAnimeData(data, searchTerm);
        setFilteredAnimeData(filteredData);
      } else {
        setFilteredAnimeData(null);
      }
      setCurrentPage(1); // Reset to the first page when search term changes
    }, [data, searchTerm]);
  
    const check = (t) => {
      switch (t) {
        case null:
          return false;
        case '':
          return false;
        case undefined:
          return false;
        default:
          return true; // Return true for other cases
      }
    };
  
    // Calculate the index range for cards to display on the current page
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
  
    return (
      <div className="trending__product">
        <div className="row">
          {/* ...Your existing code for section title and back button */}
        </div>
        {isMobile ? <Search animeData={data} onFilterChange={setFilteredAnimeData} /> : ''}
        <div className="row x">
          {(check(filteredAnimeData) === false ? data : Object.values(filteredAnimeData))
            .slice(startIndex, endIndex) // Display only the cards within the index range
            .filter(item => !item.media?.isAdult)
            .map((item, index) => (
              <Card key={index} media={item.media} episode={item.episode} />
            ))
          }
        </div>
        {filteredAnimeData == null ? (
          <Pagen
            data={data}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            cardsPerPage={cardsPerPage}
          />
        ) : (
          <Pagen
            data={filteredAnimeData}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            cardsPerPage={cardsPerPage}
          />
        )}
      </div>
    )
  }