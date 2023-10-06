import React, { useState } from "react";
import AnimeDataFetcher from './AnimeDataFetcher';
import AnimePresentation from './AnimePresentation';
import { useOutletContext } from "react-router-dom";
import image from '../../images/loading.jpg';


export default function AnimeContainer() {
  const [searchTerm] = useOutletContext();
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
 
  return (
    <div className="trending__product">
      <AnimeDataFetcher onDataFetched={setData} />
      <AnimePresentation data={data} searchTerm={searchTerm} />
    </div>
  );
}
