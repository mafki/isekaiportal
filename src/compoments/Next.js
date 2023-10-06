import React from "react";
import { NavLink } from "react-router-dom";


export default function Next(prop) {
    const path=prop.path
    const dri=prop.dri
    if(dri==='back'){
        return(
            <NavLink to={path} className="primary-btn">Back <span className="arr"><i class='bx bx-left-arrow-alt'></i></span></NavLink>
        )
    }
    return(
        <NavLink to={path} className="primary-btn">View All <span className="arr"><i class='bx bx-right-arrow-alt'></i></span></NavLink>
    )
}