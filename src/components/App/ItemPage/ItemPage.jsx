import React from "react";
import "./ItemPage.scss";

const ItemPage = ({ itemPageData, setItemPageData }) => {
    const {image, brand, model, price} = itemPageData;

    const handleGoBack = (event) => {
        event.preventDefault();
        setItemPageData(null);
    }

    return (
        <div>
            <div className="item_page_container">
                <div>
                    <img src={image} alt="smartphone" />
                </div>
                <div>
                    <div className="buttons_gb">
                        <button className="button_128">128GB</button>
                        <button className="button_256">256GB</button>
                    </div>
                    <div>
                        <div className="item_page_info">
                            <h2>{brand}</h2>
                            <p className="item_page_paragraph">{model}</p>
                        </div>
                    </div>
                    <div>
                        <p className="price_item_section">Price: {price}$</p>
                    </div>
                    <div className="counter">
                        <p className="count_of_models">Count
                            <input type="number" min="1" step="1" className="item_page_price" placeholder="how many models" />
                        </p>
                    </div>
                    <div className="color_field">
                        <p className="color_of_the_model">Color</p>
                            <div className="color_input">
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
                    </div>
                </div>
                <div className="calculate_price">
                    <div>
                        <p className="price_section">Gereral price: </p>
                    </div>
                    <div className="price_general_section">
                        <ul className="item_page_button_section">
                            <li className="item_page_item">
                                <button className="go_back_button" onClick={handleGoBack}>Go back</button>
                            </li>
                            <li className="item_page_item">
                                <button className="add_to_cart_button">Add to cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default ItemPage;