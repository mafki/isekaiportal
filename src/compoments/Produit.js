import React from "react";
import La from "./La";
import Tua from "./Tua";
import Mpm from "./Mpm";
import Sidebar from "../compomentMain/Sidebar";
function Produit() {
    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <La />
                        <Tua />
                        <Mpm />
                    </div>
                    <Sidebar/>
                </div>
            </div>
        </section>
    )
}
export default Produit;