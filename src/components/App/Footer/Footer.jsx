import React from "react";
import "./Footer.scss";
import logo from "../../../images/logo.jpg";
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className="footer_list">
                    <div className="details">
                        <h2>Детальна інформація</h2>
                    </div>
                    <div>
                        <img className="logo" src={ logo } alt="logo"/>
                    </div>
                    <div className="footer_icons">
                        <div className="footer_obj">
                            <a href=" " className="facebook"> 
                                <FacebookOutlined/>
                            </a>
                            <a href=" " className="twitter">
                                <TwitterOutlined/>
                            </a>
                            <a href=" " className="linkedin">
                                <LinkedinOutlined/>
                            </a>
                            <a href=" " className="instagram">
                                <InstagramOutlined/>
                            </a>
                        </div>
                    </div>
                </div>
                <hr/>
                <p> 2023 IoT © Copyright all rights reserved </p>
            </div>
        </footer>
    );
};

export default Footer;