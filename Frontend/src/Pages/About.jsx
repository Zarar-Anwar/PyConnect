import { useEffect, useState } from "react";
import api from "../Utils/Axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
        <Helmet><title>About Us</title></Helmet>
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
                                        <Link title="Homepage" to="/">
                                            Home
                                        </Link>
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
                                                className=""
                                                height="400px"
                                                width="90%"
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
               
                {/* process-section end */}

            </div>




        </>
    )
}

export default About
