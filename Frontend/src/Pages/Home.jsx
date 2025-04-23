import HomeSlider from "./include/Slider"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialSection from "./include/TestionialSection";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Utils/Store";
import { Link } from "react-router-dom";
import api from "../Utils/Axios";
import { server_ip } from "../Utils/Data";
import ClinicComp from "./include/ClinicsComp";
import HeroBanner from "./include/Slider";
import SliderBullets from "./include/Slider";


const Home = ({ title }) => {
    const { state } = useContext(Store)
    const { ContactInfo } = state


    const [profileData, setProfileData] = useState(null)
    const [doctors, setDoctors] = useState([])
    const [clinicProfile, setClinicProfile] = useState(null)
    const [highlights, setHighlights] = useState([])
    const [guideVideo, setGuideVideo] = useState(null)
    const [vlogs, setVlogs] = useState([])
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {

        const fetchProfileData = async () => {
            try {
                const response = await api.get('/profile-data-section/');
                setProfileData(response.data)
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };
        const fetchClinicProfile = async () => {
            try {
                const response = await api.get('/main-clinic-profile/');
                setClinicProfile(response.data)
            } catch (error) {
                console.error('Error fetching Main Clinic:', error);
            }
        };
        const fetchHighlightClinic = async () => {
            try {
                const response = await api.get('/clinic-highlight/');
                setHighlights(response.data.filter(item => item.is_featured));
            } catch (error) {
                console.error('Error fetching highlight Clinic:', error);
            }
        };
        const fetchBookingVideos = async () => {
            try {
                const response = await api.get('/booking-guide-video/');
                setGuideVideo(response.data)
            } catch (error) {
                console.error('Error fetching Guided Video:', error);
            }
        };
        const fetchTestimonials = async () => {
            try {
                const response = await api.get('/testimonial/');
                setTestimonials(response.data)
            } catch (error) {
                console.error('Error fetching Testimonials:', error);
            }
        };
        fetchProfileData()
        fetchClinicProfile()
        fetchHighlightClinic()
        fetchBookingVideos()
        fetchTestimonials()
    }, [])


    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // hide arrows for smoother loop
        infinite: true,
        autoplay: true,
        speed: 4000,            // controls speed of transition
        autoplaySpeed: 0,       // delay between slides (0 = continuous)
        cssEase: 'linear',      // linear = constant speed
        responsive: [
            { breakpoint: 1100, settings: { slidesToShow: 2 } },
            { breakpoint: 777, settings: { slidesToShow: 2 } },
            { breakpoint: 575, settings: { slidesToShow: 1 } },
        ],
    };


    return (
        <>

        <SliderBullets profileData={profileData}/>


            <section className="ttm-row connect-section_1 bg-img8 clearfix">
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
                                <div className="featured-content d-flex" style={{ fontSize: "30px" }}>
                                    <div className="featured-title">
                                        <h3>Email: {ContactInfo.contact_email}</h3>
                                    </div>
                                    <div className="featured-title">
                                        <h3>Call us On: {ContactInfo.contact_phone}</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Address: {ContactInfo.address}</p>
                                    </div>
                                </div>
                                <Link
                                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-dark"
                                    to="#"
                                    title=""
                                    tabIndex={0}
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


            <section className="ttm-row zero-padding-section bg-layer-equal-height res-991-pb-45 ttm-bgcolor-white clearfix" style={{ marginTop: "300px" }}>
                <div className="container">
                    {/* row */}
                    <div className="row">
                        {clinicProfile
                            ?
                            <>
                                < div className="col-lg-5 col-md-12">
                                    <div className="ttm-bg ttm-col-bgcolor-yes spacing-5 z-index-0">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                                        <div className="layer-content">
                                            {/*ttm_single_image-wrapper*/}
                                            <div className="ttm_single_image-wrapper txt-md-left">
                                                <img
                                                    className="img-fluid"
                                                    src={clinicProfile ? `${server_ip}${clinicProfile.doctor_image}` : "images/team-member/team-img06.jpg"}
                                                    title="single-img-two"
                                                    alt="single-img-five"
                                                />
                                                <div className="featured-content" style={{ marginTop: "40px" }}>
                                                    <div className="featured-title">
                                                        <h3>{clinicProfile?.doctor_name}</h3>
                                                    </div>

                                                </div>
                                            </div>
                                            {/*ttm_single_image-wrapper end*/}
                                            {/*featured-icon-box*/}
                                            <div className="featured-icon-box style9 text-center icon-align-top-content ttm-bgcolor-skincolor">
                                                <div className="featured-icon-box-inner-1">
                                                    <div className="featured-icon-box-inner-2">
                                                        <div className="featured-icon">
                                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-lg">
                                                                <i className="flaticon flaticon-psychology-3" />
                                                            </div>
                                                        </div>
                                                        <div className="featured-content">
                                                            <div className="featured-title">
                                                                <h5>{clinicProfile?.experience_years} Years</h5>
                                                            </div>
                                                            <div className="featured-desc">
                                                                <p>Experience Of Psychology</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* featured-icon-box end*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12">
                                    <div className="ttm-bg ttm-col-bgcolor-yes ttm-right-span ttm-bgcolor-white z-index-2 spacing-6">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                                            <div className="ttm-col-wrapper-bg-layer-inner" />
                                        </div>
                                        <div className="layer-content">
                                            {/*section title*/}
                                            <div className="section-title">
                                                <div className="title-header">
                                                    <h5>{clinicProfile?.welcome_heading}</h5>
                                                    <h2 className="title">
                                                        Modern caring mental health and <strong>{clinicProfile?.highlighted_text}</strong> sciences ({clinicProfile?.clinic_name})
                                                    </h2>
                                                </div>
                                                <div className="title-desc">
                                                    <p>
                                                        <b>
                                                            Welcome to <span style={{ color: "#e91e63" }}>{clinicProfile?.clinic_name}</span> —
                                                            {clinicProfile.description1}
                                                        </b>
                                                    </p>
                                                    <p>
                                                        {clinicProfile.description2}
                                                    </p>
                                                    <p>
                                                        {clinicProfile.description3}
                                                    </p>
                                                </div>
                                            </div>
                                            {/*section title end*/}
                                            <div className="ttm-horizontal_sep mt-25 mb-20" />
                                            <div className="row ttm-vertical_sep">

                                            </div>
                                            <div className="ttm-horizontal_sep mt-10 mb-10" />
                                            <div className="d-sm-flex align-items-center m-5">

                                                {/*featured-icon-box*/}

                                                {/*featured-icon-box end*/}
                                            </div>
                                        </div>
                                    </div>
                                </div></> :
                            <div className="text-center  text-danger my-5">
                                <strong>
                                    <p>No Main Clinic Profile Available</p>
                                </strong>
                            </div>
                        }

                    </div>
                    {/* row end */}
                </div>
            </section >


            <section className="py-5 bg-light" style={{ marginBottom: "100px" }}>
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-8 col-md-10">
                            <div className="section-title title-style-center_text">
                                <h5 className="text-uppercase text-primary fw-semibold animate__animated animate__fadeInDown">
                                    Our Excellence
                                </h5>
                                <div className="d-flex justify-content-between align-items-center mt-5">
                                    <h2 className="fw-bold display-5 animate__animated animate__fadeInUp mb-0">
                                        Some of Our Clinics
                                    </h2>
                                    <Link to="/clinics">
                                        <button className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor">
                                            View All
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        {highlights.length > 0 ?
                            highlights.map((object) => (
                                <ClinicComp object={object} />
                            ))
                            : <div className="text-center  text-danger my-5">
                                <strong>
                                    <p>No  Clinic's Profile Available</p>
                                </strong>
                            </div>
                        }
                    </div>
                </div>
            </section >


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
                                    {guideVideo ?
                                        <div
                                            className="ttm-video-wrapper bg-transparent position-relative"
                                            style={{
                                                backgroundColor: 'transparent',
                                                zIndex: 2,
                                                maxWidth: '100%',
                                                borderRadius: '10px',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <video
                                                controls
                                                autoPlay
                                                muted
                                                loop
                                                width="100%"
                                                style={{ borderRadius: '10px' }}
                                                preload="auto"
                                            >
                                                <source
                                                    src={guideVideo.video ? `${server_ip}${guideVideo.video}` : "/videos/appointment-guide.mp4"}
                                                    type="video/mp4"
                                                />
                                                Your browser does not support the video tag.
                                            </video>

                                        </div>
                                        :
                                        <div className="text-center  text-danger my-5">
                                            <strong>
                                                <p>No Video Available</p>
                                            </strong>
                                        </div>
                                    }

                                </div>
                                {/* section title */}

                                {/* section title end */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <TestimonialSection testimonials={testimonials} />


            <section className="ttm-row about-section bg-layer-equal-height clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-white">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                                <div className="layer-content">
                                    {/*section title*/}
                                    <div className="section-title">
                                        <div className="title-header">
                                            <h5>Steps towards mental fitness.</h5>
                                            <h2 className="title">
                                                Making Nation-Wide mental health service easily accessible
                                            </h2>
                                        </div>

                                    </div>
                                    {/*section title end*/}
                                    <div className="row pl-15 pt-10">
                                        {/*featured-icon-box*/}
                                        <div className="featured-icon-box icon-align-before-title style13">
                                            <div className="featured-icon">
                                                <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xs">
                                                    <i className="fa fa-phone" />
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h5>Contact Us</h5>
                                            </div>
                                        </div>
                                        {/*featured-icon-box end*/}
                                        {/*featured-icon-box*/}
                                        <div className="featured-icon-box icon-align-before-title style13">
                                            <div className="featured-icon">
                                                <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xs">
                                                    <i className="fa fa-hospital-o" />
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h5>Book an Appointment</h5>
                                            </div>
                                        </div>
                                        {/*featured-icon-box end*/}
                                        {/*featured-icon-box*/}
                                        <div className="featured-icon-box icon-align-before-title style13">
                                            <div className="featured-icon">
                                                <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xs">
                                                    <i className="fa fa-stethoscope" />
                                                </div>
                                            </div>
                                            <div className="featured-title">
                                                <h5>Effective Mental Health Treatment</h5>
                                            </div>

                                        </div>
                                        {/*featured-icon-box end*/}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ttm-bg ttm-col-bgcolor-yes z-index-2">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                                <div className="layer-content">
                                    {/*ttm_single_image-wrapper*/}
                                    <div className="ttm_single_image-wrapper res-991-pt-40">
                                        <img
                                            className="img-fluid"
                                            src={profileData ? `${server_ip}${profileData.image2}` : "images/team-member/team-img03.jpg"}
                                            title="single-img-ten"
                                            alt="single-img-ten"
                                        />
                                    </div>
                                    {/*ttm_single_image-wrapper end*/}
                                    <div className="featured-icon-box icon-align-before-content style11">
                                        <div className="featured-icon">
                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-md">
                                                <i className="flaticon flaticon-mental-health" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row end */}
                </div>
            </section>

        </>
    )
}

export default Home
