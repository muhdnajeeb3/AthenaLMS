import { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import EducationDetailsForm from "./EducationDetailsForm";
import WorkExperienceForm from "./WorkExperienceForm";
import EditProfile from "./EditProfile";
import IdCard from "./IdCard";

const MemberProfile = () => {
  const [counters, setCounters] = useState({
    counter: 0,
    counterOne: 0,
    counterTwo: 0,
  });
  const [showPopupED, setShowPopupED] = useState(false);
  const [showPopupWE, setShowPopupWE] = useState(false);
  const [showPopupOD, setShowPopupOD] = useState(false);
  const [showPopupEP, setShowPopupEP] = useState(false);
  const [showPopupid, setShowPopupid] = useState(false);

  const handleClose = () => setShowPopupED(false);
  const handleShow = () => setShowPopupED(true);

  const handleCloseWE = () => setShowPopupWE(false);
  const handleShowWE = () => setShowPopupWE(true);

  const handleCloseOD = () => setShowPopupOD(false);
  const handleShowOD = () => setShowPopupOD(true);

  const handleCloseEP = () => setShowPopupEP(false);
  const handleShowEP = () => setShowPopupEP(true);

  const handleCloseid = () => setShowPopupid(false);
  const handleShowid = () => setShowPopupid(true);

  const { counter } = counters;

  const incrementCounter = (counterKey, length, precision) => {
    setTimeout(() => {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [counterKey]: prevCounters[counterKey] + precision,
      }));
    }, 20);
  };

  useEffect(() => {
    if (counter < 85) {
      incrementCounter("counter", 35, 1);
    }
  }, [counter]);
  const percentage = counter;
  return (
    <Container fluid className="bg-light py-2">
      <div className="memberprofilewrap">
        <h2 className="mptitle">My Private Profile</h2>
        <br />
        <div className="mpbox1">
          <div className="col-md-8">
            {/* edit profile */}
            <div className="shadow p-3 bg-white profilecards mb-4">
              <div>
                <img
                  src="https://t3.ftcdn.net/jpg/06/39/82/56/360_F_639825617_M37Rtx5wggULiv1sa6HRYdlWGJhZ4yYw.jpg"
                  alt=""
                  width={130}
                  className="profile-img"
                />
              </div>
              <div className="w-100  p-2">
                <div className="editprofile id-name-wrap">
                  <h6>
                    <b>Muhammed</b>{" "}
                    <b>Najeeb</b> <b className="id-dash"> | </b>{" "}
                    <b className="id-blk"> ID: </b>
                    <b className="id-no">20113680</b>
                  </h6>
                  <div className="editprofile" onClick={handleShowEP}>
                    <i className="fa fa-edit" />
                    <span title="Edit">Edit Profile</span>
                  </div>
                </div>
                <b>Test</b>
                <p className="pt-3 m-0">
                  <b>Test1</b>|<b>Test1</b>| <b>INDIA</b>
                </p>
                <p
                  className="pt-3 m-0 editprofile"
                  style={{ justifyContent: "flex-start" }}
                >
                  <img src="https://ulearn.uniathena.com/images/icons/mail.svg" />
                  <b>najeeb@schneideit.com</b>
                </p>
              </div>
            </div>
            <EditProfile
              handleClose={handleCloseEP}
              showPopupED={showPopupEP}
            />
            {/* Educational Qualfication */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3 plus-icon-wrap">
                <h5>
                  <b>Education Qualification</b>
                </h5>
                <span className="plus-icon" onClick={handleShow}>
                  +
                </span>
              </div>
              <div>
                <div className="createvoice-list">
                  <div>
                    <span className="">Master In Data Sciences</span>
                    <br />
                    <span>Year: 2015</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Master In Data Sciences</span>
                    <br />
                    <span>Year: 2015</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Master In Data Sciences</span>
                    <br />
                    <span>Year: 2015</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Master In Data Sciences</span>
                    <br />
                    <span>Year: 2015</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {showPopupED && (
              <EducationDetailsForm
                handleClose={handleClose}
                showPopupED={showPopupED}
              />
            )}
            {/* work expereince */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3 plus-icon-wrap">
                <h5>
                  <b>Work Experience</b>
                </h5>
                <span className="plus-icon" onClick={handleShowWE}>
                  +
                </span>
              </div>
              <div>
                <div className="createvoice-list">
                  <div>
                    <span className="">Test at Test</span>
                    <br />
                    <span>year : Feb 2020 - Till now</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Test at Test</span>
                    <br />
                    <span>year : Feb 2020 - Till now</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Test at Test</span>
                    <br />
                    <span>year : Feb 2020 - Till now</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Test at Test</span>
                    <br />
                    <span>year : Feb 2020 - Till now</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {showPopupWE && (
              <WorkExperienceForm
                handleClose={handleCloseWE}
                showPopupED={showPopupWE}
              />
            )}

            {/* additional doc */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3 plus-icon-wrap">
                <h5>
                  <b>Additional Documents</b>
                </h5>
                <span className="plus-icon" onClick={handleShowOD}>
                  +
                </span>
              </div>
              <div>
                <div className="createvoice-list">
                  <div>
                    <span className="">
                      Photo : <span className="blue">23617_lap.png</span>
                    </span>
                  </div>
                </div>
                <div className="createvoice-list">
                  <div>
                    <span className="">
                      Passport/Photo ID card copy with Date of Birth :{" "}
                      <span className="blue">23617_lap.png</span>
                    </span>
                  </div>
                </div>
                <div className="createvoice-list">
                  <div>
                    <span className="">
                      Photo : <span className="blue">23617_lap.png</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              show={showPopupOD}
              onHide={handleCloseOD}
              className="myprofileeditform"
            >
              <Modal.Header closeButton>
                <Modal.Title>Other Documents</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form action="" className="ed-details-form">
                  <div className="cpform-group">
                    <label>File Type</label>
                    <select
                      placeholder="Qualification Level..."
                      className="cpform-control"
                    >
                      <option value="Select">Select</option>
                      <option value="Master degree or above">Other</option>
                    </select>
                  </div>
                  <div className="cpform-group">
                    <label>Upload your File</label>
                    <input className="cpform-control" type="file" />
                    <div className="flex">
                      <em className="m-auto">
                        {" "}
                        Upload File size must under 5MB!
                      </em>
                    </div>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer className="completed-btnwrap">
                <Button variant="primary" onClick={handleClose}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="col-md-4">
            <div className="practicalinfo bg-white shadow p-4 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Complete Your Profile</b>
                </h5>
              </div>
              <div className="progresscirclewrap mb-3">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(255, 0, 110)`,
                    textColor: "#000",
                  })}
                />
              </div>
              <div className="w-100 flex">
                <span className="text-center m-auto">
                  Well done! Your profile is completed
                </span>
              </div>
            </div>
            {/* create invoice */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Create Invoice</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Master In Data Sciences</span>
                  <Link to="/CreateInvoice" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of Business Administration - Blockchain Management
                  </span>
                  <Link to="/CreateInvoice" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="/CreateInvoice" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="/CreateInvoice" className="prc">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            {/* Claim Your Certificates */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Claim Your Certificates</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Certified Manager</span>
                  <Link to="/StudClaimCertificate" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Postgraduate Certificate In International Human Resource
                    Management
                  </span>
                  <Link to="/StudClaimCertificate" className="prc">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            {/* Your certificates */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Your Certificates</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Certified Manager</span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            {/* Progress Report Card */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Progress Report Card</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Master In Data Sciences</span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of Business Administration - Blockchain Management
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            {/* letter of completion */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Letter Of Completion</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Master In Data Sciences</span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of Business Administration - Blockchain Management
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            {/* Your id card */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Your ID Card</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Master In Data Sciences</span>
                  <Link to="" className="prc" onClick={handleShowid}>
                    View ID
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of Business Administration - Blockchain Management
                  </span>
                  <Link to="" className="prc" onClick={handleShowid}>
                    View ID
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc" onClick={handleShowid}>
                    View ID
                  </Link>
                </div>
                <div className="createvoice-list" onClick={handleShowid}>
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">
                    View ID
                  </Link>
                </div>
              </div>
            </div>
            {showPopupid && (
              <IdCard
                handleClose={handleCloseid}
                showPopupED={showPopupid}
              />
            )}
            {/* course you enrolled */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Courses you Enrolled</b>
                </h5>
              </div>
              <div className="course-enroled-list-wrap">
                <div className="course-enroled-list">
                  <h6 className="">
                    <b>
                      Master of Business Administration - Blockchain Management
                    </b>
                  </h6>
                  <h6 className="pt-2 pb-1 mb-3">
                    <b>University:</b>
                    <span>Guglielmo Marconi University, Italy</span>
                  </h6>
                  <div className="blockedresume-wrap">
                    <span className="col-md-6">Blocked</span>
                    <Link to="">Resume Learning</Link>
                  </div>
                </div>
                <hr />
                <div className="course-enroled-list">
                  <h6 className="">
                    <b>
                      Master of Business Administration - Blockchain Management
                    </b>
                  </h6>
                  <h6 className="pt-2 pb-1 mb-3">
                    <b>University:</b>
                    <span>Guglielmo Marconi University, Italy</span>
                  </h6>
                  <div className="blockedresume-wrap">
                    <span className="col-md-6">Blocked</span>
                    <Link to="">Resume Learning</Link>
                  </div>
                </div>
                <hr />
                <div className="course-enroled-list">
                  <h6 className="">
                    <b>
                      Master of Business Administration - Blockchain Management
                    </b>
                  </h6>
                  <h6 className="pt-2 pb-1 mb-3">
                    <b>University:</b>
                    <span>Guglielmo Marconi University, Italy</span>
                  </h6>
                  <div className="blockedresume-wrap">
                    <span className="col-md-6">Blocked</span>
                    <Link to="">Resume Learning</Link>
                  </div>
                </div>
                <hr />
                <div className="course-enroled-list">
                  <h6 className="">
                    <b>
                      Master of Business Administration - Blockchain Management
                    </b>
                  </h6>
                  <h6 className="pt-2 pb-1 mb-3">
                    <b>University:</b>
                    <span>Guglielmo Marconi University, Italy</span>
                  </h6>
                  <div className="blockedresume-wrap">
                    <span className="col-md-6">Blocked</span>
                    <Link to="">Resume Learning</Link>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MemberProfile;
