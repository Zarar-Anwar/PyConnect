import { useEffect, useState } from "react";
import api from "../Utils/Axios";
import { Link } from "react-router-dom";

const About = ({ title }) => {
    const [team, setTeam] = useState([])

    useEffect(() => {
        const fetchTeamMember = async () => {
            try {
                const response = await api.get('/team-members/');
                setTeam(response.data)
            } catch (error) {
                console.error('Error fetching Team Member:', error);
            }
        };

        fetchTeamMember()
    }, [])

    return (
        <>
            <div className="ttm-page-title-row">
                <div className="ttm-page-title-row-inner ttm-bgcolor-darkgrey">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="page-title-heading">
                                    <h2 className="title">About Us</h2>
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
                                    <span>About Us 2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="site-main">
                {/*about-section_1*/}
                <section className="ttm-row about-section_1 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ttm-bg ttm-col-bgcolor-yes z-index-2">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                                    <div className="layer-content">
                                        {/*ttm_single_image-wrapper*/}
                                        <div className="ttm_single_image-wrapper">
                                            <img
                                                className="img-fluid"
                                                src="images/single-img-12.jpg"
                                                title="single-img"
                                                alt="single-img"
                                            />
                                        </div>
                                        {/*ttm_single_image-wrapper end*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-white res-991-pt-25">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                                    <div className="layer-content">
                                        {/*section title*/}
                                        <div className="section-title">
                                            <div className="title-header">
                                                <h5>Steps towards mental fitness</h5>
                                                <h2 className="title">
                                                    Here, we detox body and relax your <strong>Mind</strong>
                                                </h2>
                                            </div>
                                            <div className="title-desc">
                                                <p>
                                                    We are on the mission to promote the advancement,
                                                    communication, and application of psychological science and
                                                    knowledge to benefit society and improve lives.{" "}
                                                    <b>Make the world from hustle free.</b>
                                                </p>
                                            </div>
                                        </div>
                                        {/*section title end*/}
                                        <div className="ttm-horizontal_sep mt-30 mb-35" />
                                        <div className="row">
                                            <div className="col-lg-4 col-md-3 col-sm-12">
                                                {/*ttm_single_image-wrapper*/}
                                                <div className="ttm_single_image-wrapper text-sm-left">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/single-img-13.jpg"
                                                        title="single-img"
                                                        alt="single-img"
                                                    />
                                                </div>
                                                {/*ttm_single_image-wrapper end*/}
                                            </div>
                                            <div className="col-lg-8 col-md-9 col-sm-12">
                                                <h5 className="pt-10 res-767-pt-20">
                                                    Our Psychology Medical Services <br />
                                                    Hospital Founded In
                                                    <strong className="ttm-textcolor-skincolor"> 1996</strong>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="ttm-horizontal_sep mt-35 res-991-mt-20 mb-35 res-991-mb-30" />
                                        <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                            <li>
                                                <i className="ti ti-check" />
                                                <div className="ttm-list-li-content">
                                                    Preparing the discipline and profession of psychology for
                                                    the future
                                                </div>
                                            </li>
                                            <li>
                                                <i className="ti ti-check" />
                                                <div className="ttm-list-li-content">
                                                    Elevating the public’s understanding of and use of the
                                                    psychology.
                                                </div>
                                            </li>
                                            <li>
                                                <i className="ti ti-check" />
                                                <div className="ttm-list-li-content">
                                                    We help to people recover. Regain Strength. Return To Being
                                                    You
                                                </div>
                                            </li>
                                        </ul>
                                        <a
                                            className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-darkgrey mt-10"
                                            href="about1.html"
                                        >
                                            More About Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </section>
                {/*about-section_1 end*/}
                <section className="ttm-row team-member-section_1 clearfix">
                    <div className="container">
                        {/*row*/}
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
                                {/*section-title*/}
                                <div className="section-title title-style-center_text">
                                    <div className="title-header">
                                        <h5>Team Member!</h5>
                                        <h2 className="title">
                                            Our Dedicated Team Members
                                        </h2>
                                    </div>
                                </div>
                                {/*section-title end*/}
                            </div>
                        </div>
                        {/*row end*/}
                        {/* row */}
                        <div className="row">
                            {team?.length > 0 ?
                                team.map((object) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        {/*featured-imagebox-team*/}
                                        <div className="featured-imagebox featured-imagebox-team style1">
                                            <div className="ttm-box-view-overlay">
                                                <Link to="#" className="media-btn" tabIndex={0}>
                                                    <i className="ti ti-plus" />
                                                </Link>
                                                {/*featured-thumbnail*/}
                                                <div className="featured-thumbnail">
                                                    <img
                                                        className="img-fluid"
                                                        src={object.image || "images/team-member/team-img01.jpg"}
                                                        alt="image"
                                                    />
                                                </div>
                                                {/*featured-thumbnail end*/}
                                            </div>
                                            <div className="featured-content box-shadow">
                                                <div className="featured-title">
                                                    <h5>
                                                        <Link to="#">{object.name}</Link>
                                                    </h5>
                                                </div>
                                                <p className="category">{object.role}</p>
                                              
                                            </div>
                                        </div>
                                        {/*featured-imagebox-team end*/}
                                    </div>
                                ))
                                : <div className="text-center  text-danger my-5">
                                    <strong>
                                        <p>No Team Available</p>
                                    </strong>
                                </div>

                            }


                        </div>
                        {/*row end*/}
                    </div>
                </section>


                {/* process-section end */}
                <section className="ttm-row process-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* section title */}
                                <div className="section-title text-center clearfix">
                                    <div className="title-header">
                                        <h5>Steps towards mental fitness</h5>
                                        <h2 className="title">
                                            How it helps you to stay <strong>Strong.</strong>
                                        </h2>
                                    </div>
                                </div>
                                {/* section title end */}
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ttm-processbox-wrapper">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="ttm-processbox text-center">
                                                <div className="ttm-box-image">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/step-one.png"
                                                        alt="step-one"
                                                        title="step-one"
                                                    />
                                                    <div className="process-num">
                                                        <span className="number">01</span>
                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h5>Applications.</h5>
                                                    </div>
                                                    <div className="ttm-box-description">
                                                        You can apply for the treatment via our several platforms
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="ttm-processbox text-center">
                                                <div className="ttm-box-image">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/step-two.png"
                                                        alt="step-two"
                                                        title="step-two"
                                                    />
                                                    <div className="process-num">
                                                        <span className="number">02</span>
                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h5>Check-ups</h5>
                                                    </div>
                                                    <div className="ttm-box-description">
                                                        Medical professionals will check you up for general
                                                        checkups
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="ttm-processbox text-center">
                                                <div className="ttm-box-image">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/step-three.png"
                                                        alt="step-three"
                                                        title="step-three"
                                                    />
                                                    <div className="process-num">
                                                        <span className="number">03</span>
                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h5>Consultation</h5>
                                                    </div>
                                                    <div className="ttm-box-description">
                                                        Our team will arrange consultation regarding the problem
                                                        you use
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="ttm-processbox text-center">
                                                <div className="ttm-box-image">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/step-four.png"
                                                        alt="step-four"
                                                        title="step-four"
                                                    />
                                                    <div className="process-num">
                                                        <span className="number">04</span>
                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h5>Scheming</h5>
                                                    </div>
                                                    <div className="ttm-box-description">
                                                        Finally treatments begin forward to the healthy inside -
                                                        out you.
                                                    </div>
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
                {/* process-section end */}

            </div>




        </>
    )
}

export default About
