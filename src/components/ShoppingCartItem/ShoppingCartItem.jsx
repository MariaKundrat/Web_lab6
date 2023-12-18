import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../../Redux/Reducers/SmartphoneSlice';
import "./ShoppingCartItem.scss";

const ShoppingCartItem = ({ model, brand, price, id, smartphoneQuantity, image }) => {
    const dispatch = useDispatch();
    console.log(model);

    return (
        <div>
            <p className='shopping'>Shopping Cart</p>
            <p className='model_s'>Model: {model}</p>
            <p className='brand_s'>Brand: {brand}</p>
            <p className='price_s'>Price: {price}</p>
            <p className='quantity_s'>Quantity: {smartphoneQuantity}</p>
            <div className='elem_s'>
                <img className="img_s" src={image} />
            </div>
            <div className='button_s'>
                <button className='increment' onClick={() => dispatch(incrementQuantity(id))}>Increment</button>
                <button className='decrement' onClick={() => dispatch(decrementQuantity(id))}>Decrement</button>
            </div>
        </div>
    );
};

export default ShoppingCartItem;