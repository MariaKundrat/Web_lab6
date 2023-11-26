import React from "react";
import { CatalogCardItem } from "../../CatalogCardItem/index";
import "./HomeCatalog.scss";

const HomeCatalog = ({ productsData, setItemPageData }) => {
    return (
        <div className="catalog_card_item_list">
            {productsData.map(({ brand, model, price, image }, idx) => (
                <CatalogCardItem
                    brand={brand}
                    model={model}
                    image={image}
                    price={price}
                    key={idx}
                    id={idx + 1}
                    setItemPageData ={setItemPageData}
                />
            ))}
        </div>
    );
}

export default HomeCatalog;