import React, { useContext } from "react";
import { Store } from "../../Utils/Store";
import { Link } from "react-router-dom";
import { server_ip } from "../../Utils/Data";

const Footer = () => {
  const { state } = useContext(Store);
  const { ContactInfo } = state;
  const handle = () => {
    window.location.reload()
  };

  return (
    <>
      <footer className="footer widget-footer ttm-textcolor-white clearfix">
        <div className="second-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                <div className="widget widget_text  clearfix">
                  <h3 className="widget-title">About Us</h3>
                  <p>
                    We are on the mission to promote the advancement,
                    communication of psychological science &amp; knowledge to
                    benefit society.
                  </p>
                  <ul className="widget_contact_wrapper mt-20">
                    <li>Phone: {ContactInfo.contact_phone}</li>
                    <li>
                      Mail Id{" "}
                      <Link to="mailto:info@example.com">
                        : {ContactInfo.contact_email}{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                <div className="widget widget_nav_menu clearfix">
                  <h3 className="widget-title">Useful Links</h3>
                  <ul id="menu-footer-quick-links">
                    <li>
                      <Link to="/clinics">Clinics </Link>
                    </li>
                    <li>
                      <Link to="/videos">Videos </Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us </Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us </Link>
                    </li>
                    <li onClick={handle}>
                      <Link to={`https://flash-tele-psychiatry.pk/admin/`}>Root Admin </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                <div className="widget widget_timing clearfix">
                  <h3 className="widget-title">Our Time Schedule</h3>
                  <ul className="ttm-pricelist-block">
                    <li>
                      Mon to Wed
                      <span className="service-price">10:00 am to 2:30 pm</span>
                    </li>
                    <li>
                      Thu to Fri
                      <span className="service-price">11:00 am to 4:30 pm</span>
                    </li>
                    <li>
                      Saturday
                      <span className="service-price">10:00 am to 1:00 pm</span>
                    </li>
                    <li>
                      Sunday<span className="service-price">Closed</span>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
