import React from "react";


export default function SideCard({ media,episode,rate }) {
    const t="#"
    return(
        <div className="filter__gallery">
                <div className="product__sidebar__view__item mix day years">
                    <img className="background-image2" src={media.coverImage.extraLarge} alt="Background" />
                    <div className="ep">{rate/10} / 10</div>
                    <div className="view"><i className="fa fa-eye"></i> {media.popularity} </div>
                    <h5><a href={t}>{media.title.romaji}</a></h5>
                </div>
            </div>
    )
}