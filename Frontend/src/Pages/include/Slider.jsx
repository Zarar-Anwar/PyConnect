import React from "react";
import "./Slider.css"; // for any extra styling if needed
import { server_ip } from "../../Utils/Data";

const SliderBullets = ({profileData}) => {
  return (
    <div className="container px-5 pb-5 py-5" style={{marginBottom:"40px"}}>
      <div className="row gx-5 align-items-center">
        <div className="col-xxl-5 fade-up">
          {/* Header text content */}
          <div className="text-center text-xxl-start">
           
            <div className="fs-3 fw-light text-muted">
              {profileData?.subtitle}
            </div>
            <h1 className="display-3 fw-bolder mb-5">
              <span className="text-gradient d-inline">
                {profileData?.title}
              </span>
            </h1>
          </div>
        </div>

        <div className="col-xxl-7 fade-up">
          {/* Header profile picture */}
          <div className="d-flex justify-content-center mt-5 mt-xxl-0 flex-column align-items-center">
            <div className="profile bg-gradient-primary-to-secondary position-relative mb-3">
              <img
                className="profile-img"
                src= {server_ip+profileData?.image1 || `/images/pic4.png`}
                alt="Profile Image"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "50%" }}
              />
              <div className="dots-1 position-absolute top-0 start-0">
                {/* Optional background effect */}
              </div>
            </div>
            <h5 className="fw-bold mb-0">{profileData?.name}</h5>
            <p className="text-muted mb-0">{profileData?.designation}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SliderBullets;
