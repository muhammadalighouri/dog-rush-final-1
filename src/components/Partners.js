import React from "react";
import { Partners_1, partners } from "../assests/data";
import "../scss/partners.scss";
import Marquee from "react-fast-marquee";
const Partners = () => {
    return (
        <>
            <section className="partners">
                <div className="heading">
                    <h1 data-aos="fade-down" className="aos-init aos-animate">
                        Featured In
                    </h1>
                </div>
                {/* <div className="container">
                    <div className="grid">
                        {
                            partners.map((item, ind) => {
                                return (
                                    <div className="item">
                                        <img src={item} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
            </section>
        </>
    );
};

export default Partners;
