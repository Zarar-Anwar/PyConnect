import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import { server_ip } from "../../Utils/Data";

const TestimonialSection = ({ testimonials }) => {

  const settings = {
    outerHeight: 60,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: true,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 620, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <Helmet>
        <style>
          {`
      .testimonials.style2 {
        max-height: 320px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .testimonial-content blockquote {
        font-size: 16px;
        line-height: 1.6;
        max-height: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    `}
        </style>
      </Helmet>
      <section className="ttm-row testimonial-section_1 bg-img5 clearfix" style={{ marginBottom: "80px" }}>
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
                    <div className="title-desc">
                      <p>
                        Long established fact that reader will be distracted by the readable content of a page when looking at its layout. The point of using <b>lorem ipsum</b> is that it has a more-or-less normal distribution of letters.
                      </p>
                    </div>
                  </div>
                  {testimonials?.length > 0 ?
                    <Slider {...settings}>
                      {testimonials.map((item, idx) => (
                        <div key={idx} className="p-2">
                          <div className="testimonials style2">
                            <div className="testimonial-content">
                              <blockquote>{item.quote}</blockquote>

                            </div>
                            <div className="testimonial-avatar">
                              <div className="testimonial-img">
                                <img
                                  className="img-center"
                                  src={`${server_ip}${item.image}`}
                                  alt="testimonial"
                                />
                              </div>
                              <div className="testimonial-caption">
                                <h5>{item.name}</h5>
                                <label>{item.role}</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                    :
                    <div className="text-center  text-danger my-5">
                      <strong>
                        <p>No Patient Reviews Available</p>
                      </strong>
                    </div>
                  }
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
