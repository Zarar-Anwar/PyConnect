import { server_ip } from "../../Utils/Data"

const ClinicComp = ({ object }) => {
    return (
        <>
            {/* Left side (Images) */}
            <div className="col-lg-12 position-relative" style={{ marginBottom: "90px" }}>
                <h2 className="fw-bold display-6 mt-2 mb-3">
                    In {object.clinic_name}
                </h2>
                <small className="text-uppercase text-muted fw-semibold">
                    {object.subtitle}
                </small>

                <img
                    src={object.main_image ? `${server_ip}${object.main_image}` : "images/lahoreplace.jpg"}
                    alt="Mental Health in Lahore"
                    className="rounded-4 shadow"
                    width="100%"
                    height="500px"
                />

                {/* Doctor List Container */}
                <div className="row mt-3 justify-content-center">
                    {/* {object.doctors?.map((doctor, index) => ( */}
                    <div className="col-6 col-md-3 text-center mb-4">
                        <img
                            src={object.doctor_image ? `${server_ip}${object.doctor_image}` : "images/team-member/team-img06.jpg"}
                            alt={object.name}
                            className="rounded-circle"
                            style={{ width: 100, height: 100, objectFit: "cover" }}
                        />
                        <div className="mt-2">
                            <strong>{object.doctor_name}</strong>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
            </div>

        </>
    )
}

export default ClinicComp