import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Services({ title }) {
  return (
    <>
            <Helmet><title>Treatments</title></Helmet>

      <div className="ttm-page-title-row">
        <div className="ttm-page-title-row-inner ttm-bgcolor-darkgrey">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="page-title-heading">
                  <h2 className="title"> Our Treatments</h2>
                  <h5 className="sub-title">
                    {" "}
                    An impact of mental fitness awareness community health.
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
                  <span>Treatments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-main">
        {/*portfolio-section_3*/}
        <section className="ttm-row portfolio-section_3 clearfix">
          <div className="container">
            {/*row*/}
            <div className="row">
              <div className="col-lg-12 col-md-12">
                {/*section-title*/}
                <div className="section-title style1">
                  <div className="title-header">
                    <h5>TYPES OF TREATMENTS AT ZENISTA</h5>
                    <h2 className="title">
                      Our psychology <strong>Treatments</strong>
                    </h2>
                  </div>
                  <div className="title-desc">
                    <p>
                      Smile Pure always places patients at the center of our
                      attention, and concentrate on imprd of technologies to{" "}
                      <u>
                        <Link to="/contact-us">Contact Us Now</Link>
                      </u>
                    </p>
                  </div>
                </div>
                {/*section-title end*/}
              </div>
            </div>
            {/*row end*/}
            {/* row */}
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*featured-icon-box*/}
                <div className="featured-icon-box icon-align-top-content style2">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                      <i className="flaticon flaticon-hypnosis" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>
                        <Link to="/treatments">Personality Disorders</Link>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        A personality disorder involves a lasting pattern of emotional
                        unstable behavior that causes problems.
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-shape-round ttm-icon-btn-right ttm-btn-color-dark"
                      to="/treatments"
                    >
                      READ MORE
                      <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="ttm-boxbg-icon">
                    <div className="ttm-service-iconbox">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                        <i className="flaticon flaticon-hypnosis" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* featured-icon-box end*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*featured-icon-box*/}
                <div className="featured-icon-box icon-align-top-content style2">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                      <i className="flaticon flaticon-psychology-2" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>
                        <Link to="troubling-emotions.html">Troubling Emotions</Link>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        We have all experienced feelings that we did not wish to feel.
                        all know how painful it can be to dwell
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-shape-round ttm-icon-btn-right ttm-btn-color-dark"
                     to="troubling-emotions.html"
                    >
                      READ MORE
                      <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="ttm-boxbg-icon">
                    <div className="ttm-service-iconbox">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                        <i className="flaticon flaticon-psychology-2" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* featured-icon-box end*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*featured-icon-box*/}
                <div className="featured-icon-box icon-align-top-content style2">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                      <i className="flaticon flaticon-customer" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>
                        <Link to="/treatments">
                          Individual Counselling
                        </Link>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        A personal opportunity to receive support and experience
                        growth during challenge times in life.
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-shape-round ttm-icon-btn-right ttm-btn-color-dark"
                     to="/treatments"
                    >
                      READ MORE
                      <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="ttm-boxbg-icon">
                    <div className="ttm-service-iconbox">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                        <i className="flaticon flaticon-customer" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* featured-icon-box end*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*featured-icon-box*/}
                <div className="featured-icon-box icon-align-top-content style2">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                      <i className="flaticon flaticon-depression" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>
                        <Link to="/treatments">Child Counselling</Link>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        We Focuses on the kids, young children,teens, and adolescents
                        with one or more mental illnesses
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-shape-round ttm-icon-btn-right ttm-btn-color-dark"
                     to="/treatments"
                    >
                      READ MORE
                      <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="ttm-boxbg-icon">
                    <div className="ttm-service-iconbox">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                        <i className="flaticon flaticon-depression" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* featured-icon-box end*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*featured-icon-box*/}
                <div className="featured-icon-box icon-align-top-content style2">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                      <i className="flaticon flaticon-psychologist-1" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>
                        <Link to="/treatments">Group Counselling</Link>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        Where a group of people meet regularly to discuss, interact,
                        and explore problems with each other leader.
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-shape-round ttm-icon-btn-right ttm-btn-color-dark"
                     to="/treatments"
                    >
                      READ MORE
                      <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="ttm-boxbg-icon">
                    <div className="ttm-service-iconbox">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                        <i className="flaticon flaticon-psychologist-1" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* featured-icon-box end*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*featured-icon-box*/}
                <div className="featured-icon-box icon-align-top-content style2">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                      <i className="flaticon flaticon-couple-1" />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>
                        <Link to="/treatments">Couple Counselling</Link>
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        Whether it in the context of a marriage is the space for two
                        people to interact with the counsellor to explore.
                      </p>
                    </div>
                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-btn-shape-round ttm-icon-btn-right ttm-btn-color-dark"
                     to="/treatments"
                    >
                      READ MORE
                      <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="ttm-boxbg-icon">
                    <div className="ttm-service-iconbox">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                        <i className="flaticon flaticon-couple-1" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* featured-icon-box end*/}
              </div>
            </div>
            {/*row end*/}
          </div>
        </section>
        {/*portfolio-section_3 end*/}
      
      </div>

    </>
  )
}

export default Services
