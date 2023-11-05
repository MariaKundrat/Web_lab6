import React from "react";
import "./Home.scss";
import logo from "../../../images/logo.jpg";
import HomeItemsList from "./HomeItemsList";
import HomeCatalog from "./HomeCatalog";
import ViewMoreHome from "./ViewMoreHome";


const Home = ({ showCatalog }) => {
    return (
        <div>
            <div className="home_container">
                <div>
                    <img className="logo_home" src={ logo } alt="logo"/>
                </div>
                <div>
                    <div className="shop_info">
                        <h2> Магазин смарфонів </h2>
                        <p className="paragraph"> Смартфони від найпопулярніших брендів світу </p>
                    </div>
                </div>
            </div>
            { showCatalog ? <HomeCatalog /> : <HomeItemsList /> }
            { showCatalog || <ViewMoreHome /> }
            <hr/>
        </div>
    );
}

export default Home;