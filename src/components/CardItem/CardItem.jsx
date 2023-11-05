import React from "react";
import "./CardItem.scss";

const CardItem = ({ brand, model, image, price, id }) => {
    return (
        <div className="card_item">
            <img src={image} alt="smartphone" />
            <h2>{brand}</h2>
            <h2>{model}</h2>
            <p>{price}$</p>
        </div>
    );
};

export default CardItem;