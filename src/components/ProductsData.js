import iphone from "../images/iphone.jpg";
import google from "../images/google.webp";
import huawei from "../images/huawei.jpg";
import samsung from "../images/samsung.jpg";
import honor from "../images/honor.jpg";
import poco from "../images/poco.jpg";

const PRODUCTS_DATA = [
    {
        brand: 'Samsung',
        model: 'Galaxy S21',
        price: 800,
        image: samsung
    },
    {
        brand: 'Apple',
        model: 'iPhone 13',
        price: 1000, 
        image: iphone
    },
    {
        brand: 'Google',
        model: 'Pixel 6',
        price: 750,
        image: google
    },
    {
        brand: 'Honor',
        model: 'Magic',
        price: 500,
        image: honor
    },
    {
        brand: 'Poco',
        model: 'X3',
        price: 200,
        image: poco
    },
    {
        brand: 'Huawei',
        model: 'Nova 10',
        price: 700,
        image: huawei
    }
];

export default PRODUCTS_DATA;