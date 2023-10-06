import React from "react";
import Card from "../Card/Card";
import Next from "../Next";
import Pagen from "../Pagen";


function UaPresentational({ data, numberOfObjectsToMap, path, pageon,currentPage,setCurrentPage,cardsPerPage,startIndex,endIndex }) {
  return (
    <div className="trending__product">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="section-title">
            <h4>Up-coming <span className="zx">anime</span></h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="btn__all">
            {path ? <Next path={"/anime/up-coming-anime"} /> : <Next path={"/"} dri={"back"} />}
          </div>
        </div>
      </div>
      <div className="row x">
        {Object.keys(data)
          .slice(pageon === null ? 0 : startIndex, pageon === null ? numberOfObjectsToMap : endIndex)
          .filter(key => data[key].media?.isAdult === false)
          .map(key => (
            <Card key={key} media={data[key].media} air={data[key].airingAt} episode={data[key].episode} />
          ))
        }

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

export default UaPresentational;
