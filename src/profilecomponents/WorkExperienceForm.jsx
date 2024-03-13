import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const WorkExperienceForm = ({ showPopupED, handleClose }) => {
  const [currentlyWorking, setCurrentlyWorking] = useState(false)
  return (
    <Modal
      show={showPopupED}
      onHide={handleClose}
      className="myprofileeditform"
    >
      <Modal.Header closeButton>
        <Modal.Title>Work Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="" className="ed-details-form">
          <div className="cpform-group">
            <label>Industry</label>
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
            <label>Company</label>
            <input
              className="cpform-control"
              type="text"
              placeholder="Company..."
            />
          </div>
          <div className="cpform-group">
            <label>Grade</label>

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
          <div className="cpform-group dcgroup">
            <label>Designation</label>
            <input
              className="cpform-control"
              type="text"
              placeholder="University Name"
            />
          </div>
          <div className="cpform-group dcgroup">
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
          <div className="cpform-group flex">
            <label>Start Date</label>
            <select
              placeholder="Qualification Level..."
              className="cpform-control"
            >
              <option value="Select">Year</option>
              <option value="Master degree or above">2023</option>
              <option value="Bachelor's Degree">2022</option>
              <option value="Higher Diploma/Diploma">2021</option>
            </select>
            <select
              placeholder="Qualification Level..."
              className="cpform-control"
            >
              <option value="Select">Month</option>
              <option value="Master degree or above">jan</option>
              <option value="Bachelor's Degree">feb</option>
              <option value="Higher Diploma/Diploma">mar</option>
            </select>
          </div>
          {
            !currentlyWorking && 

          <div className="cpform-group flex">
            <label>End Date</label>
            <select
              placeholder="Qualification Level..."
              className="cpform-control"
            >
              <option value="Select">Year</option>
              <option value="Master degree or above">2023</option>
              <option value="Bachelor's Degree">2022</option>
              <option value="Higher Diploma/Diploma">2021</option>
            </select>
            <select
              placeholder="Qualification Level..."
              className="cpform-control"
              
            >
              <option value="Select">Month</option>
              <option value="Master degree or above">jan</option>
              <option value="Bachelor's Degree">feb</option>
              <option value="Higher Diploma/Diploma">mar</option>
            </select>
          </div>
          }
          <div className="flex item-center formcheck">
          <Form.Check // prettier-ignore
            type='checkbox'
            id=''
            label='Currently I work here'
            onClick={()=>setCurrentlyWorking(!currentlyWorking)}
          />
        </div>
          <div className="cpform-group w-100">
            <label>Upload your work experience letter</label>
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

export default WorkExperienceForm;