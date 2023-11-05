import PRODUCTS_DATA from "../../ProductsData";
import { CatalogCardItem } from "../../CatalogCardItem/index";
import "./HomeCatalog.scss";

const HomeCatalog = () => {
    return (
        <div className="catalog_card_item_list">
            {PRODUCTS_DATA.map(({ brand, model, price, image }, idx) => (
                <CatalogCardItem
                    brand= {brand}
                    model={model}
                    image={image}
                    price={price}
                    key = {idx}
                    id={idx + 1}
                />
            ))}
        </div>
    );
}

export default HomeCatalog;