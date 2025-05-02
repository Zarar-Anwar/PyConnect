import React from "react";
import "./Slider.css";
import { server_ip } from "../../Utils/Data";

const SliderBullets = ({ profileData }) => {
    return (
        <div className="container mb-4 d-flex justify-content-center align-items-center">
            <div className="row w-100">
                <div className="col-12 text-center">
                    <img
                        className="img-fluid w-100"
                        src={
                            profileData?.image2
                                ? server_ip + profileData.image2
                                : "/images/slides/slider-mainbg-03.jpg"
                        }
                        alt="Profile"
                        style={{
                            borderRadius: "0", // optional
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SliderBullets;
