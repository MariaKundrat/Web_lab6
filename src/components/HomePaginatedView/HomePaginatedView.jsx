import React from "react";
import HomeItemsList from "../App/Home/HomeItemsList";
import HomeCatalog from "../App/Home/HomeCatalog";
import ViewMoreHome from "../App/Home/ViewMoreHome";
import PRODUCTS_DATA from "../ProductsData";

const HomePaginatedView = ({ productsToShow, handleViewMoreClick, showCatalog, productsData, setItemPageData }) => {
    return ( 
        <React.Fragment>
            {showCatalog
                ? <HomeCatalog productsData={productsData} setItemPageData={setItemPageData} /> 
                : <React.Fragment>
                    <HomeItemsList productsToShow={productsToShow} productsData={PRODUCTS_DATA} />
                    {PRODUCTS_DATA.length > productsToShow && (
                        <ViewMoreHome onClick={handleViewMoreClick} />
                    )}
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default HomePaginatedView;