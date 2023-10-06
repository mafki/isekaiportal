import React from "react";
import Card from "../Card/Card";
import Next from "../Next";
import Pagen from "../Pagen";
import { Link } from "react-router-dom";
import scrollToTop from "../../function/scrollToTop";


function LaPresentational({ data, numberOfObjectsToMap, path, pageon, currentPage, setCurrentPage, cardsPerPage, startIndex, endIndex }) {
  return (
    <div className="trending__product">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="section-title">
            <h4>RECENTLY ADDED <span className="zx">anime</span></h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="btn__all">
            {path ? <Next path={"/anime/recently-added-anime"} /> : <Next path={"/"} dri={"back"} />}
          </div>
        </div>
      </div>
      <div className="row x">
        {Object.keys(data)
          .slice(pageon === null ? 0 : startIndex, pageon === null ? numberOfObjectsToMap : endIndex)
          .filter(key => data[key]?.media?.isAdult === false)
          .map(key => {
            const romajiTitle = data[key]?.media.title.romaji.replaceAll(' ', '-');
            const postData = data[key];
            return (
              <div className="link-css">
              <Link  to={ `/anime/${romajiTitle}`}
              state={{postData}} onClick={scrollToTop}  >
                <Card   media={data[key]?.media} episode={data[key]?.episode} />
              </Link></div>
            );
          })}
      </div>
      {pageon === null ? (
        ""
      ) : (
        <Pagen
          data={data}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          cardsPerPage={cardsPerPage}
        />
      )}
    </div>
  );
}

export default LaPresentational;
