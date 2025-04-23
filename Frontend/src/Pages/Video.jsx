import { useEffect, useState } from "react";
import api from "../Utils/Axios";
import { Link } from "react-router-dom";
import { server_ip } from "../Utils/Data";

const Videos = ({ title }) => {
  const [vlogs, setVlogs] = useState([])

  useEffect(() => {
    const fetchVlogsVideos = async () => {
      try {
        const response = await api.get('/vlog-post/');
        setVlogs(response.data)
      } catch (error) {
        console.error('Error fetching Vlog Video:', error);
      }
    };
    fetchVlogsVideos()
  }, [])
  return (
    <>
      <div className="ttm-page-title-row">
        <div className="ttm-page-title-row-inner ttm-bgcolor-darkgrey">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="page-title-heading">
                  <h2 className="title"> Videos</h2>
                  <h5 className="sub-title">
                    {" "}
                    We providing effective rewarding Psychotherapy
                  </h5>
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
                  <span>Videos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-main" style={{ marginTop: "50px" }}>
        <div className="ttm-row sidebar ttm-sidebar-right ttm-bgcolor-white overflow-hidden clearfix">
          <div className="container">
            <div className="row">
              {vlogs?.length > 0 ?
                vlogs.map((object) => (
                  <div className="col-12 p-0">
                    {/* post */}
                    <article className="post ttm-blog-classic clearfix">
                      <div className="ttm-blog-classic-content">
                        <div className="ttm-post-entry-header">
                          <header className="entry-header">
                            <h2 className="entry-title">
                              <Link to="#">
                                {object.title}
                              </Link>
                            </h2>
                          </header>
                          <div className="post-meta">
                            <span className="ttm-meta-line cat-links">
                              <i className="fa fa-user" />
                              {object.author}
                            </span>
                            <span className="ttm-meta-line byline">
                              <i className="fa fa-tags" />
                              {object.category}
                            </span>
                          </div>
                        </div>
                        <div className="entry-content">
                          <div className="ttm-box-desc-text">
                            <p>
                              {object.content}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* post-featured-wrapper */}
                      <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                        <div className="ttm-post-featured">
                          {/* Video instead of image */}
                          <video
                            controls
                            muted
                            width="100%"
                            style={{ borderRadius: '10px' }}
                            preload="auto"
                          >
                            <source src={object.video ? `${server_ip}${object.video}` : "/videos/appointment-guide.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="ttm-box-post-date">
                          <span className="ttm-entry-date">
                            <span className="entry-date">{object.date_published}</span>
                          </span>
                        </div>
                      </div>
                      {/* post-featured-wrapper end */}

                      {/* ttm-blog-classic-content */}

                      {/* ttm-blog-classic-content end */}
                    </article>
                    {/* post end */}
                  </div>
                ))
                :
                <div className="text-center  text-danger my-5">
                  <strong>
                    <p>No Videos Available</p>
                  </strong>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Videos;
