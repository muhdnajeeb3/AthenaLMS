import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const ProjectAndAssignement = () => {
  const navigate = useNavigate();
  const viewHandler = () => {
    navigate("/ViewProject");
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
          <select className="col-md-6">
            <option selected="selected" value="22">
              Certified Manager
            </option>
            <option value="10">
              Diploma in International Business &amp; Strategy (SCQF Level 11)
            </option>
            <option value="4">
              Diploma in Supply Chain and Logistics Management (SCQF Level 11)
            </option>
            <option value="32">Doctorate of Business Administration</option>
            <option value="19">Executive MBA</option>
            <option value="25">Executive MBA - Business Analytics</option>
            <option value="2">
              Extended Diploma in International Business and Strategy (SCQF
              Level 11)
            </option>
            <option value="1112">GLOBAL MBA</option>
            <option value="43">Integrated DBA</option>
            <option value="49">Master In Data Sciences</option>
            <option value="54">
              Master in Innovation and Entrepreneurship
            </option>
            <option value="82">Master in Public Administration</option>
            <option value="48">
              Master in Supply Chain and Logistics Management
            </option>
            <option value="13">Master of Business Administration</option>
            <option value="87">Master of Business Administration</option>
            <option value="78">
              Master of Business Administration - Blockchain Management
            </option>
            <option value="1">
              Master of International Business Administration
            </option>
            <option value="42">MBA in General Management</option>
            <option value="33">
              Postgraduate Certificate in Business Analytics
            </option>
            <option value="17">
              Postgraduate Certificate in Business Sustainability
            </option>
            <option value="34">
              Postgraduate Certificate in Human Resource &amp; Leadership
            </option>
            <option value="16">
              Postgraduate Certificate In International Human Resource
              Management
            </option>
            <option value="15">
              Postgraduate Certificate in International Marketing Management
            </option>
            <option value="69">
              Postgraduate Certificate In Machine Learning
            </option>
            <option value="9">
              Postgraduate Certificate in Procurement &amp; Contracts Management
            </option>
            <option value="27">
              Postgraduate Certificate in Strategic Supply Chain &amp; Logistics
              Management
            </option>
            <option value="76">
              Postgraduate Diploma in Project Management
            </option>
            <option value="7">
              Strategic Human Resource Management Practitioner
            </option>
            <option value="52">Test Course</option>
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
            <tr>
              <td></td>
              <td>Leadership & Strategy</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Not Enrolled</td>
              <td>N/A</td>
              <td></td>
              <td></td>
              <td onClick={viewHandler} style={{ cursor: "pointer" }}>
                View
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Leadership & Strategy</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Not Enrolled</td>
              <td>N/A</td>
              <td></td>
              <td></td>
              <td onClick={viewHandler} style={{ cursor: "pointer" }}>
                View
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Leadership & Strategy</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Not Enrolled</td>
              <td>N/A</td>
              <td></td>
              <td></td>
              <td onClick={viewHandler} style={{ cursor: "pointer" }}>
                View
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Leadership & Strategy</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Not Enrolled</td>
              <td>N/A</td>
              <td></td>
              <td></td>
              <td onClick={viewHandler} style={{ cursor: "pointer" }}>
                View
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default ProjectAndAssignement;
