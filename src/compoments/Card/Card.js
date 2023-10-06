import React from "react";
import TimeStamp from "../../function/TimeStamp";

function Card({ media,episode,air,more }) {
 
  const t = "#";
  // Check if media is defined and has the expected structure before accessing its properties
  if (!media || !media.title) {
    return null; // You can return a placeholder or handle the case when media is missing data
  }
  return (
    <div className="col-lg-4 col-md-4 col-sm-4 mafki ">
      <div className="product__item">
        <div className="product__item__pic">
          <img
            className="background-image"
            src={media.coverImage.extraLarge}
            alt="Background"
          />
          <div className="ep">{air?TimeStamp(air):media.averageScore===null?0:media.averageScore/10+' / 10'}</div>
          <div className="comment">
            ep {episode}
          </div>
          <div className="view">
            <i className="fa fa-eye"></i> {media.popularity}
          </div>
        </div>
        <div className="product__item__text">
          <ul>
            {more===undefined?media.genres.map((item, index) => (
              <li key={index}>{item}</li>
            )):""}
          </ul>
          <h5>
            <a href={t}>{more===undefined?media.title.romaji:""}</a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
