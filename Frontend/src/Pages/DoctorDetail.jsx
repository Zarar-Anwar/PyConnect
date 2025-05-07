import React from "react";
import {Link, useLocation} from "react-router-dom";
import {server_ip} from "../Utils/Data";
import {Helmet} from "react-helmet";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function getMediaUrl(url) {
    if (typeof url === "string" && (url.startsWith("http://") || url.startsWith("https://"))) {
        return url;
    }
    return server_ip + url;
}

function DoctorDetail() {
    const location = useLocation();
    const item = location.state?.item;

    return (
        <>
            <Helmet><title>Doctors Details</title></Helmet>

            <div className="ttm-page-title-row">
                <div className="ttm-page-title-row-inner ttm-bgcolor-darkgrey">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="page-title-heading">
                                    <h2 className="title">{item?.name}</h2>
                                </div>
                                <div className="breadcrumb-wrapper">
                                    <span><Link title="Homepage" to="/">Home</Link></span>
                                    <span className="ttm-bread-sep"><i className="fa fa-long-arrow-right"/></span>
                                    <span>{item?.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-main">
                <section className="ttm-row team-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ttm-team-member-single-content">
                                    <div className="ttm-team-member-single-content-area">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-6">
                                                <div className="ttm-featured-wrapper pr-20">
                                                    <div className="featured-thumbnail">
                                                        <img
                                                            className="img-fluid"
                                                            src={getMediaUrl(item?.image || "images/team-member/team-img01.jpg")}
                                                            alt="Doctor"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-7 col-md-6">
                                                <div className="ttm-team-member-content pt-15 res-767-pt-40">
                                                    <div className="ttm-team-member-single-list">
                                                        <h2 className="ttm-team-member-single-title">{item?.name}</h2>
                                                        <span
                                                            className="ttm-team-member-single-position">{item?.position}</span>
                                                        <div className="ttm-horizontal_sep width-100 mt-20 mb-20"/>
                                                    </div>

                                                    <div className="ttm-bgcolor-grey spacing-12">
                                                        <div className="wpb_wrapper">
                                                            <h5>Specialization</h5>
                                                            <p>{item?.specialization}</p>
                                                        </div>
                                                        <div className="wpb_wrapper">
                                                            <h5>Fees</h5>
                                                            <p>
                                                                For initial Appointment <br/>
                                                                <strong>
                                                                    Rs {item?.fee?.amount} for {item?.fee?.duration} min
                                                                </strong>
                                                            </p>
                                                        </div>
                                                        <div className="wpb_wrapper">
                                                            <h5>For Appointment Contact</h5>
                                                            <p><strong>{item?.contact_number}</strong></p>
                                                        </div>
                                                    </div>

                                                    {/* License Slider */}
                                                    {item?.licenses?.length > 0 && (
                                                        <div className="pt-20">
                                                            <h2 className="ttm-team-member-single-title">Licenses:</h2>
                                                            <Swiper
                                                                modules={[Navigation]}
                                                                spaceBetween={10}
                                                                slidesPerView={3}
                                                                navigation
                                                                breakpoints={{
                                                                    320: {slidesPerView: 1},
                                                                    640: {slidesPerView: 2},
                                                                    1024: {slidesPerView: 3}
                                                                }}
                                                            >
                                                                {item.licenses.map((license, idx) => (
                                                                    <SwiperSlide key={idx}>
                                                                        <img
                                                                            src={getMediaUrl(license?.image)}
                                                                            alt="License"
                                                                            style={{
                                                                                width: "100%",
                                                                                height: "200px",
                                                                                objectFit: "contain",
                                                                                borderRadius: "8px"
                                                                            }}
                                                                        />
                                                                    </SwiperSlide>
                                                                ))}
                                                            </Swiper>
                                                        </div>
                                                    )}

                                                    {/* Video Slider */}
                                                    {item?.videos?.length > 0 && (
                                                        <div className="pt-20">
                                                            <h2 className="ttm-team-member-single-title">Videos:</h2>
                                                            <Swiper
                                                                modules={[Navigation]}
                                                                spaceBetween={10}
                                                                slidesPerView={2}
                                                                navigation
                                                                breakpoints={{
                                                                    320: {slidesPerView: 1},
                                                                    768: {slidesPerView: 2}
                                                                }}
                                                            >
                                                                {item.videos.map((video, idx) => (
                                                                    <SwiperSlide key={idx}>
                                                                        <div style={{
                                                                            position: 'relative',
                                                                            paddingTop: '56.25%', // 16:9 aspect ratio
                                                                            width: '100%',
                                                                            backgroundColor: '#000',
                                                                            borderRadius: '8px',
                                                                            overflow: 'hidden'
                                                                        }}>
                                                                            <video
                                                                                controls
                                                                                style={{
                                                                                    position: 'absolute',
                                                                                    top: 0,
                                                                                    left: 0,
                                                                                    width: '100%',
                                                                                    height: '100%',
                                                                                    objectFit: 'cover'
                                                                                }}
                                                                            >
                                                                                <source src={getMediaUrl(video?.video)}
                                                                                        type="video/mp4"/>
                                                                                Your browser does not support the video
                                                                                tag.
                                                                            </video>
                                                                        </div>
                                                                    </SwiperSlide>
                                                                ))}
                                                            </Swiper>


                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default DoctorDetail;
