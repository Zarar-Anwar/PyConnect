import React from "react";
import "./Slider.css"; // for any extra styling if needed
import { server_ip } from "../../Utils/Data";

const SliderBullets = ({profileData}) => {
  return (
    <div className="container px-5 pb-5 py-5" style={{marginBottom:"40px"}}>
      <div className="row gx-5 align-items-center">
       

        <div className="col-xxl-12 fade-up">
          {/* Header profile picture */}
        
              <img
                className="profile-img"
                // src= {server_ip+profileData?.image1 || `/images/pic4.png`}
                src={`/images/slides/slider-mainbg-03.jpg`}
                alt="Profile Image"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "" }}
              />
             
        
   
        </div>
      </div>
    </div>

  );
};

export default SliderBullets;
