import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";


function RelationsAnimePresentational({ data,handleClick }) {
  const objectLength = Object.keys(data).length;
  return (
    <div className="trending__product">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="section-title">
            <h4>related <span className="zx">anime</span></h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="btn__all">
           {/** back buttton **/ }
          </div>
        </div>
      </div>
      <div className="row x">
        {Object.keys(data)
          .slice(0 ,objectLength )
          .filter(key => data[key]?.isAdult === false)
          .map(key => {
            const romajiTitle = data[key]?.title.romaji.replaceAll(' ', '-');
            const postData = data[key];
            return (
              <Link to={`/anime/${romajiTitle}`} key={key}  state={{postData}}  onClick={() => handleClick(data[key].id)} >
                <Card media={data[key]} episode={data[key]?.episodes} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default RelationsAnimePresentational;
