import { useEffect, useState } from "react";
import { Button, Container, Modal, Tab, Table, Tabs } from "react-bootstrap";
import Vimeo from "@u-wave/react-vimeo";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetProjectDetails, SubmitProjectFile } from "../actions/courseDetails";
import { FormatDate, FormatDateAndTime } from "../utils/FormateDate";
import { DownloadProjectFile, UploadFile } from "../actions/aws";

const ProjectSubmissionDetails = () => {
  const [projectdetails, setProjectdetails] = useState("Project Files");
  const [showPopup, setShowPopup] = useState(false);
  const [showFilePopup, setShowFilePopup] = useState(false);
  const [selectedDraftType, setSelectedDraftType] = useState("");
  const [file, setFile] = useState(null);
  const [remark, setRemark] = useState("");
  const [error, setError] = useState("");
  const [fileUploadResponse, setFileUploadResponse] = useState("");

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();

  const courseId = query.get("courseId");
  const ProjectID = query.get("projectId");

  const ProjectDetail = useSelector((state) => state.projectDetail);
  const { projectDetail } = ProjectDetail;

  const UploadFileResponse = useSelector((state) => state.uploadFileResponse);
  const { uploadFileResponse } = UploadFileResponse;

  const DownloadFileResponse = useSelector(
    (state) => state.downloadFileResponse
  );
  const { downloadFileResponse } = DownloadFileResponse;

  useEffect(() => {
    if (uploadFileResponse?.data) {
      setFileUploadResponse(uploadFileResponse?.data);
    }
  }, [uploadFileResponse]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
  
    if (selectedFile && selectedFile.size > maxSize) {
      setError("File size should not exceed 10MB.");
      setFile(null);
    } else {
      // Create FormData and append file and other fields
      const formData = new FormData();
      formData.append("file", selectedFile); // File itself
      formData.append("uploadFileName", selectedFile.name.replace(/\.[^/.]+$/, ""));  // Remove extension
      formData.append("fileDirectory", "ULearnLMS/Projects/Test/");  // Example directory
  
      // Dispatch the upload action with FormData
      dispatch(UploadFile(formData));
  
      setError("");
    }
  };
  
  

  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!fileUploadResponse || !remark) {
      setError(
        !fileUploadResponse
          ? "Please select a file"
          : !remark
          ? "Please enter a remark."
          : "Please select a file and enter a remark."
      );
      return;
    }
  
    try {
      const submitData = {
        remark,
        fileData: fileUploadResponse, // Include the response from S3
      };
      const refresh = "refresh";
      const FileName = file?.FileName;
  
      // Dispatch SubmitProjectFile and wait for completion
      await dispatch(SubmitProjectFile(ProjectID, submitData, FileName));
  
      // Once the file submission is complete, immediately fetch project details
      await dispatch(GetProjectDetails(courseId, refresh));
  
      // After successful submission and refresh, hide the file popup and reset data
      setShowFilePopup(false);
      setFileUploadResponse(null); // Clear the file data after successful submission
    } catch (error) {
      setError("Form submission failed.");
      console.error(error);
    }
  };
  

  const viewProjectmatchedData = projectDetail?.filter(
    (data) => data.ProjectId == ProjectID
  );

  const viewProjectData = viewProjectmatchedData
    ? viewProjectmatchedData[0]
    : [];

  const tutorDetailsString = viewProjectData?.TutorDetails;

  let tutorDetails;

  if (tutorDetailsString && tutorDetailsString.trim() !== "") {
    tutorDetails = JSON.parse(tutorDetailsString);
  }

  useEffect(() => {
    // Check if courseModule data is already available in the state
    // if (!projectDetail || projectDetail.length === 0) {
      dispatch(GetProjectDetails(courseId));
      console.log('get project run');
      
    // }
  }, [courseId, dispatch]);

  const handleClose = () => setShowPopup(false);
  const handleShow = () => setShowPopup(true);
  const handleDraftClose = () => setShowFilePopup(false);

  const handleDraftSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedDraftType(selectedValue);

    if (selectedValue !== "Default") {
      setShowFilePopup(true);
    }
  };

  const isPF = projectdetails === "Project Files";
  const isSP = projectdetails === "Submit Project";
  const isVL = projectdetails === "View Log";

  const gobackHandler = () => {
    navigate("/ProjectandAssignments");
  };

  const filedownloadHandler = (filePath) => {
    dispatch(DownloadProjectFile(filePath)); // Initiate the download
  };

  // Use effect to listen to changes in the `downloadFileResponse`
  useEffect(() => {
    if (downloadFileResponse) {
      const link = document.createElement("a");
      link.href = downloadFileResponse.data; // Ensure this contains the Blob URL or file path
      link.download = downloadFileResponse.fileName || "downloadedFile"; // Set the file name appropriately
      link.click();
    }
  }, [downloadFileResponse]);

  const projectStartDate = new Date(viewProjectData?.ProjectStartDate); // Convert the start date to a Date object
  const currentDate = new Date(); // Get the current date

  const isGatewayActive = currentDate >= projectStartDate;

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
        {!isGatewayActive && (
          <div className="m-auto" style={{ maxWidth: "1200px" }}>
            <span style={{ color: "red" }}>
              Your project submission gateway not activated yet. It will be
              activated on {FormatDate(viewProjectData?.ProjectStartDate)}
            </span>
          </div>
        )}
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
                    <th onClick={() => filedownloadHandler(data?.FilePath)} style={{cursor:'pointer'}}>
                      <img
                        src="https://ulearn.uniathena.com/Images/icons/download.svg"
                        alt=""
                        width={35}
                      />
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
        {isSP && (
          <>
            <div className="m-auto py-3" style={{ maxWidth: "1200px" }}>
              <select
                style={{ width: "250px" }}
                className="p-2"
                onChange={handleDraftSelect}
                value={selectedDraftType}
              >
                <option selected="" value="Default">
                  Select Submission type
                </option>
                <option value="Last Week">First Draft</option>
                <option value="Last Month">Second Draft</option>
              </select>
            </div>
            <Modal
              show={showFilePopup}
              onHide={handleDraftClose}
              centered
              size="lg"
            >
              <Modal.Header closeButton>Draft Files</Modal.Header>
              <Modal.Body>
                <div className="m-auto py-2">
                  <select
                    style={{ width: "200px" }}
                    className="p-2"
                    value={selectedDraftType}
                    onChange={handleDraftSelect}
                  >
                    <option selected="" value="Default">
                      Select Submission type
                    </option>
                    <option value="Last Week">First Draft</option>
                    <option value="Last Month">Second Draft</option>
                  </select>
                </div>
                <div className="draftfiles-wrap my-2">
                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab
                      eventKey="home"
                      title={
                        <>
                          <i className="fa fa-file"></i>{" "}
                          <span className="d-none d-md-inline-block">
                            View Draft Files
                          </span>
                        </>
                      }
                    >
                      View Draft Content
                    </Tab>
                    <Tab
                      eventKey="profile"
                      title={
                        <>
                          <i className="fa fa-user"></i>{" "}
                          <span className="d-none d-md-inline-block">
                            Upload Draft Files
                          </span>
                        </>
                      }
                    >
                      <div className="mb-3">
                        <label htmlFor="fileInput" className="form-label">
                          Upload File
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="fileInput"
                          style={{
                            maxWidth: "230px",
                            minHeight: "auto",
                            height: "40px",
                          }}
                          onChange={handleFileChange}
                          accept=".jpg,.jpeg,.png,.pdf,.docx" // Adjust allowed file types as needed
                        />
                        {error && (
                          <div className="text-danger mt-2">{error}</div>
                        )}

                        <label htmlFor="remark" className="form-label mt-3">
                          Remark
                        </label>
                        <textarea
                          className="form-control"
                          id="remark"
                          rows="3"
                          value={remark}
                          onChange={handleRemarkChange}
                          placeholder="Enter your remark"
                        />

                        <button
                          className="btn btn-primary dreadmore-btn  mt-3"
                          onClick={handleSubmit}
                          // disabled={!fileUploadResponse || !remark}
                        >
                          Save
                        </button>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </Modal.Body>
            </Modal>
          </>
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
