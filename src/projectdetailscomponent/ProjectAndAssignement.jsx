import { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GetProjectDetails,
  GetProjectModuleDetails,
  GetStudentEnrollment,
} from "../actions/courseDetails";
import { FormatDate, FormatDateAndTime } from "../utils/FormateDate";
import { ProjectExtension } from "../actions/projectDetails";
import { UploadFile } from "../actions/aws";

const ProjectAndAssignement = () => {
  const [showModal, setShowModal] = useState(false);
  const [extensionType, setExtensionType] = useState("paid"); // Tracks whether Paid Extension or Medical is selected
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [selectedProject, setSelectedProject] = useState({});
  const [extensionDays, setExtensionDays] = useState("");
  // const [reasonType, setReasonType] = useState("");
  const [fileName, setFileName] = useState("");
  const [filePath, setFilePath] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const EnrolledStudent = useSelector((state) => state.studentEnrollment);
  const { loading, studentenrollment, error } = EnrolledStudent;

  const UploadFileResponse = useSelector((state) => state.uploadFileResponse);
  const { loading: uploadloading, uploadFileResponse } = UploadFileResponse;

  const ProjectDetail = useSelector((state) => state.projectDetail);
  const {
    loading: projectloading,
    projectDetail,
    error: projecterror,
  } = ProjectDetail;

  console.log(projectDetail, "p");

  useEffect(() => {
    if (uploadFileResponse?.Result) {
      setFilePath(uploadFileResponse?.Result);
    }
  }, [uploadFileResponse]);

  useEffect(() => {
    dispatch(GetStudentEnrollment());
  }, [dispatch, studentenrollment]);

  const handleClose = () => setShowModal(false);

  const handleExtensionTypeChange = (event) => {
    setExtensionType(event.target.value); 
  };

  useEffect(() => {
    if (selectedCourseId) {
      dispatch(GetProjectDetails(selectedCourseId));
    }
  }, [dispatch, selectedCourseId]);

  useEffect(() => {
    // Fetch project details when a course is selected
    if (studentenrollment && selectedCourseId === "") {
      setSelectedCourseId(studentenrollment[0].CourseId);
    }
  }, [studentenrollment, selectedCourseId]);

  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    setSelectedCourseId(courseId);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes

    if (selectedFile && selectedFile.size > maxSize) {
      // setError("File size should not exceed 10MB.");
      setFile(null);
    } else {
      // Create FormData and append file and other fields
      const fileWithoutExtension = selectedFile.name.replace(/\.[^/.]+$/, "");
      setFileName(fileWithoutExtension);

      const formData = new FormData();
      formData.append("file", selectedFile); 
      formData.append("uploadFileName", fileWithoutExtension);
      formData.append("fileDirectory", "ULearnLMS/Projects/Test/"); 

      // Dispatch the upload action with FormData
      dispatch(UploadFile(formData));
    }
  };

  const handleRequestClick = (project) => {
    setSelectedProject({
      title: project.ModuleName,
      dueDate: project.DueDate,
      projectId: project.ProjectId,
    });
    setShowModal(true); // Open the modal
  };

  const viewHandler = async (action, projectId) => {
    const refresh = "refresh";
    if (action === "Start") {
      try {
        // Wait for the first dispatch to complete
        await dispatch(GetProjectModuleDetails(projectId));

        // After it's done, trigger the second dispatch
        dispatch(GetProjectDetails(selectedCourseId, refresh));
      } catch (error) {
        console.error("Error fetching project module details:", error);
      }
    } else {
      navigate(
        `/ViewProject?projectId=${projectId}&courseId=${selectedCourseId}`
      );
    }
  };

  const handleFormSubmit = async () => {
    const ProjTitle = selectedProject.title;
    const DueDate = selectedProject.dueDate;
    const CourseId = selectedCourseId;
    const ModuleId = selectedProject.projectId;
    const reasonType = extensionType;

    // Call the ProjectExtension action with the collected data
    dispatch(
      ProjectExtension(
        ProjTitle,
        DueDate,
        reasonType,
        fileName,
        filePath,
        description,
        extensionDays,
        CourseId,
        ModuleId
      )
    );

    setShowModal(false); // Close modal after submission
  };

  const tableHeadings = [
    "Module",
    "Start Date",
    "Due Date",
    "Days Left",
    "Submitted Date",
    "Status",
    "Extension Request",
    "Score",
    "Grade",
    "Action",
  ];

  return (
    <Container fluid className="bg-light">
      <div className="pdrow">
        <div className="text-dark pt-4 pb-3">
          <h2 className="project-heading text-dark pb-2">
            <b>Project and Assignments Details</b>
          </h2>
        </div>
        <div>
          <select
            className="col-md-6"
            value={selectedCourseId}
            onChange={handleCourseChange}
          >
            {loading ? "Loading" : ""}
            {error ? "error while fetching" : ""}
            {studentenrollment?.map((data, i) => (
              <option value={data?.CourseId} key={i}>
                {data?.CourseName}
              </option>
            ))}
          </select>
        </div>
        <hr className="certifiedmanagerhr" />
        <Table responsive className="my-4" bordered hover>
          <thead>
            <tr>
              <th></th>
              {tableHeadings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projectDetail?.map((project, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{project.ModuleName}</td>
                <td>{FormatDate(project.ProjectStartDate)}</td>
                <td>{FormatDate(project.DueDate)}</td>
                <td>{project.DaysLeft || ""}</td>
                <td>{FormatDate(project.SubmittedDate) || ""}</td>
                <td>{project.ProjectCurrentStatus}</td>
                <td
                  onClick={
                    project.ProjectCurrentStatus
                      ? () => handleRequestClick(project) // Pass the whole project object
                      : null
                  }
                  style={{
                    cursor: project.ProjectCurrentStatus
                      ? "pointer"
                      : "default",
                  }}
                >
                  {project.ProjectCurrentStatus ? "Request" : "N/A"}
                </td>
                <td>{project.Score || ""}</td>
                <td>{project.Grade || ""}</td>
                <td
                  onClick={() => viewHandler(project.Action, project.ProjectId)}
                  style={{ cursor: "pointer" }}
                >
                  {project.Action}
                </td>
              </tr>
            ))}
            {/* In case no project details are available */}
            {projectloading && (
              <tr>
                <td colSpan={tableHeadings.length + 1} className="text-center">
                  Loading...
                </td>
              </tr>
            )}
            {projecterror && (
              <tr>
                <td colSpan={tableHeadings.length + 1} className="text-center">
                  No project details available for the selected course.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <Modal show={showModal} centered onHide={handleClose} size="lg">
          <Modal.Header closeButton className="request-modal">
            <Modal.Title className="h5">Request Form</Modal.Title>
          </Modal.Header>
          <Modal.Body className="request-body">
            <div
              style={{ border: "1px solid grey" }}
              className="form-control h-100 "
            >
              <small className="text-danger">
                Your current due date is{" "}
                <strong>{FormatDate(selectedProject?.dueDate)}</strong> and your
                extension request will be accepted after approval .
              </small>
            </div>
            <div className="py-2">
              <Form>
                <div className="d-flex gap-3 w-100 flex-wrap">
                  <Form.Group
                    className="mb-2 col-md-4 col-12"
                    controlId="formGroupEmail"
                  >
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Project Title"
                      value={selectedProject.title}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2 col-md-4 col-12"
                    controlId="formGroupPassword"
                  >
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Due Date"
                      value={FormatDateAndTime(selectedProject?.dueDate)} // Display selected due date
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2 col-md-3 col-12"
                    controlId="formGroupPassword"
                  >
                    <Form.Label className="text-dot">
                      No. of Days for Extension
                    </Form.Label>
                    {/* <Form.Select aria-label="Default select example">
                      <option>select days</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                      <option value="3">6</option>
                    </Form.Select> */}
                    <Form.Control
                      type="number"
                      placeholder="No. of Days for Extension"
                      value={extensionDays}
                      onChange={(e) => setExtensionDays(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div className="mb-3 mt-2">
                  <Form.Check
                    inline
                    label="Paid Extension"
                    name="extensionType"
                    type="radio"
                    value="paid"
                    checked={extensionType === "paid"}
                    id="paid-extension"
                    onChange={handleExtensionTypeChange}
                  />
                  <Form.Check
                    inline
                    label="Medical"
                    name="extensionType"
                    type="radio"
                    checked={extensionType === "medical"}
                    value="medical"
                    id="medical-extension"
                    onChange={handleExtensionTypeChange}
                  />
                </div>
                {extensionType === "paid" && (
                  <div className="mb-3">
                    <Form.Group className="mb-2 col-md-3 col-12">
                      <Form.Label className="text-dot">Reason</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        //  value={reasonType} onChange={(e) => setReasonType(e.target.value)}
                      >
                        <option>Select Reason</option>
                        <option value="Travel">Travel</option>
                        <option value="Late">Late</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                )}

                {extensionType === "medical" && (
                  <>
                    <div className="mb-3">
                      <Form.Group className="mb-4 col-md-6 col-12">
                        <Form.Label>
                          Proof of genuineness (Upload supporting documents)
                        </Form.Label>
                        <Form.Control
                          type="file"
                          onChange={handleFileChange}
                          accept=".jpg,.jpeg,.png,.pdf,.docx" // Adjust allowed file types as needed
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-2 col-12">
                        <Form.Label>Detailed Explanation</Form.Label>
                        <Form.Control
                          type="text"
                          as="textarea"
                          placeholder="Enter Detailed Explanation"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </Form.Group>
                    </div>
                  </>
                )}
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer className="completed-btnwrap">
            <Button
              className="default-btn my-3"
              variant="primary"
              onClick={handleFormSubmit}
              disabled={uploadloading}
            >
              {uploadloading
                ? "File Uploading..."
                : extensionType === "medical"
                ? "Submit"
                : "Proceed to Pay"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
};

export default ProjectAndAssignement;
