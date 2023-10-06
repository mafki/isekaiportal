import React, { useState } from "react";
import SideCard from "../SideCard";
import RAnimeFetcher from "./RAnimeFetcher";
import LoadingCard from "../LoadingCard";
import { Link } from "react-router-dom";
function RAnimeContainer() {
    const [data, setData] = useState(LoadingCard);
    const t = "#"
    return (
        <>
            <RAnimeFetcher onDataFetched={setData} />
            <div className="product__sidebar">
                <div className="product__sidebar__view">
                    <div className="section-title">
                        <h5>Recommended <span className="zx">Anime</span></h5>
                    </div>
                    {Object.keys(data)
                    .slice(0, 3)
                    .filter(key => data[key]?.media?.isAdult === false)
                    .map(key => {
                        const romajiTitle = data[key]?.media.title.romaji.replaceAll(' ', '-');
                        const postData = data[key];
                        return (
                          <Link  to={ `/anime/${romajiTitle}`}
                          state={{postData}} >
                            <SideCard key={key} rate={data[key]?.media.meanScore} media={data[key]?.media} episode={data[key]?.episode} />
                          </Link>
                        );
                      })}
                </div>
            </div>
        </>
    );
}

export default RAnimeContainer;
