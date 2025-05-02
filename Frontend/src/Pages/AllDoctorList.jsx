import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../Utils/Axios";
import { server_ip } from "../Utils/Data";
import { Helmet } from "react-helmet";

const AllDoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 9;

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await api.get("/doctor/");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching Doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  // Pagination Logic
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Optional scroll to top
  };

  return (
    <>
      <Helmet><title>Doctors List</title></Helmet>

      <div className="ttm-page-title-row">
        <div className="ttm-page-title-row-inner ttm-bgcolor-darkgrey">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="page-title-heading">
                  <h2 className="title">Doctors</h2>
                  <h5 className="sub-title"> Our Honourable Doctors</h5>
                </div>
                <div className="breadcrumb-wrapper">
                  <span><Link title="Homepage" to="/">Home</Link></span>
                  <span className="ttm-bread-sep"><i className="fa fa-long-arrow-right" /></span>
                  <span>Doctors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ttm-row team-member-section_1 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
              <div className="section-title title-style-center_text">
                <div className="title-header"></div>
              </div>
            </div>
          </div>

          <div className="row">
            {currentDoctors.length > 0 ? (
              currentDoctors.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                  <Link to="/doctor-details" state={{ item }}>
                    <div className="featured-imagebox featured-imagebox-team style1">
                      <div className="ttm-box-view-overlay">
                        <Link to="#" className="media-btn" tabIndex={0}><i className="ti ti-plus" /></Link>
                        <div className="featured-thumbnail">
                          <img
                            className="img-fluid"
                            src={item.image || "images/team-member/team-img01.jpg"}
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="featured-content box-shadow">
                        <div className="featured-title">
                          <h5><Link to="#">{item.name}</Link></h5>
                        </div>
                        <p className="category">{item.position}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center text-danger my-5">
                <strong><p>No Doctors Available</p></strong>
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="text-center mt-4">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`btn mx-1 ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AllDoctorList;
