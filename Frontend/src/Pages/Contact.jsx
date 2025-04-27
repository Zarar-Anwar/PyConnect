import { useContext, useState } from "react";
import { Store } from "../Utils/Store";
import api from "../Utils/Axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Contact = ({ title }) => {
    const { state } = useContext(Store);
    const { ContactInfo } = state;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/contact/", formData)
            toast.success("Message Submitted SuccessFully")
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <>
                <Helmet><title>Contact Us</title></Helmet>

            <div className="ttm-page-title-row">
                <div className="ttm-page-title-row-inner ttm-bgcolor-darkgrey">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="page-title-heading">
                                    <h2 className="title"> Contact Us</h2>
                                    <h5 className="sub-title">
                                        {" "}
                                        Smile Pure always places patients at the center of our attention
                                    </h5>
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
                                    <span> Contact Us 1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-main m-5">
                <section className="ttm-row pt-85 res-991-pt-45 pb-45 res-991-pb-0 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title style1">
                                    <div className="title-header">
                                        <h5>STEPS TOWARDS MENTAL FITNESS</h5>
                                        <h2 className="title">
                                            Get details about <strong>Psychology</strong>
                                        </h2>
                                    </div>
                                    <div className="title-desc">
                                        <p>
                                            Smile Pure always places patients at the center of our
                                            attention, and concentrate on imprd of technologies skill.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ttm-vertical_sep pt-35 pb-30 res-991-pb-20">
                            <div className="col-lg-4">
                                <div className="featured-icon-box icon-align-before-content">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg ttm-icon_element-style-rounded">
                                            <i className="flaticon flaticon-placeholder" />
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5>Office Location</h5>
                                        </div>
                                        <div className="featured-desc">
                                            {ContactInfo.address}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="featured-icon-box icon-align-before-content">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg ttm-icon_element-style-rounded">
                                            <i className="flaticon flaticon-telephone" />
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5>Contact Details</h5>
                                        </div>
                                        <div className="featured-desc">
                                            Call Us: {ContactInfo.contact_phone}
                                            <br />
                                            Mail us: {ContactInfo.contact_email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="featured-icon-box icon-align-before-content">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg ttm-icon_element-style-rounded">
                                            <i className="flaticon flaticon-24-hours" />
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h5>Opening Hours</h5>
                                        </div>
                                        <div className="featured-desc">
                                            Monday – Saturday
                                            <br />
                                            10:30 AM – 7:00 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ttm-row p-0 res-991-p-0 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7"></div>
                            <div className="col-lg-5">
                                <div className="ttm-col-bgcolor-yes ttm-bg ttm-bgcolor-white z-index-2 spacing-15 box-shadow_2">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                                        <div className="ttm-col-wrapper-bg-layer-inner" />
                                    </div>
                                    <div className="layer-content text-center">
                                        <div className="mb-40 res-991-mb-0">
                                            <h4>
                                                Fill out for{" "}
                                                <strong className="ttm-textcolor-skincolor">Contact</strong>
                                            </h4>
                                            <p className="text-center">
                                                Fill-in the contact form and get immediate assistance from our
                                                medical consultance.
                                            </p>
                                        </div>
                                        <form
                                            className="contact_form_1 wrap-form clearfix"
                                            method="post"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>
                                                        <span className="text-input">
                                                            <input
                                                                name="name"
                                                                type="text"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                placeholder="Your Name :"
                                                                required
                                                            />
                                                        </span>
                                                    </label>
                                                    <label>
                                                        <span className="text-input">
                                                            <input
                                                                name="email"
                                                                type="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                placeholder="Your E-mail :"
                                                                required
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>
                                                        <span className="text-input">
                                                            <input
                                                                name="subject"
                                                                type="text"
                                                                value={formData.subject}
                                                                onChange={handleChange}
                                                                placeholder="Your Subject :"
                                                                required
                                                            />
                                                        </span>
                                                    </label>
                                                    <label>
                                                        <span className="text-input">
                                                            <textarea
                                                                name="message"
                                                                rows={3}
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                placeholder="Your Messages :"
                                                                required
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100 mt_5"
                                                type="submit"
                                            >
                                                Post A Comments!
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="google_map" className="google_map">
                        <div className="map_container">
                            <div id="map" className="map_1">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d360.8793352645693!2d-79.38831242419016!3d43.64744676039797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34e29eb5e4b1%3A0x1cd7f05cedb8a2cc!2sKing%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1602742929869!5m2!1sen!2sin" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
