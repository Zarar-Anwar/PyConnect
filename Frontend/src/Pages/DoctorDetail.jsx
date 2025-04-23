import React from 'react'

function DoctorDetail() {
    return (
        <>
            <div className="ttm-page-title-row">
                <div className="ttm-page-title-row-inner ttm-bgcolor-darkgrey">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="page-title-heading">
                                    <h2 className="title"> Dr. Grim Goltsman</h2>
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
                                    <span> Dr. Grim Goltsman</span>
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
                                                            src="images/team-member/team-img01.jpg"
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
                                                            Dr. Grim Goltsman
                                                        </h2>
                                                        <span className="ttm-team-member-single-position">
                                                            Psychiatrist
                                                        </span>
                                                        <div className="ttm-horizontal_sep width-100 mt-20 mb-20" />
                                                    
                                                    </div>
                                                  
                                                    <div className="ttm-bgcolor-grey spacing-12">
                                                        {/* <h2 className="ttm-team-member-single-title">
                                                            Education And Qualifications:
                                                        </h2> */}
                                                        <div className="wpb_wrapper">
                                                            <h5>Specialization</h5>
                                                            <p>
                                                                MBBS, Resident psychatric
                                                            </p>
                                                        </div>
                                                        <div className="wpb_wrapper">
                                                            <h5>Fees</h5>
                                                            <p>
                                                                For initial Appointment <br />
                                                                <strong>
                                                                Rs 1000 for 20 min
                                                                </strong>
                                                            </p>
                                                        </div>
                                                        <div className="wpb_wrapper">
                                                            <h5>For Appointment Contact</h5>
                                                            <p>
                                                                <strong>
                                                                03439614697
                                                                </strong>
                                                            </p>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="pt-20">
                                                        <h2 className="ttm-team-member-single-title">License:</h2>
                                                        <div className="row row ttm-boxes-spacing-0px justify-content-center">
                                                            <div className="col-sm-3 ttm-box-col-wrapper">
                                                                <img
                                                                    className="img-fluid"
                                                                    src="images/award-one.png"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                            <div className="col-sm-3 ttm-box-col-wrapper">
                                                                <img
                                                                    className="img-fluid"
                                                                    src="images/award-two.png"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                            <div className="col-sm-3 ttm-box-col-wrapper">
                                                                <img
                                                                    className="img-fluid"
                                                                    src="images/award-three.png"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
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
    )
}

export default DoctorDetail
