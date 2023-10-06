import React,{useState} from "react";
import Header from "../compoments/Header.js";
import Sidebar from "../compomentMain/Sidebar.js";
import Footer from "../compoments/Footer.js";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Head from "../compoments/Head.js";
import '../compoments-css/hero.css'
import '../page-css/root.css'
import '../compoments-css/produit.css';
import '../page-css/homepage-css.css'

function Root() {
    const [searchTerm, setSearchTerm] = useState("");
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isAnimePage = location.pathname === "/anime"  ;
    const isMangaPage =  location.pathname === "/manga" ;


    return (
        <>
            {isHomePage ? <Header /> : <div className="header-nightsky"> <Head /></div>}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Outlet  context={[searchTerm]} />
                        </div>
                        <Sidebar data={isAnimePage || isMangaPage} search={setSearchTerm}/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Root;