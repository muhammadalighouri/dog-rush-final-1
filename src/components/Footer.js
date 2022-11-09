import React from "react";
import "../scss/footer.scss";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaRedditAlien } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Instagram, Telegram, YouTube } from "@material-ui/icons";
const Footer = ({ stylo }) => {
    return (
        <footer style={stylo}>
            <div className="container">
                <div className="grid">
                    <p>Copyright © 2022, Doge Rush | All Rights Reserved.</p>
                    <div>
                        <div className="nav__btns">
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
                        <p >
                            <Link to={"/home"}>Home</Link>{" "}
                            <Link to={"/disclaimer"}>Disclaimer</Link>{" "}
                            <Link to={"/terms"}>Terms and Conditions</Link>
                            <Link to={"/privacy-policy"}>Privacy Policy</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
