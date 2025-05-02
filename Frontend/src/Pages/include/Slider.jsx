import React from "react";
import "./Slider.css"; // for any extra styling if needed
import {server_ip} from "../../Utils/Data";

const SliderBullets = ({profileData}) => {
    return (
        <div
            className="container"
            style={{
                marginBottom: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className="row align-items-center justify-content-center">
                <div className="col-xxl-12 text-center">
                    {/* Header profile picture */}
                    <img
                        className="img-fluid" // ensures image is responsive
                        src={server_ip + profileData?.image2 || `/images/slides/slider-mainbg-03.jpg`}
                        alt="Profile Image"
                        style={{
                            width: "130%", // Set width to 100% of container to make it responsive
                            height: "auto", // Ensures the height scales automatically
                            maxWidth: "130%", // Makes image slightly smaller to fit better
                            marginLeft: "-15%", // Adjusts the image to center it
                            marginRight: "-15%", // Adjusts the image to center it
                            borderRadius: "0", // optional, adjust as per your design
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SliderBullets;
