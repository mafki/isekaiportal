import React, { useEffect, useState } from "react";
import LaPresentational from "./LaPresentational";
import image from '../../images/loading.jpg';
import LaApi from './LaApi';
import { useLocation } from "react-router-dom";


function LaContainer({ numberOfObjectsToMap,pageon }) {
  const [data, setData] = useState([
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
  ]);
  const [num, setNum] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const fetchedData = await LaApi();
        if (fetchedData) {
          setData(fetchedData);
          if (!numberOfObjectsToMap) {
            setNum(fetchedData.length);
          }
        }
      } catch (error) {
        // Handle error if needed
      }
    }
    fetchData();
  }, [numberOfObjectsToMap]);
  // Calculate the index range for cards to display on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const location = useLocation();
  const path = location.pathname === "/";

  return (
    <LaPresentational
      data={data}
      numberOfObjectsToMap={num}
      path={path}
      startIndex={startIndex}
      endIndex={endIndex}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      cardsPerPage={cardsPerPage}
      pageon={pageon}

    />
  );
}
  
LaContainer.defaultProps = {
  pageon:null
}
export default LaContainer;
