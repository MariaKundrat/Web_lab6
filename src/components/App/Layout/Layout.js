import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './LayoutStyles';

const Layout = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <ul className>
                    <li style={styles.navLink} className="nav-item">
                        <a className="nav-link" href=" ">Home</a>
                    </li>
                    <li style={styles.navLink} className="nav-item">
                        <a className="nav-link" href=" ">Catalog</a>
                    </li>
                    <li style={styles.navLink}  className="nav-item">
                        <a className="nav-link" href=" ">Cart</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Layout