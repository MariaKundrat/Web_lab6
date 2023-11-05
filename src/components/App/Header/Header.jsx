import React from "react";
import './Header.scss';
import logo from "../../../images/logo.jpg";

const Header = () => {
    return (
        <header>
            <div className="header_div">
                <div>
                    <img className="logo_header" src={ logo } alt="logo"/>
                </div>
                <div className="container">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a className="nav_link" href=" ">Home</a>
                        </li>
                        <li className="nav_item">
                            <a className="nav_link" href=" ">Catalog</a>
                        </li>
                        <li className="nav_item">
                            <a className="nav_link" href=" ">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
        </header>
    );
}

export default Header;