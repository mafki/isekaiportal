import React from "react";
import UaContainer from "../compoments/UP-COMING-ANIME/UaContainer";
import LaContainer from "../compoments/RECENTLY-ADDED-ANIME/LaContainer";
import '../compoments-css/produit.css'


function Homepage() {


  return (
    <>
      {<LaContainer numberOfObjectsToMap={6}/>}
      <UaContainer numberOfObjectsToMap={6} />
      
    </>
  );
}

export default Homepage;
