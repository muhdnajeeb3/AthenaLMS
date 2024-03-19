import { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

const StudClaimCertificate = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [deliveryform, setDeliveryform] = useState(false);

  const handleClose = () => setShowPopup(false);
  const handleShow = () => setShowPopup(true);
  const deliveryHandler = (event) => {
    event.preventDefault();
    setDeliveryform(true);
  };
  const PopupModal = (
    <Modal show={showPopup} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Information</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "550px", overflowY: "scroll" }}>
        <div className="col-md-12">
          <div id="MainContent_divPopupContent">
            <p>
              <strong>
                Extended Diploma in International Business and Strategy
                Certificate
              </strong>
            </p>
            <p>
              <span>
                It is expected to take a minimum of 12 weeks from the date of
                request to the delivery of the certificate, it may vary
                depending on the internal examination board meeting schedules.
              </span>
            </p>
            <p>
              <strong>CMI Certification Fee</strong>
            </p>
            <p>
              <span>
                It is expected to take a minimum of 3 months from the date of
                placing the request to the delivery of the certificate.{" "}
              </span>
            </p>
            <p>
              <strong>PGD-CIQ Certification Fee</strong>
            </p>
            <p>
              <span>
                It is expected to take a minimum of 1 month from the date of
                placing the request to the delivery of the certificate.{" "}
              </span>
            </p>
            <p>
              <strong>
                Postgraduate Certificate In International Human Resource
                Management
              </strong>
            </p>
            <p>
              <span>
                It is expected to take a minimum of 1 month from the date of
                placing the request to the delivery of the certificate.{" "}
              </span>
            </p>
            <p>
              <strong>
                Postgraduate Certificate In International Human Resource
                Management
              </strong>
            </p>
            <p>
              <span>
                It is expected to take a minimum of 1 month from the date of
                placing the request to the delivery of the certificate.{" "}
              </span>
            </p>
            <p>
              <strong>
                Postgraduate Certificate In International Human Resource
                Management
              </strong>
            </p>
            <p>
              <span>
                It is expected to take a minimum of 1 month from the date of
                placing the request to the delivery of the certificate.{" "}
              </span>
            </p>
            <p>
              <strong>
                Postgraduate Certificate In International Human Resource
                Management
              </strong>
            </p>
            <p>
              <span>
                It is expected to take a minimum of 1 month from the date of
                placing the request to the delivery of the certificate.{" "}
              </span>
            </p>
            <p>
              <strong>CMI Certification Fee</strong>
            </p>
            <p>
              <span>
                It is expected to take a minimum of 3 months from the date of
                placing the request to the delivery of the certificate.{" "}
              </span>
            </p>
            <p>
              <strong>
                Postgraduate Certificate In International Human Resource
                Management
              </strong>
            </p>
            <p>
              <span>
                It is expected to take a minimum of 1 month from the date of
                placing the request to the delivery of the certificate.{" "}
              </span>
            </p>
            <p>
              <strong>
                Postgraduate Certificate In International Human Resource
                Management
              </strong>
            </p>
            <p>
              <span>
                It is expected to take a minimum of 1 month from the date of
                placing the request to the delivery of the certificate.{" "}
              </span>
            </p>
            <p>
              <strong>
                Postgraduate Certificate In International Human Resource
                Management
              </strong>
            </p>
            <p>
              <span>
                It is expected to take a minimum of 1 month from the date of
                placing the request to the delivery of the certificate.{" "}
              </span>
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
  useEffect(() => {
    handleShow();
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <Container fluid className="bg-white">
      {PopupModal}
      <div className="moduledetailwrap">
        <div className="text-dark pt-4 pb-3 mdtoprow w-100">
          <div>
            <h2 className="project-heading text-dark pb-1">
              <b>Claim Certificate</b>
            </h2>
            <h5>
              <b>Eligible for certification</b>
            </h5>
          </div>
        </div>
      </div>
      <div className="py-2">
        <form
          className="claim-certificate-card-wrap"
          onSubmit={deliveryHandler}
        >
          <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3 col-md-4">
            <div className="practicalinfo-title w-100 mb-3">
              <h5>
                <b>
                  Postgraduate Certificate In International Human Resource
                  Management
                </b>
              </h5>
            </div>
            <div>
              <Form.Check // prettier-ignore
                type="checkbox"
                // id={`default-${type}`}
                label="Postgraduate Certificate In International Human Resource Management   200.00(USD)"
              />
              <div className="py-3 flex content-center">
                <Button
                  className="default-btn"
                  style={{ borderRadius: "25px", width: "112px" }}
                  type="submit"
                >
                  Proceed
                </Button>
              </div>
            </div>
          </div>
          <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3 col-md-4">
            <div className="practicalinfo-title w-100 mb-3">
              <h5>
                <b>Executive MBA</b>
              </h5>
            </div>
            <div>
              <Form.Check // prettier-ignore
                type="checkbox"
                // id={`default-${type}`}
                label="Certified Manager (Optional)   300.00(USD)  "
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                // id={`default-${type}`}
                label="Postgraduate Diploma in Organizational Leadership   300.00(USD)  "
              />
              <div className="py-3 flex content-center">
                <Button
                  className="default-btn"
                  style={{ borderRadius: "25px", width: "112px" }}
                  type="sumbit"
                >
                  Proceed
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {deliveryform && (
        <div className="claim-certificate-card-wrap shadow bg-white my-4">
          <form action="">
            <div className="cif">
              <div
                className="cpform-group mt-4 px-4 w-100"
                style={{ maxWidth: "100%" }}
              >
                <label>
                  Your Name Will be Appeard on the certificate as below
                </label>
                <input
                  className="cpform-control"
                  type="text"
                  value="Muhammed Najeeb"
                  placeholder="Student Name"
                />
              </div>
              <div className="px-4 mt-4">
                <Form.Check // prettier-ignore
                  type="checkbox"
                  // id={`default-${type}`}
                  label="Get Through courier(Additional 50 USD will be applicable)"
                />
              </div>
            </div>
            <div className="create-invoice-form claim-form px-2">
              <div className="cpform-group">
                <label>Door No</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="Door No"
                />
              </div>
              <div className="cpform-group">
                <label>Building Name/No</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="Building Name/No"
                />
              </div>
              <div className="cpform-group">
                <label>Street Name</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="Street Name"
                />
              </div>
              <div className="cpform-group">
                <label>City</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="cpform-group">
                <label>Country</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="Country"
                />
              </div>
              <div className="cpform-group">
                <label>Postal Code</label>
                <input
                  className="cpform-control"
                  type="number"
                  placeholder="Postal Code"
                />
              </div>
            </div>
            <div className="px-4">
              <Form.Check // prettier-ignore
                type="checkbox"
                // id={`default-${type}`}
                label="I accept the   Terms And Condtions"
              />
            </div>
            <div className="p-3 mb-3 flex content-center">
              <Button
                className="default-btn"
                style={{ borderRadius: "25px", width: "132px" }}
              >
                Pay Now
              </Button>
            </div>
          </form>
        </div>
      )}
      <div className="total-amount-selected pt-4 flex content-center">
        <h2 className="pb-4">
          <span>USD </span>
          <b>200.00</b>
        </h2>
      </div>
      <hr className="mb-5" />
    </Container>
  );
};

export default StudClaimCertificate;
