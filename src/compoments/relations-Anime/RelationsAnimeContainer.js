import React from "react";
import RelationsAnimePresentational from "./RelationsAnimePresentational";




function RelationsAnimeContainer({ d,handleClick }) {
 
  return (
    <RelationsAnimePresentational
      data={d?.nodes}
      handleClick={handleClick}
    />
  );
}

export default RelationsAnimeContainer;
