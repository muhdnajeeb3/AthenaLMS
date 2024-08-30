import { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import Vimeo from "@u-wave/react-vimeo";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetProjectDetails } from "../actions/courseDetails";
import { FormatDate, FormatDateAndTime } from "../utils/FormateDate";

const ProjectSubmissionDetails = () => {
  const [projectdetails, setProjectdetails] = useState("Project Files");
  const [showPopup, setShowPopup] = useState(false);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();

  const courseId = query.get("courseId");
  const moduleId = query.get("ModuleId");
  const ProjectID = query.get("projectId");

  const ProjectDetail = useSelector((state) => state.projectDetail);
  const {
    loading: projectloading,
    projectDetail,
    error: projecterror,
  } = ProjectDetail;

  const viewProjectmatchedData = projectDetail?.filter(
    (data) => data.ProjectId == ProjectID
  );

  const viewProjectData = viewProjectmatchedData
    ? viewProjectmatchedData[0]
    : [];
  console.log(viewProjectData);

  const tutorDetailsString = viewProjectData?.TutorDetails;

  let tutorDetails;

  if (tutorDetailsString && tutorDetailsString.trim() !== "") {
    tutorDetails = JSON.parse(tutorDetailsString);
  } else {
    console.log("Tutor details are not available.");
  }

  useEffect(() => {
    // Check if courseModule data is already available in the state
    if (!projectDetail || projectDetail.length === 0) {
      dispatch(GetProjectDetails(courseId));
    }
  }, [courseId, dispatch, projectDetail]);

  const handleClose = () => setShowPopup(false);
  const handleShow = () => setShowPopup(true);

  const isPF = projectdetails === "Project Files";
  const isSP = projectdetails === "Submit Project";
  const isVL = projectdetails === "View Log";

  const gobackHandler = () => {
    navigate("/ProjectandAssignments");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container fluid className="bg-light py-4">
        <div className="moduledetailwrap">
          <div className="text-dark pt-5 pb-3 mdtoprow w-100">
            <div>
              <h2 className="project-heading text-dark pb-1">
                <b>Project Submission Details</b>
              </h2>
            </div>
            <div>
              <Button
                className="quizz-assign-btn"
                style={{
                  borderRadius: "0",
                  width: "191px",
                  height: "44px",
                }}
                onClick={gobackHandler}
              >
                Go Back to Project
              </Button>
            </div>
          </div>
        </div>
        <div className="m-auto" style={{ maxWidth: "1200px" }}>
          <span style={{ color: "red" }}>
            Your project submission gateway not activated yet. It will be
            activated on 28/07/2021
          </span>
        </div>
        <div className="project-sub-details-wrap m-auto pt-5 pb-4">
          <div className="shadow p-3">
            <div className="flex gap-10 col-md-3 ">
              <b>Module</b>
              <span>{viewProjectData?.ModuleName}</span>
            </div>
            <div className="flex gap-10 col-md-3">
              <b>Start Date</b>
              <span>{FormatDate(viewProjectData?.ProjectStartDate)}</span>
            </div>
            <div className="flex gap-10 col-md-3">
              <b>Last Date for Submission</b>
              <span>21/02/2022</span>
            </div>
            <div className="flex gap-10 col-md-3">
              <b>Days Left</b>
              <span>{viewProjectData?.DaysLeft}</span>
            </div>
            <div className="flex gap-10 col-md-3">
              <b>Personal Tutor</b>
              <span>{tutorDetails?.PersonalTutor}</span>
            </div>
            <div className="flex gap-10 col-md-3">
              <b>Tutor Email</b>
              <span>{tutorDetails?.TutorEmail}</span>
            </div>
            <div className="flex gap-10 col-md-3">
              <b>Status</b>
              <span>{viewProjectData?.ProjectCurrentStatus}</span>
            </div>
          </div>
        </div>
        <div className="m-auto" style={{ maxWidth: "1200px" }}>
          <div className="shadow p-3 bg-white">
            <div>
              <b>Reference Help</b>
            </div>
            <div className="reference-card-wrap">
              <div className="shadow my-3 p-3 reference-card bg-white">
                <h6 className="text-center">Assignment Writing Guide</h6>
                <div className="reference-card-img" onClick={handleShow}>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/play.svg"
                    alt=""
                    width={42}
                  />
                </div>
              </div>
              <div className="shadow my-3 p-3 reference-card bg-white">
                <h6 className="text-center">Harvard Referencing Guide</h6>
                <div className="reference-card-img" onClick={handleShow}>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/play.svg"
                    alt=""
                    width={42}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={showPopup} onHide={handleClose} centered>
          <Modal.Header closeButton>Assignment Writing Guide</Modal.Header>
          <Modal.Body>
            <Vimeo
              // video="328808137"
              video="285854272"
              allowfullscreen="allowfullscreen"
              height="550"
              className="vp"
              showTitle={false}
              responsive={true}
            />
          </Modal.Body>
          <Modal.Footer className="completed-btnwrap">
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Container fluid className="bg-light pb-5 pt-2">
        <div className="profile-sections-row">
          <span
            onClick={() => setProjectdetails("Project Files")}
            className={`${isPF ? "profile-active" : ""}`}
          >
            <b>Project Files</b>
          </span>
          <span
            onClick={() => setProjectdetails("Submit Project")}
            className={`${isSP ? "profile-active" : ""}`}
          >
            <b>Submit Project</b>
          </span>
          <span
            onClick={() => setProjectdetails("View Log")}
            className={`${isVL ? "profile-active" : ""}`}
          >
            <b>View Log</b>
          </span>
        </div>
        {isPF && (
          <div className="m-auto py-3" style={{ maxWidth: "1200px" }}>
            <Table responsive="md" hover className="my-2">
              <thead>
                <tr className="project-file-title">
                  <th>File Type</th>
                  <th>Submitted On</th>
                  <th>Submitted By</th>
                  <th>File Name</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {viewProjectData?.ProjectFileDetails?.map((data, i) => (
                  <tr key={i}>
                    <th>{data?.FileType}</th>
                    <th>{FormatDateAndTime(data.SubmittedOn)}</th>
                    <th>{data.SubmittedBy}</th>
                    <th>{data.FileName} </th>
                    <th>
                      <a href={data.FilePath} download>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/download.svg"
                          alt=""
                          width={35}
                        />
                      </a>
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        {isSP && (
          <div className="m-auto py-3" style={{ maxWidth: "1200px" }}>
            <select style={{ width: "250px" }} className="p-2">
              <option selected="" value="Default">
                Select Submission type
              </option>
              <option value="Last Week">First Draft</option>
              <option value="Last Month">Second Draft</option>
            </select>
          </div>
        )}
        {isVL && (
          <div className="m-auto py-3" style={{ maxWidth: "1200px" }}>
            <Table responsive="md" hover className="my-2">
              <thead>
                <tr className="project-file-title">
                  <th>Role</th>
                  <th>Name</th>
                  <th>Actioned On</th>
                  <th>Status</th>
                  <th>Score</th>
                  <th>Grade</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {viewProjectData?.ViewLog?.map((data, i) => (
                  <tr key={i}>
                    <th>{data?.Role}</th>
                    <th>{data.Name}</th>
                    <th>{FormatDateAndTime(data.ActionedOn)}</th>
                    <th>{data.Status} </th>
                    <th>{data.Score}</th>
                    <th>{data.Grade}</th>
                    <th>{data.Remark}</th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </>
  );
};

export default ProjectSubmissionDetails;
