import React from "react";
import "./CatalogCardItem.scss";

const CatalogCardItem = ({ brand, model, image, price, id }) => {
    return (
        <div className="card_catalog_item">
            <p className="item">Item {id}</p>
            <img src={image} alt="smartphone" />
            <h2>{brand} {model}</h2>
            <div className="paragraph_price">
                <p className="price_item">Price: </p>
                <p className="price_value">{price}$</p>
            </div>
            <button>View more</button>
        </div>
    );
};

export default CatalogCardItem;