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
import { FormatDate } from "../utils/FormateDate";

const ProjectAndAssignement = () => {
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [extensionType, setExtensionType] = useState("paid"); // Tracks whether Paid Extension or Medical is selected
  const [selectedCourseId, setSelectedCourseId] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const EnrolledStudent = useSelector((state) => state.studentEnrollment);
  const { loading, studentenrollment, error } = EnrolledStudent;

  const ProjectDetail = useSelector((state) => state.projectDetail);
  const {
    loading: projectloading,
    projectDetail,
    error: projecterror,
  } = ProjectDetail;

  console.log(projectDetail, "p");

  useEffect(() => {
    dispatch(GetStudentEnrollment());
  }, [dispatch, studentenrollment]);

  const handleClose = () => setShowModal(false);

  const handleExtensionTypeChange = (event) => {
    setExtensionType(event.target.value); // Update the state based on the selected radio button
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
                onClick={project.ProjectCurrentStatus ? () => setShowModal(true) : null}
                style={{ cursor: project.ProjectCurrentStatus ? "pointer" : "default" }}
                >{project.ProjectCurrentStatus ? "Request" : "N/A"}</td>
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
                Your current due date is <strong>31-Dec-2023</strong> and your
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
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-2 col-md-4 col-12"
                    controlId="formGroupPassword"
                  >
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="text" placeholder="Due Date" />
                  </Form.Group>
                  <Form.Group
                    className="mb-2 col-md-3 col-12"
                    controlId="formGroupPassword"
                  >
                    <Form.Label className="text-dot">
                      No. of Days for Extension
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>select days</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                      <option value="3">6</option>
                    </Form.Select>
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
                  <Form.Select aria-label="Default select example">
                    <option>Select Reason</option>
                    <option value="1">Travel</option>
                    <option value="2">Late</option>
                    <option value="3">Other</option>
                  </Form.Select>
                </Form.Group>
              </div>
            )}

            {extensionType === "medical" && (
              <>
                <div className="mb-3">
                  <Form.Group className="mb-2 col-md-6 col-12">
                    <Form.Label>Proof of genuineness (Upload supporting documents)</Form.Label>
                    <Form.Control type="file" />
                    <Button className="default-btn my-3">Upload</Button>
                  </Form.Group>
                  <Form.Group className="mb-2 col-12">
                    <Form.Label>Detailed Explanation</Form.Label>
                    <Form.Control type="text" as="textarea" placeholder="Enter Detailed Explanation" />
                  </Form.Group>
                </div>
              </>
            )}
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer className="completed-btnwrap">
            <Button variant="primary" onClick="{handleSaveNotes}">
              {" "}
              {extensionType === "medical" ? "Submit" : "Proceed to Pay"}
              
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
};

export default ProjectAndAssignement;
