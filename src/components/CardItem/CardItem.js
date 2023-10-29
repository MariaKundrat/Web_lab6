import React from "react";
import { Card } from "antd";
import styles from "./CardItemStyles";

const CardItem = ({ brand, model, imageSrc, price }) => (
    <Card
        hoverable
        style={{ width: 300, borderRadius: "20px" }}
        cover={
            <img style={styles.image} alt="example" src={imageSrc} />
        }
    >
        <div>
            <h2>{brand}</h2>
            <p>Model: {model} </p>
            <p>Price: {price} </p>
        </div>
    </Card>
);

export default CardItem;