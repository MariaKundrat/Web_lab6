import React from "react";
import "./ShoppingCart.scss";
import ShoppingCartItem from "../../ShoppingCartItem/ShoppingCartItem";
import { useSelector } from "react-redux";

const ShoppingCart = ({ showShoppingCart, setShowShoppingCart, setShowCatalog }) => {
    const handleBackToCatalog = () => {
        setShowShoppingCart(false);
        setShowCatalog(true);
    };

    const smartphoneItems = useSelector((state) => state.smartphone.smartphoneItems);

    const totalAmount = smartphoneItems.reduce((total, { price, smartphoneQuantity }) => {
        return total + price * smartphoneQuantity;
    }, 0);

    return (
        <div>
            {smartphoneItems.map(({ id, brand, model, price, image, smartphoneQuantity }) => (
                <ShoppingCartItem
                    brand={brand}
                    model={model}
                    image={image}
                    price={price}
                    key={id}
                    id={id}
                    smartphoneQuantity={smartphoneQuantity}
                />
            ))}

            <p className="total">Total amount: {totalAmount} $</p>
            <div className="shopping_cart_buttons">
                <button className="back_s" onClick={handleBackToCatalog}>Back to Catalog</button>
                <button className="continue_s">Continue</button>
            </div>
        </div>
    );
}

export default ShoppingCart;
