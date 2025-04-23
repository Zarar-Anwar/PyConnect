import React, { useContext } from 'react';
import { Store } from '../../Utils/Store';
import { Link, useLocation } from 'react-router-dom';
import { server_ip } from '../../Utils/Data';

const Header = ({ appData }) => {
    const { state } = useContext(Store);
    const location = useLocation();

    const phone = appData?.contact_phone || '+0000000000';
    const logo = appData?.logo || 'images/logo.jpg';

    const socialLinks = {
        facebook: appData?.facebook || '#',
        twitter: appData?.twitter || '#',
        linkedin: appData?.linkedin || '#',
        instagram: appData?.instagram || '#',
        youtube: appData?.youtube || '#',
    };

    return (
        <header id="masthead" className="header ttm-header-style-01">
            <div className="ttm-header-box-inner">
                {/* Top Bar */}
                <div className="top_bar clearfix">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-table w-100">
                                    <div className="top_bar_contact_item float-right">
                                        <div className="top_bar_icon">
                                            <i className="fa fa-phone" />
                                        </div>
                                        Call Us: {phone}
                                    </div>
                                    <div className="top_bar_contact_item top_bar_social">
                                        <ul className="social-icons sub-menu">
                                            <li>
                                                <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                                                    <i className="fa fa-facebook mx-3" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                                                    <i className="fa fa-twitter mx-3" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                                                    <i className="fa fa-instagram mx-3" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                                                    <i className="fa fa-linkedin mx-3" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={socialLinks.youtube} target="_blank" rel="noreferrer">
                                                    <i className="fa fa-youtube mx-3" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Site Navigation */}
                <div id="site-header-menu" className="site-header-menu ttm-bgcolor-darkgrey">
                    <div className="site-header-menu-inner ttm-stickable-header">
                        <div className="container-fluid">
                            <div className="site-navigation d-flex flex-row align-items-center">
                                {/* Logo */}
                                <div className="site-branding">
                                    <Link className="home-link" to="/" title="logo" rel="home">
                                        <img
                                            id="logo-img"
                                            className="img-center"
                                            src={`${server_ip}${logo}`}
                                            alt="logo-img"
                                            style={{ maxHeight: '60px' }}
                                        />
                                    </Link>
                                </div>

                                {/* Mobile Menu Button */}
                                <div className="btn-show-menu-mobile menubar menubar--squeeze">
                                    <span className="menubar-box">
                                        <span className="menubar-inner" />
                                    </span>
                                </div>

                                {/* Main Menu */}
                                <nav className="main-menu menu-mobile m-auto" id="menu">
                                    <ul className="menu">
                                        <li className={`mega-menu-item ${location.pathname === '/' ? 'active' : ''}`}>
                                            <Link to="/" className="mega-menu-link">Home</Link>
                                        </li>
                                        
                                        <li className={`mega-menu-item ${location.pathname === '/videos' ? 'active' : ''}`}>
                                            <Link to="/videos" className="mega-menu-link">Videos</Link>
                                        </li>
                                        <li className={`mega-menu-item ${location.pathname === '/contact-us' ? 'active' : ''}`}>
                                            <Link to="/services" className="mega-menu-link">Treatments</Link>
                                        </li>
                                        <li className={`mega-menu-item ${location.pathname === '/about-us' ? 'active' : ''}`}>
                                            <Link to="/about-us" className="mega-menu-link">About</Link>
                                        </li>
                                        <li className={`mega-menu-item ${location.pathname === '/contact-us' ? 'active' : ''}`}>
                                            <Link to="/contact-us" className="mega-menu-link">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
