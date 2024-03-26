import { useState } from "react";
import { Button, Col, Container, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

const Banner = ({ CourseDetails }) => {
  const [showmore, setShowmore] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => setShowPopup(false);
  const handleShow = () => setShowPopup(true);

  const sidebarShowHideHandler = () => {
    setSidebarShow(!sidebarShow);
  };
  const ShowHideHandler = () => {
    setShowmore(!showmore);
    console.log(showmore);
  };
  const navigate = useNavigate();
  const viewAssignmentHandler = () => {
    navigate("/SubmitAssignments");
  };
  const takelessonHandler = () => {
    navigate("/FasttrackQuiz");
  };
  const bannerbtnHandler = (btn) => {
    navigate(`/${btn}`);
  };
  return (
    <>
      <Container fluid className="bg-light">
        <div className="moduledetailwrap">
          <div className="text-dark pt-4 pb-3 mdtoprow w-100">
            <div>
              <h2 className="project-heading text-dark pb-1">
                <b>Machine Learning</b>
              </h2>
              <p>
                <b>Postgraduate Certificate In Machine Learning</b>
              </p>
            </div>
            <div>
              <Button
                className="dreadmore-btn"
                style={{
                  borderRadius: "0",
                  width: "191px",
                  height: "44px",
                }}
                onClick={() =>
                  bannerbtnHandler(CourseDetails ? "Paynow" : "CourseDetails")
                }
              >
                {CourseDetails ? "Pay Now" : "Go to Course Home"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
      {!CourseDetails && !sidebarShow && (
        <Container fluid className="py-4 milestone-container">
          <div className="milestonewrap">
            <div>
              <h5>Your Planned Schedule for this Module</h5>
            </div>
            <div className="milestoneitemsrow">
              <hr />
              <Col>
                <span className="unittitle">
                  <b>Started</b>
                </span>
                <div className="milestonecompleted" />
                <span className="unittitle">
                  <b>21-03-2023</b>
                </span>
              </Col>
              <Col>
                <span className="unittitle">
                  <b>Unit 2 Assignment</b>
                </span>
                <div className="milestonecompleted" />
                <span className="unittitle">
                  <b>25-04-2023</b>
                </span>
                <Button className="dreadmore-btn unittitle">
                  Improvement Submitted
                </Button>
              </Col>
              <Col>
                <span className="unittitle">
                  <b>Unit 5 Assignment</b>
                </span>
                <div className="milestonecompleted" />
                <span className="unittitle">
                  <b>25-04-2023</b>
                </span>
                <Button className="dreadmore-btn unittitle">
                  Improvement Submitted
                </Button>
              </Col>
              <Col>
                <span className="unittitle">
                  <b>Unit 9 Assignment</b>
                </span>
                <div className="milestonecompleted" />
                <span className="unittitle">
                  <b>25-04-2023</b>
                </span>
                <Button className="dreadmore-btn unittitle">
                  Improvement Submitted
                </Button>
              </Col>
              <Col>
                <span className="unittitle">
                  <b>Unit 10 Assignment</b>
                </span>
                <div className="milestonecompleted" />
                <span className="unittitle">
                  <b>25-04-2023</b>
                </span>
                <Button className="dreadmore-btn unittitle">
                  Pending Resubmission
                </Button>
              </Col>
              <Col>
                <span className="unittitle">
                  <b>Completed</b>
                </span>
                <div className="milestonecompleted" />
                <span className="unittitle">
                  <b>21-08-2023</b>
                </span>
              </Col>
            </div>
          </div>
        </Container>
      )}
      {CourseDetails && !sidebarShow && (
        <Container
          fluid
          className="module-list"
          style={{
            justifyContent: "center",
            display: "flex",
            padding: "2rem",
          }}
        >
          <Button className="quizz-assign-btn" variant="">
            View Assignment
          </Button>
        </Container>
      )}
      <Container fluid className="py-4 bg-light">
        <div className="moduledetailwrap pt-4" style={{ position: "relative" }}>
          <Button
            className="arrow-showhide-moduledetail-btn shadow"
            variant=""
            onClick={sidebarShowHideHandler}
          >
            <span
              style={{
                transform: sidebarShow ? "rotate(270deg)" : "rotate(90deg)",
              }}
            >
              {">>"}
            </span>
          </Button>
          <div className="col-md-9">
            <div className="bg-white shadow">
              <div
                className="py-4 course-modules-wrap"
                style={{ height: showmore ? "" : "575px", overflow: "hidden" }}
              >
                <h5 className="modulecardheading">1. Machine Learning</h5>
                <p className="pl-4 pb-2">
                  Estimated time to complete: 30 hours.
                </p>
                <hr />
                <ul className="module-list clearfix">
                  <li>Chapter 1 Fundamentals to Machine Learning</li>
                  <li>
                    <span>Introduction to Machine Learning</span>
                    <Link to="/UnitDetailView">
                      <Button className="openlesson-btn text-center text-white">
                        <b>Open Lesson</b>
                      </Button>
                    </Link>
                  </li>

                  <li>
                    <span>Concept of Machine Learning</span>
                    <Link to="/UnitDetailView">
                      <Button className="openlesson-btn text-center text-white">
                        <b>Open Lesson</b>
                      </Button>
                    </Link>
                  </li>

                  <li>
                    <span>Examples of Machine Learning Application</span>
                    <Link to="/UnitDetailView">
                      <Button className="openlesson-btn text-center text-white">
                        <b>Open Lesson</b>
                      </Button>
                    </Link>
                  </li>

                  <li>
                    <span>Application of Machine Learning</span>
                    <Link to="/UnitDetailView">
                      <Button className="openlesson-btn text-center text-white">
                        <b>Open Lesson</b>
                      </Button>
                    </Link>
                  </li>
                </ul>
                <ul className="module-list clearfix">
                  <li>Chapter 2 Fundamentals to Machine Learning</li>
                  <li>
                    <span>Introduction to Machine Learning</span>
                    <Link to="/UnitDetailView">
                      <Button className="openlesson-btn text-center text-white">
                        <b>Open Lesson</b>
                      </Button>
                    </Link>
                  </li>

                  <li>
                    <span>Concept of Machine Learning</span>
                    <Link to="/UnitDetailView">
                      <Button className="openlesson-btn text-center text-white">
                        <b>Open Lesson</b>
                      </Button>
                    </Link>
                  </li>

                  <li>
                    <span>Examples of Machine Learning Application</span>
                    <Link to="/UnitDetailView">
                      <Button className="openlesson-btn text-center text-white">
                        <b>Open Lesson</b>
                      </Button>
                    </Link>
                  </li>

                  <li>
                    <span>Application of Machine Learning</span>
                    <Link to="/UnitDetailView">
                      <Button className="openlesson-btn text-center text-white">
                        <b>Open Lesson</b>
                      </Button>
                    </Link>
                  </li>
                  <li
                    style={{
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      borderBottom: "none",
                      marginTop: "1rem",
                    }}
                  >
                    <Button
                      className="quizz-assign-btn"
                      variant=""
                      onClick={takelessonHandler}
                    >
                      Take Lesson Quiz
                    </Button>
                    <Button
                      className="quizz-assign-btn"
                      variant=""
                      onClick={viewAssignmentHandler}
                    >
                      View Assignment
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="text-center py-4">
                <Button
                  className="showmoreless"
                  onClick={ShowHideHandler}
                  variant=""
                >
                  <b>{showmore ? "Show Less" : "show More"}</b>
                </Button>
              </div>
            </div>
            <div className="bg-white shadow my-5 careerhelp">
              <div className=" py-4 course-modules-wrap">
                <div className="course-modules w-100 mb-3">
                  <h3>
                    <b>HOW THIS COURSE WILL HELP YOUR CAREER</b>
                  </h3>
                  <hr />
                </div>
                <p>
                  <strong>Relevant to all industries</strong>
                  <br />
                  Machine learning has applications in all types of industries,
                  including manufacturing, retail, healthcare and life sciences,
                  travel and hospitality, financial services, and energy,
                  feedstock, and utilities. Applications include:
                </p>
                <ul>
                  <ul>
                    <li>
                      <strong>Manufacturing.</strong>Predictive maintenance and
                      condition monitoring
                    </li>
                    <li>
                      <strong>Retail.</strong>Upselling and cross-channel
                      marketing
                    </li>
                    <li>
                      <strong>Healthcare and life sciences.</strong>Disease
                      identification and risk satisfaction
                    </li>
                    <li>
                      <strong>Travel and hospitality.</strong> Dynamic pricing
                    </li>
                    <li>
                      <strong>Financial services.</strong> Risk analytics and
                      regulation
                    </li>
                    <li>
                      <strong>Energy.</strong> Energy demand and supply
                      optimization
                    </li>
                  </ul>
                </ul>
                <p>
                  <strong>Better career opportunities and growth</strong>
                  <br />
                  An increasing number of businesses are realising that business
                  intelligence is profoundly impacted by machine learning, and
                  thus are choosing to invest in it and recruiting people who
                  are specialists in Machine Learning. Machine learning
                  engineers are paid immensely. Digital transformation is a huge
                  industry, and there are simply not enough machine learning
                  professionals to cater to new industry demands.
                </p>
                <p>
                  <strong>Improves accuracy</strong>
                  <br />
                  Machine learning models learn, recognize patterns, and make
                  judgments with little or no human intervention. This course
                  will help you to improve accuracy and efficiency at the
                  workplace while eliminating or considerably reducing the
                  chance of human error.
                </p>
                <p>
                  <strong>Provides valuable insights</strong>
                  <br />
                  Machine learning and Data Science are intricately linked. This
                  course will enable you to analyse huge amounts of data, and
                  then proceed to extract value and provide insights on the data
                  to predict results thereby benefiting the organization.
                </p>
              </div>
            </div>
            {/* FREQUENTLY ASKED QUESTIONS */}
            <div className="bg-white shadow my-5 careerhelp">
              <div className=" py-4 course-modules-wrap">
                <div className="course-modules w-100 mb-3">
                  <h3>
                    <b>FREQUENTLY ASKED QUESTIONS</b>
                  </h3>
                  <hr />
                </div>
                <div className="py-2">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        1. What is the eligibility for the program?
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        2. What are the mandatory documents required for
                        admission?
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        3. What are the mandatory documents required for
                        admission?
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 study-practical">
            {!CourseDetails && (
              <div className="mystudygoal bg-white shadow p-4 mb-3">
                <div>
                  <img
                    src="https://ulearn.uniathena.com/css/image/octicon_goal-24.svg"
                    alt=""
                    width={24}
                  />
                </div>
                <div>
                  <h6>
                    <b>My Study Goal</b>
                  </h6>
                  <p>
                    Learners who set a goal are more likely to complete their
                    course on time or before time{" "}
                  </p>
                  <Button className="setgoal-btn text-center text-white">
                    <b>Set Goal</b>
                  </Button>
                </div>
              </div>
            )}
            {CourseDetails && (
              <div className="mystudygoal connect-tutor bg-white shadow p-4 mb-3">
                <div>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/duration.svg"
                    alt=""
                    width={24}
                    style={{ filter: "invert(1)" }}
                  />
                </div>
                <div>
                  <h6>
                    <b>Connect to your</b>
                  </h6>
                  <p style={{ color: "var(--default)" }}>
                    <b>Personal Tutor</b>
                  </p>
                  <Button
                    className="setgoal-btn text-center text-white"
                    onClick={handleShow}
                  >
                    <b>Connect</b>
                  </Button>
                </div>
              </div>
            )}
            <Modal show={showPopup} onHide={handleClose} centered>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <h6 className="pt-1 py-2">
                  <b>Connect Your Personal Tutor</b>
                </h6>
                <div className="flex gap-10">
                  <Button
                    variant="primary"
                    onClick={handleClose}
                    className="default-btn"
                  >
                    Schedule Meeting
                  </Button>
                  <Link to="/bookaCall">
                    <Button
                      variant="primary"
                      onClick={handleClose}
                      className="default-btn"
                    >
                      Request Call Back
                    </Button>
                  </Link>
                </div>
              </Modal.Body>
            </Modal>
            <div className="practicalinfo bg-white shadow p-4 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>PRACTICAL INFO</b>
                </h5>
              </div>
              <div className="practicaldetails">
                <div>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/duration.svg"
                    alt=""
                    width={24}
                    className="practical-dur-logo"
                  />
                </div>
                <div>
                  <h6>
                    <b>Duration</b>
                  </h6>
                  <p>21 to 60 Days</p>
                </div>
                <hr />
              </div>
              <hr />
              <div className="practicaldetails">
                <div>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/university.svg"
                    alt=""
                    width={31}
                  />
                </div>
                <div>
                  <h6>
                    <b>University</b>
                  </h6>
                  <p>Cambridge International Qualifications (CIQ), UK</p>
                </div>
              </div>
              <hr />
              <div className="practicaldetails">
                <div>
                  <img
                    src="	https://ulearn.uniathena.com/Images/icons/language.svg"
                    alt=""
                    width={33}
                  />
                </div>
                <div>
                  <h6>
                    <b>Language</b>
                  </h6>
                  <p>English</p>
                </div>
              </div>
              <hr />
              <div className="practicaldetails">
                <div>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/course-level.svg"
                    alt=""
                    width={32}
                    className="practical-dur-logo"
                  />
                </div>
                <div>
                  <h6>
                    <b>Course Level</b>
                  </h6>
                  <p>Certificates</p>
                </div>
              </div>
              <hr />
              <div className="practicaldetails">
                <div>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/cmparitive.svg"
                    alt=""
                    width={30}
                  />
                </div>
                <div>
                  <h6>
                    <b>Comparitive Levels</b>
                  </h6>
                  <div
                    className="practicaldetails pb-2"
                    style={{ gap: "10px" }}
                  >
                    <img
                      src="https://ulearn.uniathena.com/Images/icons/eqf.svg"
                      alt=""
                      width={27}
                    />
                    <span>EQF Level 7</span>
                  </div>
                  <div
                    className="practicaldetails pb-2"
                    style={{ gap: "10px" }}
                  >
                    <img
                      src="https://ulearn.uniathena.com/Images/icons/qcf.svg"
                      alt=""
                      width={27}
                    />
                    <span>QCF Level 7</span>
                  </div>
                  <div className="practicaldetails" style={{ gap: "10px" }}>
                    <img
                      src="https://ulearn.uniathena.com/Images/icons/nqf.svg"
                      alt=""
                      width={27}
                    />
                    <span>NQF Level 9</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="practicaldetails">
                <div>
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/total-learners.svg"
                    alt=""
                    width={31}
                    className="practical-dur-logo"
                  />
                </div>
                <div>
                  <h6>
                    <b>Total Learners</b>
                  </h6>
                  <p>500+</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
