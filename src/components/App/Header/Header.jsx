import React from "react";
import "./Header.scss";
import logo from "../../../images/logo.jpg";
import { Filters } from "../Filters";
import { Search } from "../Search";
import PRODUCTS_DATA from "../../ProductsData";

const Header = ({ setShowCatalog, showCatalog, setProductsData, productsData }) => {
    const catalogButtonHandler = (event) => {
        event.preventDefault();
        setShowCatalog(true);
    }

    const homeButtonHandler = (event) => {
        event.preventDefault();
        setShowCatalog(false);
    };
    
    const applyFilters = (catalogFilters) => {
        console.log('catalogFilters: ', catalogFilters);
        const filterKeys = Object.entries(catalogFilters);
        console.log('filterKeys: ', filterKeys);
        let filteredProducts = [...PRODUCTS_DATA];

        PRODUCTS_DATA.forEach(product => {
            const { selectedBrand, selectedModel, selectedPrice } = catalogFilters;

            if (selectedBrand) {
                filteredProducts = filteredProducts.filter(product => product.brand === selectedBrand);
            }
            
            if (selectedModel) {
                filteredProducts = filteredProducts.filter(product => product.model === selectedModel);
            }
            
            if (selectedPrice) {
                filteredProducts = filteredProducts.filter(product => product.price <= parseInt(selectedPrice));
            }

            return setProductsData(filteredProducts);
        });

        const getUniqueProducts = (filteredProducts) => {
            const uniqueProductsIds = [];
            const uniqueProducts = [];

            filteredProducts.forEach(product => {
                const isNotUnique = uniqueProductsIds.includes(product.id);
                console.log('isNotUnique: ', isNotUnique);
                !isNotUnique && uniqueProductsIds.push(product.id);
                !isNotUnique && uniqueProducts.push(product);
            })

            return uniqueProducts;
        }

        console.log('filteredProducts: ', filteredProducts);
        const uniqueProducts = getUniqueProducts(filteredProducts);

        return uniqueProducts;
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
                {!showCatalog || <Search setProductsData = {setProductsData} productsData = {productsData} />}
            </div>
            <hr />
            {!showCatalog || <Filters applyFilters={applyFilters} />}
        </header>
    );
}

export default Header;