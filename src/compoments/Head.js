import React from "react";
import '../page-css/homepage-css.css'
import { Link } from "react-router-dom";
function Head() {
    const t = '#'
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <a className="navbar-brand" href={t}>TRUCK <span className="zx">KUN</span></a>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to='/'><span className="zx">HOME</span></Link></li>
                        <li className="dropdown">
                            <Link className="dropdown-toggle" data-toggle="dropdown" to='/anime'>ANIME</Link>
                        </li>
                        <li className="dropdown">
                            <Link className="dropdown-toggle" data-toggle="dropdown" to='/manga'>MANGA</Link>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href={t}>DEMOS<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href={t}>Page 1-1</a></li>
                                <li><a href={t}>Page 1-2</a></li>
                                <li><a href={t}>Page 1-3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Head;