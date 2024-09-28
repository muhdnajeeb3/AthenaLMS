import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { GetStudentEnrollment } from "../actions/courseDetails";
import Loader from "../reusablecomponents/Loader";
import { FormatDateAndTime } from "../utils/FormateDate";

const Banner = () => {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-down");
  const divs = ["Blocked", "Expired", "Enrolled"];

  const handlePrev = () => {
    setCurrentDivIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setAnimationClass("slide-up");
  };

  const handleNext = () => {
    setCurrentDivIndex((prevIndex) => Math.min(prevIndex + 1, divs.length - 1));
    setAnimationClass("slide-down");
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const EnrolledStudent = useSelector((state) => state.studentEnrollment);
  const { loading, studentenrollment, error } = EnrolledStudent;

  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo } = studentLogin;

  let FirstName = studentInfo && studentInfo[0]?.FirstName;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetStudentEnrollment());
  }, [dispatch]);

  const coursedetailHandler = (courseid) => {
    navigate(`/courseDetails?CourseId=${courseid}`);
  };
  const PaydetailHandler = (courseid) => {
    navigate(`/EnrolToCourse?CourseId=${courseid}`);
  };
  // Get the current hour (0-23)
  const currentHour = new Date().getHours();

  // Determine the greeting message based on the current time
  let greetingMessage = '';

  if (currentHour < 12) {
    greetingMessage = 'Good Morning';
  } else if (currentHour < 18) {
    greetingMessage = 'Good Afternoon';
  } else {
    greetingMessage = 'Good Evening';
  }

  return (
    <Container fluid className="bg-light container-pr">
      <div className="quick-enq">
        <Link to="/bookaCall"> &nbsp;</Link>

        <Link to="">&nbsp;</Link>
        <Link to="mailto:see@uniathena.com">&nbsp;</Link>
        <img src="https://ulearn.uniathena.com/Images/group-4.png" width={77} />
      </div>
      <Row className="homebannerrow">
        <div className="col-md-6 py-5 home-box-v1">
        <h2 className="greeting pb-2">
        <span className="greeting-text">
              <span>{greetingMessage},</span> {FirstName || "username"}
              </span>
          </h2>
          <p>
            If a man empties his purse into his head, no man can take it away
            from him. An investment in knowledge always pays the best interest.{" "}
            <br />
            <b>Ben Franklin</b>
          </p>
          <div className="newmailbox" style={{ padding: "15px 20px" }}>
            <div className="newmailwrapper">
              <div className="newmailnotifyrow">
                <div>
                  <b>You have new mail notification</b>
                </div>
                <div className="mailnumber">
                  <span>22</span>
                </div>
              </div>
              <div className="mailview">
                <Link to="/InboxMails">View</Link>
              </div>
            </div>
          </div>
          <div className="newmailbox mt-4" style={{ minHeight: "560px" }}>
            <div
              className="newmailwrapper"
              style={{ flexDirection: "row", padding: "15px 20px" }}
            >
              <div className="newmailnotifyrow">
                <b>Upcoming Webinars</b>
              </div>
              <div className="mailnumber">
                <span>4</span>
              </div>
            </div>
            <div>
              <Slider {...settings}>
                <div className="webinarwrap">
                  <div>
                    <h4 className="webinartitle px-3">
                      SQL Mastery: Techniques for Data Manipulation
                    </h4>
                  </div>
                  <div className="webinarpeoplerow my-4 px-4">
                    <div className="peoplecard">
                      <div className="employers-list-img mt-3">
                        <img
                          src="https://admin.uniathena.com/Files/Uploads/WebinarOrganizer/Atul-B.jpg"
                          className="img-fluid mx-auto d-block rounded-circle"
                        />
                      </div>
                      <div className="grid-list-desc text-center mt-4">
                        <h5 className="mb-1 text-dark">
                          <span>
                            Atul Bengeri
                          </span>
                        </h5>
                        <p className="text-muted f-14 mb-0">
                          <span>
                            Vice President, AcumenToday Pvt Ltd
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="peoplecard">
                      <div className="employers-list-img mt-3">
                        <img
                          src="https://admin.uniathena.com/Files/Uploads/WebinarOrganizer/Atul-B.jpg"
                          className="img-fluid mx-auto d-block rounded-circle"
                        />
                      </div>
                      <div className="grid-list-desc text-center mt-4">
                        <h5 className="mb-1 text-dark">
                          <span>
                            Atul Bengeri
                          </span>
                        </h5>
                        <p className="text-muted f-14 mb-0">
                          <span>
                            Vice President, AcumenToday Pvt Ltd
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="registernow-btn-row">
                    <Link
                      to="https://us06web.zoom.us/webinar/register/8617071434621/WN_gbSQ_aBTSG2u20FFRUxXYA"
                      target="_blank"
                      className="registerbtn"
                    >
                      Register Now
                    </Link>{" "}
                  </div>
                  <div className="webinarliverow">
                    <div>
                      <p>17 Feb 2024 I Saturday I 10:00 AM to 12:00 PM (GMT)</p>
                    </div>
                    <div>
                      <img src="https://ulearn.uniathena.com/Images/Live.png" />
                    </div>
                  </div>
                </div>
                <div className="webinarwrap">
                  <div>
                    <h4 className="webinartitle px-3">
                      SQL Mastery: Techniques for Data Manipulation
                    </h4>
                  </div>
                  <div className="webinarpeoplerow my-4 px-4">
                    <div className="peoplecard">
                      <div className="employers-list-img mt-3">
                        <img
                          src="https://admin.uniathena.com/Files/Uploads/WebinarOrganizer/Atul-B.jpg"
                          className="img-fluid mx-auto d-block rounded-circle"
                        />
                      </div>
                      <div className="grid-list-desc text-center mt-4">
                        <h5 className="mb-1 text-dark">
                          <span>
                            Atul Bengeri
                          </span>
                        </h5>
                        <p className="text-muted f-14 mb-0">
                          <span >
                            Vice President, AcumenToday Pvt Ltd
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="peoplecard">
                      <div className="employers-list-img mt-3">
                        <img
                          src="https://admin.uniathena.com/Files/Uploads/WebinarOrganizer/Atul-B.jpg"
                          className="img-fluid mx-auto d-block rounded-circle"
                        />
                      </div>
                      <div className="grid-list-desc text-center mt-4">
                        <h5 className="mb-1 text-dark">
                          <span id="MainContent_RptWebinarNotification_RptOrganizerDetails_1_Label3_0">
                            Atul Bengeri
                          </span>
                        </h5>
                        <p className="text-muted f-14 mb-0">
                          <span id="MainContent_RptWebinarNotification_RptOrganizerDetails_1_Label4_0">
                            Vice President, AcumenToday Pvt Ltd
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="registernow-btn-row">
                    <Link
                      to="https://us06web.zoom.us/webinar/register/8617071434621/WN_gbSQ_aBTSG2u20FFRUxXYA"
                      target="_blank"
                      className="registerbtn"
                    >
                      Register Now
                    </Link>{" "}
                  </div>
                  <div className="webinarliverow">
                    <div>
                      <p>17 Feb 2024 I Saturday I 10:00 AM to 12:00 PM (GMT)</p>
                    </div>
                    <div>
                      <img src="https://ulearn.uniathena.com/Images/Live.png" />
                    </div>
                  </div>
                </div>
                <div className="webinarwrap">
                  <div>
                    <h4 className="webinartitle px-3">
                      SQL Mastery: Techniques for Data Manipulation
                    </h4>
                  </div>
                  <div className="webinarpeoplerow my-4 px-4">
                    <div className="peoplecard">
                      <div className="employers-list-img mt-3">
                        <img
                          src="https://admin.uniathena.com/Files/Uploads/WebinarOrganizer/Atul-B.jpg"
                          className="img-fluid mx-auto d-block rounded-circle"
                        />
                      </div>
                      <div className="grid-list-desc text-center mt-4">
                        <h5 className="mb-1 text-dark">
                          <span id="MainContent_RptWebinarNotification_RptOrganizerDetails_1_Label3_0">
                            Atul Bengeri
                          </span>
                        </h5>
                        <p className="text-muted f-14 mb-0">
                          <span id="MainContent_RptWebinarNotification_RptOrganizerDetails_1_Label4_0">
                            Vice President, AcumenToday Pvt Ltd
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="peoplecard">
                      <div className="employers-list-img mt-3">
                        <img
                          src="https://admin.uniathena.com/Files/Uploads/WebinarOrganizer/Atul-B.jpg"
                          className="img-fluid mx-auto d-block rounded-circle"
                        />
                      </div>
                      <div className="grid-list-desc text-center mt-4">
                        <h5 className="mb-1 text-dark">
                          <span id="MainContent_RptWebinarNotification_RptOrganizerDetails_1_Label3_0">
                            Atul Bengeri
                          </span>
                        </h5>
                        <p className="text-muted f-14 mb-0">
                          <span id="MainContent_RptWebinarNotification_RptOrganizerDetails_1_Label4_0">
                            Vice President, AcumenToday Pvt Ltd
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="registernow-btn-row">
                    <Link
                      to="https://us06web.zoom.us/webinar/register/8617071434621/WN_gbSQ_aBTSG2u20FFRUxXYA"
                      target="_blank"
                      className="registerbtn"
                    >
                      Register Now
                    </Link>{" "}
                  </div>
                  <div className="webinarliverow">
                    <div>
                      <p>17 Feb 2024 I Saturday I 10:00 AM to 12:00 PM (GMT)</p>
                    </div>
                    <div>
                      <img src="https://ulearn.uniathena.com/Images/Live.png" />
                    </div>
                  </div>
                </div>
                <div className="webinarwrap">
                  <div>
                    <h4 className="webinartitle px-3">
                      SQL Mastery: Techniques for Data Manipulation
                    </h4>
                  </div>
                  <div className="webinarpeoplerow my-4 px-4">
                    <div className="peoplecard">
                      <div className="employers-list-img mt-3">
                        <img
                          src="https://admin.uniathena.com/Files/Uploads/WebinarOrganizer/Atul-B.jpg"
                          className="img-fluid mx-auto d-block rounded-circle"
                        />
                      </div>
                      <div className="grid-list-desc text-center mt-4">
                        <h5 className="mb-1 text-dark">
                          <span id="MainContent_RptWebinarNotification_RptOrganizerDetails_1_Label3_0">
                            Atul Bengeri
                          </span>
                        </h5>
                        <p className="text-muted f-14 mb-0">
                          <span id="MainContent_RptWebinarNotification_RptOrganizerDetails_1_Label4_0">
                            Vice President, AcumenToday Pvt Ltd
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="peoplecard">
                      <div className="employers-list-img mt-3">
                        <img
                          src="https://admin.uniathena.com/Files/Uploads/WebinarOrganizer/Atul-B.jpg"
                          className="img-fluid mx-auto d-block rounded-circle"
                        />
                      </div>
                      <div className="grid-list-desc text-center mt-4">
                        <h5 className="mb-1 text-dark">
                          <span id="MainContent_RptWebinarNotification_RptOrganizerDetails_1_Label3_0">
                            Atul Bengeri
                          </span>
                        </h5>
                        <p className="text-muted f-14 mb-0">
                          <span id="MainContent_RptWebinarNotification_RptOrganizerDetails_1_Label4_0">
                            Vice President, AcumenToday Pvt Ltd
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="registernow-btn-row">
                    <Link
                      to="https://us06web.zoom.us/webinar/register/8617071434621/WN_gbSQ_aBTSG2u20FFRUxXYA"
                      target="_blank"
                      className="registerbtn"
                    >
                      Register Now
                    </Link>{" "}
                  </div>
                  <div className="webinarliverow">
                    <div>
                      <p>17 Feb 2024 I Saturday I 10:00 AM to 12:00 PM (GMT)</p>
                    </div>
                    <div>
                      <img src="https://ulearn.uniathena.com/Images/Live.png" />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <Col className="col-md-6 py-5 home-main-box-v2">
          <div>
            {loading ? <Loader /> : ""}
            <h3>{error ? "Error" : ""} </h3>

            {studentenrollment?.map((data, index) => (
              <div
                className={`home-v2box ${
                  currentDivIndex === index ? animationClass : ""
                }`}
                key={index}
                style={{
                  display: currentDivIndex === index ? "block" : "none",
                }}
              >
                <div className="flex moduledate">
                  <div className="datestatuswrap flex">
                    <span>{FormatDateAndTime(data.EnrolledOn)}</span>
                    <span className="status">Enrolled</span>
                  </div>
                  {data?.status === "Expired" && (
                    <div className="dropcourse">
                      <span>Drop this Course</span>
                      <img
                        src="https://ulearn.uniathena.com/Images/v2-icons/close.jpg"
                        alt=""
                      />
                    </div>
                  )}
                </div>
                <h3 className="my-3">{data?.CourseName}</h3>
                <hr className="hr-br-yellow" />
                <h5 className="pt-2">
                  <strong>University: </strong>Guglielmo Marconi University,
                  Italy
                </h5>
                <hr className="my-4" />
                <div className="currentmodulerow">
                  <h3 className="currentmodule">CURRENT MODULE</h3>
                  <h4>
                    Strategic Leadership and HR Practices in Organizations{" "}
                  </h4>
                  <div>
                    <div className="startedvalidrow">
                      <span>
                        Started on : 08/09/2023 I Valid till 07/11/2023
                      </span>
                      <Link
                        to={`/ModuleDetails?CourseId=${data.CourseId}`}
                        className="gotomodulepage item-center"
                      >
                        <span>Go to Module Home Page </span>
                        <i
                          className="fa fa-arrow-right currentmodule-arrow"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <hr className="my-3" />
                <div className="box-btn-wrap">
                  <Link to="/UnitDetailView">
                    <Button className="resume-learning">
                      <span>RESUME LEARNING</span>
                    </Button>
                  </Link>
                  {/* <Link to="/CourseDetails"> */}
                  <Button
                    className="goto-course"
                    variant=""
                    onClick={() => coursedetailHandler(data.CourseId)}
                  >
                    <img
                      src="https://ulearn.uniathena.com/Images/icons/cursor.svg"
                      alt=""
                    />
                    <span>GO TO COURSE HOME</span>
                  </Button>
                  {/* </Link> */}
                </div>
                <hr className="my-3" />
                <div className="assignmentdue">
                  <div className="bottomline" />
                  <span className="duein">Assignment Submission Due In</span>
                  <span className="days">0 days</span>
                </div>
                <hr className="my-3" />
                <div className="assignmentdue mt-4">
                  <h5>
                    Strategic Leadership and HR Practices in Organizations
                  </h5>
                  <Button className="draftbtn" variant="">
                    Draft
                  </Button>
                </div>
                <div className="assignmentdue">
                  <div className="bottomline" />
                  <span className="duein">Next Module </span>
                </div>
                <hr className="my-3" />
                <div className="assignmentdue mt-4">
                  <h5>Blockchain Fundamentals</h5>
                  {/* <Link to="/EnrollCourse"> */}
                    <Button className="draftbtn" variant="" onClick={()=>PaydetailHandler(data.CourseId)}>
                      Pay Now
                    </Button>
                  {/* </Link> */}
                </div>
                <hr className="my-3" />
                <p className="text-center">
                  Know More About this Course &amp; Fee
                </p>
                <div className="gotodetailpage">
                  <Link to="/CourseMoreDetails">
                    <Button variant="warning" className="gotodetailpage-btn">
                      Go to Course Details Page
                    </Button>
                  </Link>
                </div>

                <div className="btm-demy-card">
                  <div className="card-btm-box-pink" />
                  <div className="card-btm-box-blue" />
                </div>
              </div>
            ))}
            <button
              onClick={handlePrev}
              disabled={currentDivIndex === 0}
              className="modulearrowbtn"
              style={{ top: "35%" }}
            >
              <img src="https://ulearn.uniathena.com/Images/up.png" alt="" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentDivIndex === studentenrollment?.length - 1}
              className="modulearrowbtn"
              style={{ top: "45%" }}
            >
              <img src="	https://ulearn.uniathena.com/Images/down.png" alt="" />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
