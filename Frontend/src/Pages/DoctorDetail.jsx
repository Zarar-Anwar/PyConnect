import React from "react";
import { useLocation } from "react-router-dom";
import { server_ip } from "../Utils/Data";

function DoctorDetail() {
  const location = useLocation();
  const item = location.state?.item;
  return (
    <>
      <div className="ttm-page-title-row">
        <div className="ttm-page-title-row-inner ttm-bgcolor-darkgrey">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="page-title-heading">
                  <h2 className="title"> {item.name}</h2>
                </div>
                <div className="breadcrumb-wrapper">
                  <span>
                    <a title="Homepage" href="index.html">
                      Home
                    </a>
                  </span>
                  <span className="ttm-bread-sep">
                    <i className="fa fa-long-arrow-right" />
                  </span>
                  <span> {item.name}</span>
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
                        {/* ttm-featured-wrapper */}
                        <div className="ttm-featured-wrapper pr-20">
                          <div className="featured-thumbnail">
                            <img
                              className="img-fluid"
                              src={server_ip+item.image || "images/team-member/team-img01.jpg"}
                              alt="image"
                            />
                          </div>
                        </div>
                        {/* ttm-featured-wrapper end*/}
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="ttm-team-member-content pt-15 res-767-pt-40">
                          <div className="ttm-team-member-single-list">
                            <h2 className="ttm-team-member-single-title">
                              {item.name}
                            </h2>
                            <span className="ttm-team-member-single-position">
                              {item.position}
                            </span>
                            <div className="ttm-horizontal_sep width-100 mt-20 mb-20" />
                          </div>

                          <div className="ttm-bgcolor-grey spacing-12">
                            {/* <h2 className="ttm-team-member-single-title">
                                                            Education And Qualifications:
                                                        </h2> */}
                            <div className="wpb_wrapper">
                              <h5>Specialization</h5>
                              <p> {item.specialization}</p>
                            </div>
                            <div className="wpb_wrapper">
                              <h5>Fees</h5>
                              <p>
                                For initial Appointment <br />
                                <strong>
                                  Rs {item.fee.amount} for {item.fee.duration}{" "}
                                  min
                                </strong>
                              </p>
                            </div>
                            <div className="wpb_wrapper">
                              <h5>For Appointment Contact</h5>
                              <p>
                                <strong>{item.contact_number}</strong>
                              </p>
                            </div>
                          </div>

                          {item.license ? (
                            <div className="pt-20">
                              <h2 className="ttm-team-member-single-title">
                                License:
                              </h2>
                              <div className="row row ttm-boxes-spacing-0px justify-content-center">
                            {item.license.map((ob)=>(
                                <div className="col-sm-3 ttm-box-col-wrapper">
                                  <img
                                    className="img-fluid"
                                    src={server_ip+ob?.image || "images/award-one.png"}
                                    alt="image"
                                    />
                                </div>
                                ))}
                            
                              </div>
                            </div>
                          ) : null}
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
