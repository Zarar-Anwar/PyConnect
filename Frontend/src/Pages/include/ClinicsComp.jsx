import { server_ip } from "../../Utils/Data"

const ClinicComp = ({ object }) => {
    return (
        <>
            {/* Left side (Images) */}
            < div className="col-lg-6 position-relative " style={{ marginBottom: "90px" }}>
                <img
                    src={object.main_image ? `${server_ip}${object.main_image}` : "images/lahoreplace.jpg"}
                    alt="Mental Health in Lahore"
                    className=" rounded-4 shadow w-100"
                    width="100px"
                    height="450px"
                />

                <div
                    className="position-absolute bottom-0 end-0"
                    style={{ transform: "translate(30%, 30%)" }}
                >
                    <img
                        src={object.overlay_image ? `${server_ip}${object.overlay_image}` : "images/single-img-09.jpg"}
                        alt="Psychologist Lahore"
                        className="img-fluid rounded-4 shadow-sm"
                        style={{ width: 300 }}
                    />
                </div>
            </div>

            {/* Right side (Text Content) */}
            <div className="col-lg-6">
                <small className="text-uppercase text-muted fw-semibold">
                    {object.subtitle}
                </small>
                <h2 className="fw-bold display-6 mt-2 mb-3">
                    {object.clinic_name}
                </h2>
                <p className="text-muted mb-4">
                    {object.description}
                </p>
                {/* Icons Row */}
                <div className="d-flex mb-4" style={{ marginLeft: "100px" }}>
                    <div className="me-4 d-flex align-items-center">
                        <i className="bi bi-person-check-fill fs-3 text-primary me-2" />
                        <span className="fw-semibold">Certified Psychologists</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-emoji-smile fs-3 text-primary me-2" />
                        <span className="fw-semibold">Trusted by {object.location} Families</span>
                    </div>
                </div>

                {/* Button + Counselor */}
                <div className="d-flex align-items-center mt-3" style={{ marginLeft: "100px" }}>
                    <div className="d-flex align-items-center">
                        <img
                            src={object.doctor_image ? `${server_ip}${object.doctor_image}` : "images/team-member/team-img06.jpg"}
                            alt="Dr. Zarar Anwar"
                            className="rounded-circle me-2"
                            style={{ width: 100, height: 100, objectFit: "cover" }}
                        />
                        <div>
                            <strong>{object.doctor_name}</strong>
                            <br />
                            <small className="text-muted">{object.doctor_title}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClinicComp