import React from "react";
import './Header.scss';
import logo from "../../../images/logo.jpg";
import { Filters } from "../Filters";
import { Search } from "../Search";

const Header = ({ setShowCatalog, showCatalog }) => {
    const catalogButtonHandler = (event) => {
        event.preventDefault();
        setShowCatalog(true);
    }

    const homeButtonHandler = (event) => {
        event.preventDefault();
        setShowCatalog(false);
    };    

    return (
        <header>
            <div className="header_div">
                <div className="header_logo">
                    <img className="header_img" src={logo} alt="logo" />
                </div>
                <div className="nav_container">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <button className="nav_link" onClick={homeButtonHandler}>Home</button>
                        </li>
                        <li className="nav_item">
                            <button className="nav_link" onClick={catalogButtonHandler}>Catalog</button>
                        </li>
                        <li className="nav_item">
                            <button className="nav_link">Cart</button>
                        </li>
                    </ul>
                </div>
                {!showCatalog || <Search />}
            </div>
            <hr />
            {!showCatalog || <Filters />}
        </header>
    );
}

export default Header;