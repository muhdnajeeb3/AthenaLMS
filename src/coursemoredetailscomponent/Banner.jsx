import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Container fluid className="bg-light">
        <div className="moduledetailwrap">
          <div className="text-dark pt-4 pb-3 mdtoprow cmd">
            <div>
              <h2 className="project-heading text-dark pb-1">
                <b>Master of Business Administration - Blockchain Management</b>
              </h2>
              <p>
                <b>University : </b>
                Guglielmo Marconi University, Italy
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container fluid className="dash-module-wrap py-2">
        <Row className="dash-module-content py-4">
          <Col className="">
            <div className="dashcontent">
              <div>
                <img
                  src="https://ulearn.uniathena.com/Images/icons/duration.svg"
                  alt=""
                  width={24}
                />
              </div>
              <div>
                <h6 className="font-14">
                  <b>Duration</b>
                </h6>
                <p>Flexible (9 to 24 Months)</p>
              </div>
            </div>
          </Col>
          <Col className="">
            <div className="dashcontent">
              <div>
                <img
                  src="https://ulearn.uniathena.com/Images/icons/course-level.svg"
                  alt=""
                  width={32}
                />
              </div>
              <div>
                <h6 className="font-14">
                  <b>Course Level & Credits</b>
                </h6>
                <p>
                  <b>Master Degree</b>
                  <br />
                  Credits 60 (ECTS)
                </p>
                <Link to="/ECTS">
                  <Button className="ect-btn">What is ECTS?</Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <div className="dashcontent">
              <div>
                <img
                  src="https://ulearn.uniathena.com/Images/icons/total-learners.svg"
                  alt=""
                  width={31}
                />
              </div>
              <div>
                <h6 className="font-14">
                  <b>Total Learners</b>
                </h6>
                <p>6200+</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="dashcontent">
              <div>
                <img
                  src="https://ulearn.uniathena.com/Images/icons/total-learners.svg"
                  alt=""
                  width={31}
                />
              </div>
              <div>
                <h6 className="font-14">
                  <b>Delivery Model</b>
                </h6>
                <p>Online</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-light">
        <div className="payprogressrow">
          <div className="col-md-7 px-2">
            <div className="pr-5 pt-4 text-justify">
              <div className="pt-2 pb-0 w-100">
                <p>
                  The Master of Business Administration- Blockchain management
                  provides a solid understanding of blockchain fundamentals and
                  application of Blockchain to current business operations thus
                  opening new pathways within organizations. It is a 60 ECTS
                  program from Guglielmo Marconi University (GMU), Italy. It
                  comprises six modules and dissertation.: It is 100% Online
                  with Personal Tutor support. The program can be completed
                  within 9-24 months based on students’ pace and time
                  availability. Additional certification is Postgraduate Diploma
                  in Blockchain Management from Cambridge International
                  Qualifications (CIQ), UK. GMU, accredited by the Ministry of
                  Education, Italy, is a member of the Bologna Process in the
                  European Higher Education Area (EHEA) and also a NARIC
                  approved university.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5"></div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
