import React, {  useState } from "react";
import SideCard from "./SideCard"
import RAnimeFetcher from "./Recommended-Anime/RAnimeFetcher"
import image from '../images/loading.jpg';


function Ra() {
    const t = "#"
    const [data, setData] = useState([
        {
            "media": {
                "isAdult": false,
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
                "isAdult": false,
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
                "isAdult": false,
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
                "isAdult": false,
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
                "isAdult": false,
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
                "isAdult": false,
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
        <><RAnimeFetcher onDataFetched={setData} />
        <div className="product__sidebar">
            <div className="product__sidebar__view">
                <div className="section-title">
                    <h5>Recommended <span className="zx">Anime</span></h5>
                </div>
                <ul class="filter__controls">
                    <div className="btn__all">
                        <a href={t} className="primary-btn">View All <span className="arr"><i class='bx bx-right-arrow-alt'></i></span></a>
                    </div>
                </ul>
                {Object.keys(data)
                    .slice(0, 3)
                    .filter(key => data[key]?.media?.isAdult === false)
                    .map(key => (
                        <SideCard key={key} rate={data[key]?.media.meanScore} media={data[key]?.media} episode={data[key]?.episode} />
                    ))}
            </div>
        </div>
        </>
    )
}
export default Ra;