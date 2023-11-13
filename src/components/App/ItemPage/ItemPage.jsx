import React from "react";
import "./ItemPage.scss";


const ItemPage = ({ brand, model, image, price, id }) => {
    return (
        <div>
            <div className="item_page_container">
                <div>
                    <img src={image} alt="smartphone" />
                </div>
                <div>
                    <ul>
                        <li>128GB</li>
                        <li>256GB</li>
                    </ul>
                </div>
                <div>
                    <div className="item_page_info">
                        <h2>{brand}</h2>
                        <p className="item_page_paragraph">{model}</p>
                    </div>
                </div>
                <div>
                    <p className="price_item_section">Price:{price}</p>
                </div>
                <div>
                    <p>Count</p>
                    <p>
                        <input type="number" min="1" step="1" id="item_page_price" placeholder="Price $" />
                    </p>
                    <p>Color</p>
                    <div className="color_field">
                        <select id="color">
                            <option value="">Color</option>
                            <option value="White">White</option>
                            <option value="Black">Black</option>
                            <option value="Red">Red</option>
                            <option value="Gold">Gold</option>
                            <option value="Blue">Blue</option>
                            <option value="Violet">Violet</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p className="price_section">Gereral price: </p>
                </div>
                <div>
                    <ul className="item_page_button_section">
                        <li className="item_page_item">
                            <button className="go_back_button">Go back</button>
                        </li>
                        <li className="item_page_item">
                            <button className="add_to_cart_button">Add to cart</button>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    );
}

const inputField = document.getElementById('item_page_price');
inputField.addEventListener('change', updateGeneralPrice);

function updateGeneralPrice(price) {
    const quantity = parseInt(inputField.value);
    const itemPrice = parseFloat(price);
    const generalPrice = quantity * itemPrice;

    if (!Number.isInteger(quantity) || quantity < 1) {
        inputField.value = '';
        alert('Please enter a valid number.');
    } else {
        const generalPriceElement = document.querySelector('.price_section');
        generalPriceElement.textContent = `General price: ${generalPrice}`;
    }
}


export default ItemPage;