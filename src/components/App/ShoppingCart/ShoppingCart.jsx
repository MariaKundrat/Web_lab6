import React from "react";
import "./ShoppingCart.scss";

const ShoppingCart = ({ setShowShoppingCart, setShowCatalog }) => {
    const handleBackToCatalog = () => {
        setShowShoppingCart(false);
        setShowCatalog(true);
    };

    return (
        <div>
            <p className="shopping">Shopping Cart</p>
            <p className="total">Total amount: $</p>
            <div className="shopping_cart_buttons">
                <button className="back_s" onClick={handleBackToCatalog}>Back to Catalog</button>
                <button className="continue_s">Continue</button>
            </div>
        </div>
    );
}

export default ShoppingCart;
