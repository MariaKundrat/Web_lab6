import React, { useState } from "react";
import "./Home.scss";
import logo from "../../../images/logo.jpg";
import ItemPage from "../ItemPage/ItemPage";
import HomePaginatedView from "../../HomePaginatedView/HomePaginatedView";

const Home = ({ showCatalog, productsData }) => {
    const [productsToShow, setProductsToShow] = useState(3);
    const [itemPageData, setItemPageData] = useState(null);

    const handleViewMoreClick = () => {
        setProductsToShow(productsToShow + 3);
    };

    return (
        <div className="home">
            <div className="home_container">
                <div>
                    <img className="logo_home" src={logo} alt="logo" />
                </div>
                <div>
                    <div className="shop_info">
                        <h2> Магазин смарфонів </h2>
                        <p className="paragraph"> Смартфони від найпопулярніших брендів світу </p>
                    </div>
                </div>
            </div>
            {itemPageData
                ? <ItemPage
                    setItemPageData = {setItemPageData}
                    itemPageData = {itemPageData}
                />
                : <HomePaginatedView
                    productsToShow = {productsToShow} 
                    handleViewMoreClick = {handleViewMoreClick}
                    productsData = {productsData}
                    showCatalog = {showCatalog}
                    setItemPageData = {setItemPageData}
                />
            }
            <hr />
        </div>
    );
}

export default Home;