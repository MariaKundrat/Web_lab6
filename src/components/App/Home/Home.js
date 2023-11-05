import React from "react";
import styles from "./HomeStyles";
import CardItem from "../../CardItem/CardItem";

const data = [
    {
        brand: 'Samsung',
        model: 'Galaxy S21',
        price: 800,
        image: './images/samsung.jpg'
    },
    {
        brand: 'Apple', 
        model: 'iPhone 13', 
        price: 1000, image: 
        './images/iphone.jpg'
    },
    { 
        brand: 'Google', 
        model: 'Pixel 6', 
        price: 750, 
        image: './images/google.webp' 
    },
    { 
        brand: 'Xiaomi', 
        model: 'Redmi 8A', 
        price: 900, 
        image: './images/xiaomi.jpg' 
    },
    { 
        brand: 'Honor', 
        model: 'Magic', 
        price: 500, 
        image: './images/honor.jpg' 
    },
    { 
        brand: 'Poco', 
        model: 'X3', 
        price: 200, 
        image: './images/poco.jpg'
    },
    { 
        brand: 'Huawei', 
        model: 'Nova 10', 
        price: 700, 
        image: './images/huawei.jpg' 
    }
];

const Home = () => {
    return (
        <div className="container">
            <div style={styles.container} className="row">
                <div>
                    <h2 style={styles.textHeader}> Магазин смарфонів </h2>
                </div>
            </div>
            <div>
            <p style={styles.text}> Смартфони </p>
            </div>
            <div style={styles.cardWrapper}>
                {data.map(({ brand, model, price, image }, idx) => (
                    <CardItem
                        brand={brand}
                        model={model}
                        imageSrc={image}
                        price={price}
                        id={idx}
                    />
                ))}
            </div>
            <div style={styles.button_container}>
                <button style={styles.button} className="btn btn-primary">
                    <a className="nav-link" href=" ">View more</a>
                </button>
            </div>
        </div>
    );
}

export default Home;