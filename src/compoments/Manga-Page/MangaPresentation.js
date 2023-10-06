import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Pagen from "../Pagen";
import Search from "../Search";
import { isMobile } from 'react-device-detect';
import image from '../../images/loading.jpg';
import { Link } from "react-router-dom";
import scrollToTop from "../../function/scrollToTop";

function filterAnimeData(animeData, searchTerm) {
  // Your filterAnimeData function remains the same
  const filteredData = {};
    for (const key in animeData) {
      const anime = animeData[key];
      if (anime.media.title.romaji.toLowerCase().startsWith(searchTerm.toLowerCase())) {
        filteredData[key] = anime;
      }
    }
    return filteredData;
}

export default function MangaPresentation({ data, searchTerm }) {
  const [filteredAnimeData, setFilteredAnimeData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

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
        {/* ...Your existingg code for section title and back button */}
      </div>
      {isMobile ? <Search animeData={data} onFilterChange={setFilteredAnimeData} /> : ''}
      <div className="row x">
        {(check(filteredAnimeData) === false ? data : Object.values(filteredAnimeData))
          .slice(startIndex, endIndex) // Display only the cards within the index range
          .map((item, index) => {
            const postData = item;
            return(
              <Link  to={ `/anime/${item.title}`}  state={{postData}} onClick={scrollToTop} >
            <Card key={index} media={item}  />
            </Link>
          )})
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
  );
}
MangaPresentation.defaultProps = {
  data:[
    {
      "media": {
        "isAdult":false,
        "title": {
          "romaji": "Loading"
        },
        "genres": [
          "Loading"
        ],
        "coverImage": {
          "extraLarge": image
        },
        "popularity": "Loading",
        "averageScore": null,
      },
      "episode": "Loading"
    },
    {
      "media": {
        "isAdult":false,
        "title": {
          "romaji": "Loading"
        },
        "genres": [
          "Loading"
        ],
        "coverImage": {
          "extraLarge": image
        },
        "popularity": "Loading",
        "averageScore": null,
      },
      "episode": "Loading"
    },
    {
      "media": {
        "isAdult":false,
        "title": {
          "romaji": "Loading"
        },
        "genres": [
          "Loading"
        ],
        "coverImage": {
          "extraLarge": image
        },
        "popularity": "Loading",
        "averageScore": null,
      },
      "episode": "Loading"
    },
    {
      "media": {
        "isAdult":false,
        "title": {
          "romaji": "Loading"
        },
        "genres": [
          "Loading"
        ],
        "coverImage": {
          "extraLarge": image
        },
        "popularity": "Loading",
        "averageScore": null,
      },
      "episode": "Loading"
    },
    {
      "media": {
        "isAdult":false,
        "title": {
          "romaji": "Loading"
        },
        "genres": [
          "Loading"
        ],
        "coverImage": {
          "extraLarge": image
        },
        "popularity": "Loading",
        "averageScore": null,
      },
      "episode": "Loading"
    },
    {
      "media": {
        "isAdult":false,
        "title": {
          "romaji": "Loading"
        },
        "genres": [
          "Loading"
        ],
        "coverImage": {
          "extraLarge": image
        },
        "popularity": "Loading",
        "averageScore": null,
      },
      "episode": "Loading"
    }
  ]
}