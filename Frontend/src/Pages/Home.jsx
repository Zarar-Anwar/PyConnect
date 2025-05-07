import HomeSlider from "./include/Slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSection from "./include/TestionialSection";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Utils/Store";
import { Link } from "react-router-dom";
import api from "../Utils/Axios";
import { server_ip } from "../Utils/Data";
import ClinicComp from "./include/ClinicsComp";
import HeroBanner from "./include/Slider";
import SliderBullets from "./include/Slider";
import { Helmet } from "react-helmet";

const Home = ({ title }) => {
  const { state } = useContext(Store);
  const { ContactInfo } = state;

  const [profileData, setProfileData] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [clinicProfile, setClinicProfile] = useState(null);
  const [highlights, setHighlights] = useState([]);
  const [guideVideo, setGuideVideo] = useState(null);
  const [vlogs, setVlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await api.get("/profile-data-section/");
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    const fetchClinicProfile = async () => {
      try {
        const response = await api.get("/main-clinic-profile/");
        setClinicProfile(response.data);
      } catch (error) {
        console.error("Error fetching Main Clinic:", error);
      }
    };
    const fetchHighlightClinic = async () => {
      try {
        const response = await api.get("/clinic-highlight/");
        setHighlights(response.data.filter((item) => item.is_featured));
        console.log(highlights);
      } catch (error) {
        console.error("Error fetching highlight Clinic:", error);
      }
    };
    const fetchBookingVideos = async () => {
      try {
        const response = await api.get("/booking-guide-video/");
        setGuideVideo(response.data);
      } catch (error) {
        console.error("Error fetching Guided Video:", error);
      }
    };
    const fetchTestimonials = async () => {
      try {
        const response = await api.get("/testimonial/");
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching Testimonials:", error);
      }
    };
    const fetchDoctors = async () => {
      try {
        const response = await api.get("/doctor/");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching Doctors:", error);
      }
    };
    fetchProfileData();
    fetchClinicProfile();
    fetchHighlightClinic();
    fetchBookingVideos();
    fetchTestimonials();
    fetchDoctors();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <img
          className="profile-img img-fluid mx-auto d-block"
          src={server_ip + profileData?.image1 || `/images/pic4.png`}
          alt="Profile Image"
          style={{maxWidth: "100%", height: "auto", borderRadius: "8px"}}
      />

      <section className="ttm-row connect-section_1 bg-img8 clearfix ">
        <div className="container">
          {/*row*/}
          <div className="row">
            <div className="col-lg-12 text-center">
              {/*featured-icon-box*/}
              <div className="featured-icon-box icon-align-top-content text-center style14">
                <div className="featured-icon">
                  <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-skincolor ttm-icon_element-style-rounded ttm-icon_element-size-md">
                    <i className="flaticon flaticon-psychological-help" />
                  </div>
                </div>
                <div className="featured-content" style={{ fontSize: "30px" }}>
                  <div className="featured-title">
                    <h4>
                      Call us On: <br /> {ContactInfo.contact_phone}
                    </h4>
                  </div>
                </div>
                <Link
                  className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-dark"
                  to="#"
                  title=""
                  tabIndex={0}
                  onClick={() =>
                    window.open(
                      `https://wa.me/${ContactInfo.contact_phone}`,
                      "_blank"
                    )
                  }
                  style={{ marginTop: "50px" }}
                >
                  Contact Us!
                </Link>
              </div>
              {/*featured-icon-box end*/}
            </div>
          </div>
          {/*row end*/}
        </div>
      </section>

      <section
        className="ttm-row zero-padding-section bg-layer-equal-height res-991-pb-45 ttm-bgcolor-white clearfix"
        style={{ marginTop: "150px" }}
      >
        <div className="container">
          {clinicProfile ? (
            <Link to="/doctor-details" state={{ item: clinicProfile?.doctor }}>
              <div className="row">
                {clinicProfile ? (
                  <>
                    <div className="col-lg-7 col-md-7 col-sm-7">
                      <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span ttm-bgcolor-white  spacing-6">
                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                          <div className="ttm-col-wrapper-bg-layer-inner" />
                        </div>
                        <div className="layer-content">
                          {/*section title*/}
                          <div className="section-title">
                            <div className="title-header">
                              <h5>{clinicProfile?.welcome_heading}</h5>
                              <h2 className="title">
                                <strong>
                                  {clinicProfile?.highlighted_text}
                                </strong>{" "}
                                ({clinicProfile?.clinic?.clinic_name})
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5">
                      <div className="ttm-bg ttm-col-bgcolor-yes spacing-5 z-index-0">
                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                        <div className="layer-content">
                          {/* ttm_single_image-wrapper */}
                          <div className="ttm_single_image-wrapper txt-md-left">
                            <div
                              style={{
                                position: "relative",
                                width: "100%",
                                paddingTop: "100%", // 1:1 aspect ratio (square)
                                overflow: "hidden",
                                borderRadius: "20px", // optional: rounded corners
                                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                                marginTop:"80px",// optional: nice shadow
                                objectFit:"contain"
                              }}
                            >
                              <img
                                className="img-fluid"
                                src={
                                  clinicProfile
                                    ? `${server_ip}${clinicProfile?.doctor_image}`
                                    : "images/team-member/team-img06.jpg"
                                }
                                title="single-img-two"
                                alt="single-img-five"
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover", // makes sure it fills nicely
                                }}
                              />
                            </div>

                            <div
                              className="featured-content"
                              style={{ marginTop: "30px" }}
                            >
                              <div className="featured-title">
                                <h3>
                                <Link
                                    to={`https://wa.me/${ContactInfo.contact_phone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      marginLeft: "10px",
                                      padding: "6px 12px",
                                      backgroundColor: "#25D366",
                                      color: "white",
                                      borderRadius: "5px",
                                      textDecoration: "none",
                                      display: "inline-block",
                                    }}
                                  >
                                    <i
                                      className="fa fa-whatsapp"
                                      style={{ marginRight: "6px" }}
                                    ></i>

                                  </Link>

                                  {/* Phone Button */}
                                  <Link
                                    to={`tel:${ContactInfo.contact_phone}`}
                                    style={{
                                      marginLeft: "10px",
                                      padding: "6px 12px",
                                      backgroundColor: "rgb(1, 182, 173)",
                                      color: "white",
                                      borderRadius: "5px",
                                      textDecoration: "none",
                                      display: "inline-block",
                                    }}
                                  >
                                    <i
                                      className="fa fa-phone"
                                      style={{ marginRight: "6px" }}
                                    ></i>

                                  </Link>
                                  {ContactInfo.contact_phone}
                                  {/* WhatsApp Button */}

                                </h3>
                              </div>
                            </div>
                          </div>
                          {/* ttm_single_image-wrapper end */}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center  text-danger my-5">
                    <strong>
                      <p>No Main Clinic Profile Available</p>
                    </strong>
                  </div>
                )}
              </div>
            </Link>
          ) : (
            <div className="text-center  text-danger my-5">
              <strong>
                <p>No Main Clinic Profile Available</p>
              </strong>
            </div>
          )}
        </div>
      </section>

      <section className="py-5 bg-light" style={{ marginBottom: "100px" }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8 col-md-10">
              <div className="section-title title-style-center_text">
                <h5 className="text-uppercase text-primary fw-semibold animate__animated animate__fadeInDown">
                  Our Excellence
                </h5>
                <div className="justify-content-between align-items-center mt-5">
                  <h2 className="fw-bold text-center display-5 animate__animated animate__fadeInUp mb-0">
                    Psychiatrist in Cities
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            {highlights.length > 0 ? (
              highlights.map((object) => <ClinicComp object={object} />)
            ) : (
              <div className="text-center  text-danger my-5">
                <strong>
                  <p>No Clinic's Profile Available</p>
                </strong>
              </div>
            )}
            <Link to="/clinics">
              <button className="ttm-btn  ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor">
                View All
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="ttm-row about-section_2 ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img4 clearfix">
        <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-12">
              <div className="row-title style2 pt-20 res-991-pt-0">
                <div className="section-title without-seperator ttm-textcolor-white clearfix">
                  <div className="title-header">
                    <h5>Steps towards mental fitness</h5>
                    <h2 className="title ttm-textcolor-white">
                      How to Book an Appointment
                    </h2>
                  </div>
                </div>
                <div className="mb-20">
                  {guideVideo ? (
                    <div
                      className="ttm-video-wrapper bg-transparent position-relative"
                      style={{
                        backgroundColor: "transparent",
                        zIndex: 2,
                        maxWidth: "100%",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <video
                        controls
                        autoPlay
                        muted
                        loop
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        preload="auto"
                      >
                        <source
                          src={
                            guideVideo.video
                              ? `${server_ip}${guideVideo.video}`
                              : "/videos/appointment-guide.mp4"
                          }
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <div className="text-center  text-danger my-5">
                      <strong>
                        <p>No Video Available</p>
                      </strong>
                    </div>
                  )}
                </div>
                {/* section title */}

                {/* section title end */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection testimonials={testimonials} />

      <SliderBullets profileData={profileData} />
    </>
  );
};

export default Home;
