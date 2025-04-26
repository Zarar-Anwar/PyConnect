import { useEffect, useState } from "react";
import api from "../Utils/Axios";
import { server_ip } from "../Utils/Data";
import ClinicComp from "./include/ClinicsComp";

const Clinics = ({ title }) => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const fetchHighlightClinic = async () => {
      try {
        const response = await api.get("/clinic-highlight/");
        setHighlights(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching highlight Clinic:", error);
      }
    };

    fetchHighlightClinic();
  }, []);

  return (
    <>
      <div className="ttm-page-title-row">
        <div className="ttm-page-title-row-inner ttm-bgcolor-darkgrey">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="page-title-heading">
                  <h2 className="title">Clinics</h2>
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
                  <span>Clinics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 bg-light" style={{ marginBottom: "100px" }}>
        <div className="container">
          <div className="row align-items-center">
            {highlights.length > 0 ? (
              highlights.map((object) => <ClinicComp object={object} />)
            ) : (
              <div className="text-center  text-danger my-5">
                <strong>
                  <p>No Clinic's Profile Available</p>
                </strong>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clinics;
