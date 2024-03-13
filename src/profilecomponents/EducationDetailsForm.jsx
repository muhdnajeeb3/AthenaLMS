import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const EducationDetailsForm = ({ showPopupED, handleClose }) => {
  return (
    <Modal
      show={showPopupED}
      onHide={handleClose}
      className="myprofileeditform"
    >
      <Modal.Header closeButton>
        <Modal.Title>Education Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="" className="ed-details-form">
          <div className="cpform-group">
            <label>Qualification Level</label>
            <select
              placeholder="Qualification Level..."
              className="cpform-control"
            >
              <option value="Select">Select</option>
              <option value="Master degree or above">
                Master degree or above
              </option>
              <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
              <option value="Higher Diploma/Diploma">
                Higher Diploma/Diploma
              </option>
              <option value="A level/ Higher Secondary">
                A level/ Higher Secondary
              </option>
              <option value="O Level/ School certificate">
                O Level/ School certificate
              </option>
              <option value="No formal Qualification">
                No formal Qualification
              </option>
            </select>
          </div>
          <div className="cpform-group">
            <label>Final Grade</label>
            <input
              className="cpform-control"
              type="text"
              placeholder="Final Grade..."
            />
          </div>
          <div className="cpform-group">
            <label>University Name</label>
            <input
              className="cpform-control"
              type="text"
              placeholder="University Name"
            />
          </div>
          <div className="cpform-group">
            <label>Country</label>
            <select
              placeholder="Qualification Level..."
              className="cpform-control"
            >
              <option value="Select">Select</option>
              <option value="Master degree or above">India</option>
              <option value="Bachelor's Degree">Uae</option>
              <option value="Higher Diploma/Diploma">Qatar</option>
            </select>
          </div>
          <div className="cpform-group">
            <label>Year of Passing</label>
            <input
              className="cpform-control"
              type="number"
              placeholder="Year of Passing..."
            />
          </div>
          <div className="cpform-group">
            <label>Upload Certificate</label>
            <input className="cpform-control" type="file" />
            <div className="flex">
              <em className="m-auto"> Upload File size must under 5MB!</em>
            </div>
          </div>
          <div className="cpform-group">
            <label>Additional Documents(Optional)</label>
            <input className="cpform-control" type="file" />
            <div className="flex">
              <em className="m-auto"> Upload File size must under 5MB!</em>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="completed-btnwrap">
        <Button variant="primary" onClick={handleClose}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EducationDetailsForm;