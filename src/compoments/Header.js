import React from "react";
import Hero from "./Hero";
import Head from "./Head";
import '../compoments-css/header.css'
function Header(prop) {

    return (
        <div className="header-nightsky">
            <Head/>
            <Hero/>
        </div>
    );
}

export default Header;