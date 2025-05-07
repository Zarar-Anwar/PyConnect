import React, {useContext, useState, useEffect} from 'react';
import {Store} from '../../Utils/Store';
import {Link, useLocation} from 'react-router-dom';
import {server_ip} from '../../Utils/Data';

const Header = ({appData}) => {
    const {state} = useContext(Store);
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => setMobileMenuOpen(prev => !prev);
    const closeMenu = () => setMobileMenuOpen(false);

    // Close menu when route changes
    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

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
        <>
            <div className="top-social-bar py-2 bg-white text-white d-flex justify-content-center gap-5 flex-wrap">
                <Link to={socialLinks.facebook} target="_blank" rel="noreferrer" className="text-dark fs-5">
                    <i className="fa fa-facebook"/>
                </Link>
                <Link to={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-dark fs-5">
                    <i className="fa fa-twitter"/>
                </Link>
                <Link to={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-dark fs-5">
                    <i className="fa fa-instagram"/>
                </Link>
                <Link to={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-dark fs-5">
                    <i className="fa fa-linkedin"/>
                </Link>
                <Link to={socialLinks.youtube} target="_blank" rel="noreferrer" className="text-dark fs-5">
                    <i className="fa fa-youtube"/>
                </Link>
            </div>


            <header id="masthead" className="header ttm-header-style-01">
                <div className="ttm-header-box-inner">

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
                                                style={{maxHeight: '60px'}}
                                            />
                                        </Link>
                                    </div>

                                    {/* Hamburger */}
                                    <div
                                        className="btn-show-menu-mobile menubar menubar--squeeze"
                                        onClick={toggleMenu}
                                    >
                                    <span className="menubar-box">
                                        <span className="menubar-inner"/>
                                    </span>
                                    </div>

                                    {/* Navigation Menu */}
                                    <nav
                                        className={`main-menu menu-mobile m-auto ${mobileMenuOpen ? 'show' : 'd-none d-lg-block'}`}
                                        id="menu">
                                        {/* Close button visible only on mobile menu */}
                                        <div className="d-lg-none text-right p-3">
                                            <button onClick={closeMenu} className="btn text-white"
                                                    style={{backgroundColor: "rgb(1, 182, 173)"}}>
                                                &#x2715;
                                            </button>
                                        </div>

                                        <ul className="menu" style={{zIndex: "9999"}}>
                                            <li className={`mega-menu-item ${location.pathname === '/' ? 'active' : ''}`}>
                                                <Link to="/" className="mega-menu-link">Home</Link>
                                            </li>
                                            <li className={`mega-menu-item ${location.pathname === '/videos' ? 'active' : ''}`}>
                                                <Link to="/videos" className="mega-menu-link">Videos</Link>
                                            </li>
                                            <li className={`mega-menu-item ${location.pathname === '/treatments' ? 'active' : ''}`}>
                                                <Link to="/treatments" className="mega-menu-link">Treatments</Link>
                                            </li>
                                            <li className={`mega-menu-item ${location.pathname === '/about-us' ? 'active' : ''}`}>
                                                <Link to="/about-us" className="mega-menu-link">About</Link>
                                            </li>
                                            <li className={`mega-menu-item ${location.pathname === '/contact-us' ? 'active' : ''}`}>
                                                <Link to="/contact-us" className="mega-menu-link">Contact</Link>
                                            </li>
                                            <li className={`mega-menu-item d-lg-none ${location.pathname === '/doctor-list-all' ? 'active' : ''}`}>
                                                <Link to="/doctor-list-all" className="mega-menu-link">All
                                                    Doctors</Link>
                                            </li>
                                        </ul>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    );
};

export default Header;
