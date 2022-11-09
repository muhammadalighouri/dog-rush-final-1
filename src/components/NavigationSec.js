import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaRedditAlien, FaTiktok } from "react-icons/fa";
import { links } from "../assests/data";
import { FaInstagram } from "react-icons/fa";
import {
    DiscFullRounded,
    Instagram,
    Telegram,
    Twitter,
    YouTube,
} from "@material-ui/icons";
import { nav } from "../assests/data";
import "../scss/navsec.scss";
const NavigationSec = ({ text, style }) => {
    const [navToggler, setNavToggler] = useState(false);
    function barBtn() {
        setNavToggler(!navToggler);
    }
    const navigate = useNavigate();
    return (
        <div className="header" style={style}>
            <div className="container">
                <div className="icon">
                    <div onClick={() => barBtn()}>
                        <span
                            style={{
                                transform: navToggler
                                    ? "translateY(15px) rotate(45deg)"
                                    : "unset",
                            }}
                        ></span>
                        <span
                            style={{
                                display: navToggler ? "none " : "unset",
                            }}
                        ></span>
                        <span
                            style={{
                                transform: navToggler
                                    ? "translateY(-6px) rotate(-45deg) "
                                    : "unset",
                            }}
                        ></span>
                    </div>
                </div>
                <h2>
                    <img
                        onClick={() => navigate("/")}
                        src="/images/logo/01-03.png"
                        alt=""
                    />
                </h2>
                <div className={`nav__top ${navToggler ? "nav___active" : null}`}>
                    <div className="div">
                        <ul>
                            <li>
                                <Link to={"/"}>Doge Rush</Link>
                            </li>
                            <li>
                                <Link to={"/home"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/buy"}>Buy Now</Link>
                            </li>
                            <li>
                                <Link to={"/buy"}>Whitepaper</Link>
                            </li>
                            <li>
                                <Link to={"/buy"}>Telegram</Link>
                            </li>
                            <li>
                                <Link to={"/disclaimer"}>Disclaimer</Link>
                            </li>
                            <li>
                                <Link to={"/privacy-policy"}>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={"/terms"}>Terms and Conditions</Link>
                            </li>
                        </ul>
                        <div className="icons">
                            <a
                                href="https://www.youtube.com/channel/UCwj4YrAKFltipzbrp_0YR3A/featured
"
                                target="_blank"
                            >
                                <YouTube />
                            </a>
                            <a href="https://www.instagram.com/dogerush/" target="_blank">
                                <Instagram />
                            </a>
                            <a href="https://t.me/dogerushchat" target="_blank">
                                <Telegram />
                            </a>
                            <a
                                href="https://www.tiktok.com/@dogerushofficial"
                                target="_blank"
                            >
                                <FaTiktok />
                            </a>
                            <a href="https://twitter.com/dogerushcoin " target="_blank">
                                <AiOutlineTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationSec;
