import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../../Redux/Reducers/SmartphoneSlice';

const ShoppingCartItem = ({ model, brand, price, id, smartphoneQuantity }) => {
    const dispatch = useDispatch();
    console.log(model);

    return (
        <div>
            <p>Model: {model}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Quantity: {smartphoneQuantity}</p>
            <button onClick={() => dispatch(incrementQuantity(id))}>Increment</button>
            <button onClick={() => dispatch(decrementQuantity(id))}>Decrement</button>
        </div>
    );
};

export default ShoppingCartItem;