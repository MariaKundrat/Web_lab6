import React, { useState } from "react";
import "./Filters.scss";
import PRODUCTS_DATA from "../../ProductsData";

const Filters = ({ applyFilters, setProductsData }) => {
    const [catalogFilters, setCatalogFilters] = useState({
        selectedBrand: "",
        selectedModel: "",
        selectedPrice: ""
    });

    const handleApplyFilters = () => {
        applyFilters(catalogFilters);
    };

    const handleSelectBrand = (event) => {
        const brand = event.target.value;
        const selectedModel = "";
        setCatalogFilters({ ...catalogFilters, selectedBrand: brand, selectedModel });
    }

    const handleSelectModel = (event) => {
        const model = event.target.value;
        setCatalogFilters({ ...catalogFilters, selectedModel: model });
    }

    const handleSelectPrice = (event) => {
        const price = event.target.value;
        setCatalogFilters({ ...catalogFilters, selectedPrice: price });
    }

    const getModelsByBrand = (selectedBrand) => {
        const uniqueModels = [...new Set(PRODUCTS_DATA.filter(product => product.brand === selectedBrand).map(product => product.model))];
        return uniqueModels;
    };

    return (
        <div className="filter_home_catalog">
            <div className="filters">
                <div className="filters_list">
                    <div className="brand_filter">
                        <select id="brand" onChange={handleSelectBrand} >
                            <option value="">Brand</option>
                            <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Huawei">Huawei</option>
                            <option value="Poco">Poco</option>
                            <option value="Google">Google</option>
                        </select>
                    </div>
                    <div className="model_filter">
                        <select id="model" onChange={handleSelectModel}>
                            <option value="">Model</option>
                            {catalogFilters.selectedBrand &&
                                getModelsByBrand(catalogFilters.selectedBrand).map((model, index) => (
                                    <option key={index} value={model}>
                                        {model}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="price_filter">
                        <input
                            type="number"
                            id="price"
                            placeholder="Price $"
                            onChange={handleSelectPrice}
                        />
                    </div>
                </div>
                <button className="search_button" onClick={handleApplyFilters}> Apply </button>
            </div>
            <hr />
        </div>
    );
};

export default Filters;