import React, { useEffect } from "react";

const Ad = () => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    },[]);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block",border: '1px solid white'}}
      data-ad-client="ca-pub-7616556094797122"
      data-ad-slot="1170044307"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Ad;

