import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedCourseId, setSelectedCourseId] = useState("");

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
    // Check if studentenrollment data is already available in the state
    dispatch(GetStudentEnrollment());
  }, [dispatch, studentenrollment]);

  useEffect(() => {
    // Fetch project details when a course is selected
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

  const viewHandler = (action, projectId) => {
    const refresh = "refresh";
    if (action === "Start") {
      dispatch(GetProjectModuleDetails(projectId));
      setTimeout(() => {
        dispatch(GetProjectDetails(selectedCourseId, refresh));
      }, 2500);
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
                <td>{project.extensionRequest || "N/A"}</td>
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
      </div>
    </Container>
  );
};

export default ProjectAndAssignement;
