import React, { useState, useEffect } from "react";
import { CatalogCardItem } from "../../CatalogCardItem/index";
import "./HomeCatalog.scss";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import samsungImage from "../../../images/samsung.jpg";
import iphoneImage from "../../../images/iphone.jpg";
import googleImage from "../../../images/google.webp";
import honorImage from "../../../images/honor.jpg";
import pocoImage from "../../../images/poco.jpg";
import huaweiImage from "../../../images/huawei.jpg";
import samsungs23Image from "../../../images/samsungs23.webp";
import iphone14Image from "../../../images/iphone14.webp";
import applechinaImage from "../../../images/applechina.jpg";

const images = {
    samsung: samsungImage,
    iphone: iphoneImage,
    google: googleImage,
    honor: honorImage,
    poco: pocoImage,
    huawei: huaweiImage,
    samsungs23: samsungs23Image,
    iphone14: iphone14Image,
    applechina: applechinaImage
}

const HomeCatalog = ({ setItemPageData, productsData }) => {
    const [products, setProducts] = useState(productsData);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let timer = null;

        const fetchSmartphones = async () => {
            setIsLoading(true);
            timer = setTimeout(() => setIsLoading(false), 3000);

            const response = await axios.get('http://localhost:3000/api/smartphones');
            setProducts(response.data);
        };

        if (products.length === 0) {
            fetchSmartphones()
        }

        return () => clearTimeout(timer);

    }, []);

    return (
        <div className="catalog_card_item_list">
            {isLoading
                ? <Spinner />
                : products.length > 0 && products.map(({ brand, model, price, image }, idx) => (
                    <CatalogCardItem
                        brand={brand}
                        model={model}
                        image={images[image]}
                        price={price}
                        key={idx}
                        id={idx + 1}
                        setItemPageData={setItemPageData}
                    />
                ))
            }
        </div>
    );
}

export default HomeCatalog;