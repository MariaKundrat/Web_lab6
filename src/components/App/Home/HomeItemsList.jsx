import React from "react";
import CardItem from "../../CardItem/CardItem";
import "./HomeItemsList.scss";

const HomeItemsList = ({ productsToShow, productsData }) => {
    const displayedProducts = productsData.slice(0, productsToShow);

    return (
        <div className="home_item_list">
            {displayedProducts.map(({ brand, model, price, image }, idx) => (
                <CardItem
                    brand={brand}
                    model={model}
                    image={image}
                    price={price}
                    key={idx + 1}
                    id={idx + 1}
                />
            ))}
        </div>
    );
}

export default HomeItemsList;