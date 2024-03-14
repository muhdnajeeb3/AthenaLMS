import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";

const EditProfile = ({ showPopupED, handleClose }) => {
  return (
    <Modal show={showPopupED} onHide={handleClose} className="editprofile">
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="" className="edit-profile-form">
          <div className="col-md-2 edit-profile-img pt-4">
            <div>
              <div>
                <img
                  src="https://t3.ftcdn.net/jpg/06/39/82/56/360_F_639825617_M37Rtx5wggULiv1sa6HRYdlWGJhZ4yYw.jpg"
                  alt=""
                  width={130}
                  className="profile-img"
                />
              </div>
              <div>
                <input className="custom-file-input" type="file" />
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="practicalinfo bg-white pb-2 mb-2">
              <div className="practicalinfo-title w-100 mb-3 plus-icon-wrap">
                <h5>
                  <b>Personal Information</b>
                </h5>
              </div>
            </div>
            <div className="edit-profile-data">
              <div className="cpform-group">
                <label>First Name</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="cpform-group">
                <label>Middle Name</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="Middle Name"
                />
              </div>
              <div className="cpform-group">
                <label>Last Name</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="cpform-group">
                <label>Gender</label>
                <select
                  placeholder="Qualification Level..."
                  className="cpform-control"
                >
                  <option value="">Select</option>
                  <option value="Master degree or above">Male</option>
                  <option value="Bachelor's Degree">Female</option>
                  <option value="Higher Diploma/Diploma">Others</option>
                </select>
              </div>
              <div className="cpform-group">
                <label>Marital Status</label>
                <select
                  placeholder="Qualification Level..."
                  className="cpform-control"
                >
                  <option value="">Select</option>
                  <option value="Master degree or above">Single</option>
                  <option value="Bachelor's Degree">Married</option>
                </select>
              </div>
              <div className="cpform-group">
                <label>Birth Date</label>
                <input
                  className="cpform-control"
                  type="date"
                  placeholder="Birth Date"
                />
              </div>
            </div>
            <div className="practicalinfo bg-white p-4 pb-2 mb-2">
              <div className="practicalinfo-title w-100 mb-3 plus-icon-wrap">
                <h5>
                  <b>Contact Information</b>
                </h5>
              </div>
            </div>
            <div className="edit-profile-data">
              <div className="cpform-group">
                <label>Address</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="Address"
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
                <label>State/Province</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="Last Name"
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
              <div className="cpform-group">
                <label>Country of Residence</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="Country of Residence"
                />
              </div>
              <div className="cpform-group">
                <label>Upload Your Photo ID</label>
                <input className="cpform-control" type="file" />
                <div className="flex">
                  <em className="m-auto"> Upload File size must under 5MB!</em>
                </div>
              </div>
              <div className="cpform-group">
                <label>Nationality</label>
                <select
                  placeholder="Qualification Level..."
                  className="cpform-control"
                >
                  <option value="">Select</option>
                  <option value="Master degree or above">Male</option>
                  <option value="Bachelor's Degree">Female</option>
                  <option value="Higher Diploma/Diploma">Others</option>
                </select>
              </div>
              <div className="cpform-group">
                <label>Mobile Number</label>
                <div className="edit-phoneinputwrap w-100">
                  <PhoneInput
                    placeholder="Enter Mobile number"
                    //   value={value}
                    //   onChange={setValue}
                    defaultCountry="AE"
                  />
                </div>
              </div>
              <div className="cpform-group">
                <label>E-mail</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="E-mail"
                />
              </div>
              <div className="cpform-group">
                <label>Alternative E-mail</label>
                <input
                  className="cpform-control"
                  type="text"
                  placeholder="Alternative E-mail"
                />
              </div>
              <div className="cpform-group">
                <label>Alternative Phone</label>
                <div className="edit-phoneinputwrap w-100">
                  <PhoneInput
                    placeholder="Enter Mobile number"
                    //   value={value}
                    //   onChange={setValue}
                    defaultCountry="AE"
                  />
                </div>
              </div>
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

export default EditProfile;
