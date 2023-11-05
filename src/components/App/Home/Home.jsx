import React from "react";
import "./Home.scss";
import CardItem from "../../CardItem/CardItem";
import logo from "../../../images/logo.jpg";
import PRODUCTS_DATA from "../../ProductsData";

const Home = () => {
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
            <div className="home_list">
                {PRODUCTS_DATA.map(({ brand, model, price, image }, idx) => (
                    <CardItem
                        brand= {brand}
                        model={model}
                        image={image}
                        price={price}
                        key = {idx}
                        id={idx}
                    />
                ))}
            </div>
            <div className="button_div">
                <button>
                    <a className="view_more_button" href=" ">View more</a>
                </button>
            </div>
            <hr/>
        </div>
        
    );
}

export default Home;