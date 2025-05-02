import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import { server_ip } from "../../Utils/Data";

const TestimonialSection = ({ testimonials }) => {
    const settings = {
        slidesToShow: 3, // Show 3 images on the screen at once
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [
            { breakpoint: 1199, settings: { slidesToShow: 2 } }, // Show 2 images on smaller screens
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 620, settings: { slidesToShow: 1 } }, // Show 1 image on very small screens
        ],
    };

    return (
        <>
            <Helmet>
                <style>{`
                    .testimonial-img {
                        position: relative;
                        width: 100%;
                        height: 250px; /* Fixed height for a smaller section */
                        overflow: hidden;
                    }

                    .testimonial-img img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: contain; /* Ensures the whole image is visible without cropping */
                        border-radius: 0;
                        box-shadow: none;
                        display: block;
                        margin: 0 auto;
                    }

                    .testimonials.style2 {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 30px 10px;
                        text-align: center;
                    }

                    .section-title .title {
                        font-size: 2rem;
                        margin-bottom: 10px;
                    }

                    @media (max-width: 620px) {
                        .testimonial-img {
                            height: 200px; /* Adjust for smaller screens */
                        }
                    }
                `}</style>
            </Helmet>

            <section
                className="ttm-row testimonial-section_1 bg-img5 clearfix"
                style={{ marginBottom: "80px" }}
            >
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-12 col-md-12">
                            <div className="ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-white z-index-2 box-shadow spacing-9">
                                <div className="layer-content">
                                    <div className="section-title">
                                        <div className="title-header">
                                            <h5>Testimonials</h5>
                                            <h2 className="title">
                                                What our patients <strong>Say!</strong>
                                            </h2>
                                        </div>
                                    </div>

                                    {testimonials?.length > 0 ? (
                                        <Slider {...settings}>
                                            {testimonials.map((item) => (
                                                <div className="p-2" key={item.id || item.image}>
                                                    <div className="style2">
                                                        <div className="testimonial-img">
                                                            <img
                                                                src={`${server_ip}${item.image}`}
                                                                alt="testimonial"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    ) : (
                                        <div className="text-center text-danger my-5">
                                            <strong>
                                                <p>No Patient Reviews Available</p>
                                            </strong>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialSection;
