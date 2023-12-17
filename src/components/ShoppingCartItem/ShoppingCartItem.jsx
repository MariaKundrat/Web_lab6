import React, { useState } from 'react';

const ShoppingCartItem = ({ name, price }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <h2>{name}</h2>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <p>{price * quantity}</p>
        </div>
    );
};

export default ShoppingCartItem;