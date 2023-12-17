import React from "react";
import "./Header.scss";
import logo from "../../../images/logo.jpg";
import { Filters } from "../Filters";
import { Search } from "../Search";
import axios from "axios";

const Header = ({ setShowCatalog, showCatalog, setProductsData, productsData, setShowShoppingCart }) => {
    const catalogButtonHandler = (event) => {
        event.preventDefault();
        setShowShoppingCart(false);
        setShowCatalog(true);
    }

    const homeButtonHandler = (event) => {
        event.preventDefault();
        setShowShoppingCart(false);
        setShowCatalog(false);
    };

    const handleCartButtonClick = () => {
        setShowShoppingCart(true);
    };

    const applyFilters = async (catalogFilters) => {
        console.log('catalogFilters: ', catalogFilters);

        const response = await axios.get('http://localhost:3000/api/smartphones', { params: catalogFilters });

        return setProductsData(response.data);
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
                            <button className="nav_link" onClick={handleCartButtonClick}>Cart</button>
                        </li>
                    </ul>
                </div>
                {!showCatalog || <Search setProductsData={setProductsData} productsData={productsData} />}
            </div>
            <hr />
            {!showCatalog || <Filters applyFilters={applyFilters} />}
        </header>
    );
}

export default Header;