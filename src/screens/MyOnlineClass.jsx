import { useEffect } from "react";
import { Container } from "react-bootstrap";

const MyOnlineClass = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container fluid className="bg-light">
      <div className="pdrow">
        <div className="text-dark pt-4 pb-3">
          <h2 className="project-heading text-dark pb-2">
            <b>Online Classes</b>
          </h2>
        </div>
        <div className="listgridselect-wrap">
          <select className="col-md-6">
            <option selected="selected" value="78">
              Master of Business Administration - Blockchain Management
            </option>
            <option value="69">
              Postgraduate Certificate In Machine Learning
            </option>
            <option value="10">
              Diploma in International Business &amp; Strategy (SCQF Level 11)
            </option>
            <option value="49">Master In Data Sciences</option>
            <option value="13">Master of Business Administration</option>
            <option value="33">
              Postgraduate Certificate in Business Analytics
            </option>
            <option value="1">
              Master of International Business Administration
            </option>
            <option value="34">
              Postgraduate Certificate in Human Resource &amp; Leadership
            </option>
            <option value="17">
              Postgraduate Certificate in Business Sustainability
            </option>
            <option value="27">
              Postgraduate Certificate in Strategic Supply Chain &amp; Logistics
              Management
            </option>
            <option value="9">
              Postgraduate Certificate in Procurement &amp; Contracts Management
            </option>
            <option value="16">
              Postgraduate Certificate In International Human Resource
              Management
            </option>
            <option value="46">Project Management Practitioner - CMI</option>
            <option value="4">
              Diploma in Supply Chain and Logistics Management (SCQF Level 11)
            </option>
            <option value="15">
              Postgraduate Certificate in International Marketing Management
            </option>
            <option value="82">Master in Public Administration</option>
            <option value="1112">GLOBAL MBA</option>
            <option value="54">
              Master in Innovation and Entrepreneurship
            </option>
            <option value="2">
              Extended Diploma in International Business and Strategy (SCQF
              Level 11)
            </option>
            <option value="43">Integrated DBA</option>
            <option value="7">
              Strategic Human Resource Management Practitioner
            </option>
          </select>
          <div>
            <img src="https://ulearn.uniathena.com/Images/icons/list-view.svg" alt="" width={30}/>
            <img src="https://ulearn.uniathena.com/Images/icons/grid-view.svg" alt="" width={30}/>
          </div>
        </div>
        <hr className="certifiedmanagerhr mb-5" />
        <div className="practicalinfo pt-4 ">
          <div className="practicalinfo-title w-100">
            <h5>
              <b>UPCOMING LIVE CLASSES</b>
            </h5>
          </div>
        </div>
        <hr />
        <div className="pb-4">No Data To Display</div>
        <div className="practicalinfo pt-4 ">
          <div className="practicalinfo-title w-100">
            <h5>
              <b>PAST RECORDINGS</b>
            </h5>
          </div>
        </div>
        <hr />
        <div className="upcomingdate-wrap">
        <select>
			<option selected="selected" value="Default">Default</option>
			<option value="Last Week">Last Week</option>
			<option value="Last Month">Last Month</option>
			<option value="Last 3 Month">Last 3 Month</option>
			<option value="View All">View All</option>
		</select>
        </div>
        <div className="pb-5">No Data To Display</div>
      </div>
    </Container>
  );
};

export default MyOnlineClass;
