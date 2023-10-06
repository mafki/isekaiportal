import React, { useState } from "react";
import MangaDataFetcher from './MangaDataFetcher';
import MangaPresentation from './MangaPresentation';
import { useOutletContext } from "react-router-dom";
import image from '../../images/loading.jpg';


export default function MangaContainer() {
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
      <MangaDataFetcher onDataFetched={setData} />
      <MangaPresentation data={data} searchTerm={searchTerm} />
    </div>
  );
}
