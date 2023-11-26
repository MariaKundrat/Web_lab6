import React from "react";
import "./Search.scss";
import PRODUCTS_DATA from "../../ProductsData";

const Search = ({ setProductsData, productsData }) => {

    const hadleUserInput = (event) => {
        const userInput = event.target.value;
        console.log('userInput: ', userInput);
        const searchData = PRODUCTS_DATA.filter(phone => {
            const name = phone.brand + " " + phone.model; 
            const isMatch = name.toLowerCase().includes(userInput.toLowerCase());
            
            return isMatch;
        });

        setProductsData(searchData);
    }

    return (
        <div>
            <div className="search">
                <input type="text" id="search-input" onChange={hadleUserInput} placeholder="Search" />
            </div>
            <div className="items_container">
            </div>
        </div>
    );
}

export default Search;