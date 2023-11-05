import PRODUCTS_DATA from "../../ProductsData";
import CardItem from "../../CardItem/CardItem";
import "./HomeItemsList.scss";

const HomeItemsList = () => {
    return (
        <div className="home_item_list">
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
    );
}

export default HomeItemsList;