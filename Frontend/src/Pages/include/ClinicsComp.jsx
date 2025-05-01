import { Link } from "react-router-dom";
import { server_ip } from "../../Utils/Data";

const ClinicComp = ({ object }) => {
  return (
    <>
      {/* Left side (Images) */}
      <Link to="/doctor-list" state={{ object }}>
        <div
          className="col-lg-12 position-relative"
          style={{ marginBottom: "90px" }}
        >
          <h2 className="fw-bold display-6 mt-2 mb-3">
            In {object.clinic_name}
          </h2>
          <small className="text-uppercase text-muted fw-semibold">
            {object.subtitle}
          </small>

          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // 16:9 Aspect Ratio
              overflow: "hidden",
              borderRadius: "16px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={
                object.main_image
                  ? `${server_ip}${object.main_image}`
                  : "images/lahoreplace.jpg"
              }
              alt="Mental Health in Lahore"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default ClinicComp;
