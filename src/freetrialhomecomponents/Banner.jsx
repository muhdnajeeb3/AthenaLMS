import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);
  const [speakmethode, setSpeakmethode] = useState("email");

  const SpeakMethodeHandler = (methode) => {
    setSpeakmethode(methode);
  };
  const divs = ["Blocked", "Expired", "Enrolled"];

  const handlePrev = () => {
    setCurrentDivIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentDivIndex((prevIndex) => Math.min(prevIndex + 1, divs.length - 1));
  };
  return (
    <Container fluid className="bg-light">
      <Row className="homebannerrow">
        <div className="col-md-6 py-5 home-box-v1">
          <h2 className="greeting pb-2">
            <span id="MainContent_lblUser">Good Afternoon, Muizz</span>
          </h2>
          <p>
            We are what we repeatedly do. Excellence then is not an act but a
            habit. <br />
            Aristotle
          </p>
          <div className="newmailbox" style={{ padding: "15px 20px" }}>
            <div className="speaktowrapper">
              <div className="">
                Still Not Sure ?
                <br />
                <div className="w-100 speakto">
                  <span>Speak to an Advisor</span>
                  <hr className="speakto-line" />
                </div>
                <p className="mt-3">How would you like to be contacted?</p>
                <div className="speakoptions">
                  <div>
                    <input
                      type="radio"
                      name="contactMethod"
                      id="Email"
                      onClick={() => SpeakMethodeHandler("Email")}
                    />
                    <label htmlFor="Email">Email</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="contactMethod"
                      id="whatsapp"
                      onClick={() => SpeakMethodeHandler("Whatsapp")}
                    />
                    <label htmlFor="whatsapp">Whatsapp</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="contactMethod"
                      id="Telephone"
                      onClick={() => SpeakMethodeHandler("Telephone")}
                    />
                    <label htmlFor="Telephone">Telephone</label>
                  </div>
                </div>
                <form action="">
                {speakmethode === "Email" ? (
                    <>
                      <p className="mt-3">Please provide your Email Address</p>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="speattoemail w-100"
                        placeholder="Enter Your Email"
                      />
                    </>
                  ) : speakmethode === "Whatsapp" || speakmethode === "Telephone" ? (
                    <>
                      <p className="mt-3">
                        Please provide your{" "}
                        {speakmethode === "Whatsapp" ? "Whatsapp" : "Phone"}{" "}
                        Number
                      </p>

                      <div className="phoneinputwrap w-100">
                        <PhoneInput
                          placeholder="Enter phone number"
                          //   value={value}
                          //   onChange={setValue}
                          defaultCountry="IN"
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <Button className="speaksubmit-btn mt-2 mb-4">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Col className="col-md-6 pt-5 home-main-box-v2" style={{paddingBottom:'5rem'}}>
          <div>
            {divs.map((divContent, index) => (
              <div
                className="home-v2box"
                key={index}
                style={{
                  display: currentDivIndex === index ? "block" : "none",
                }}
              >
                <div className="flex moduledate">
                  <div className="datestatuswrap flex">
                    <span>
                      <b>October 17,2022</b>
                    </span>
                    <span className="status">{divContent}</span>
                  </div>
                  {divContent === "Expired" && (
                    <div className="dropcourse">
                      <span>Drop this Course</span>
                      <img
                        src="https://ulearn.uniathena.com/Images/v2-icons/close.jpg"
                        alt=""
                      />
                    </div>
                  )}
                </div>
                <h3 className="my-3">
                  Master of Business Administration - Blockchain Management
                </h3>
                <hr className="hr-br-yellow" />
                <h5 className="pt-2">
                  <strong>University: </strong>Guglielmo Marconi University,
                  Italy
                </h5>
                <hr className="mt-3" />
                <div className="highlightwrap">
                  <div className="col-lg-6">
                    <img src="https://ulearn.uniathena.com/Images/v2-icons/total-fee.svg" alt="" width='44'/>
                    <span>
                      <b>$5900.00 - Flexible</b> <br />
                      <b>$5000.00 - Fastrack</b>
                    </span>
                  </div>
                  <div className="col-lg-6">
                    <img src="https://ulearn.uniathena.com/Images/v2-icons/duration.svg" alt="" width='44'/>
                    <span>
                      <b>Course Duration</b> <br />
                      Flexible (9 to 24 Months)
                    </span>
                  </div>
                  <div className="col-lg-6">
                    <img src="https://ulearn.uniathena.com/Images/v2-icons/accreditations.svg" alt="" width='44'/>
                    <span>
                      <b>Accreditations</b> <br />
                      Ministry of Education, Italy
                    </span>
                  </div>
                  <div className="col-lg-6">
                    <img src="https://ulearn.uniathena.com/Images/v2-icons/completely-online.svg" alt="" width='44'/>
                    <span>
                      <b>Completely Online</b> <br />
                      Learn @ your comfort
                    </span>
                  </div>
                  <div className="col-lg-6">
                    <img src="https://ulearn.uniathena.com/Images/v2-icons/personal-tutor.svg" alt="" width='44'/>
                    <span>
                      <b>Personal Tutor</b> <br />
                      Helps you with learning
                    </span>
                  </div>
                  <div className="col-lg-6">
                    <img src="https://ulearn.uniathena.com/Images/v2-icons/dual-certification.svg" alt="" width='44'/>
                    <span>
                      <b>Certification</b> <br />
                      MBABM, PG Diploma & Certified Manager (Optional)
                    </span>
                  </div>
                  
                </div>
                <div className="box-btn-wrap my-4">
                <Link to="/UnitDetailView">
                    <Button className="resume-learning">
                      <span>RESUME LEARNING</span>
                    </Button>
                  </Link>
                  <Link to="/CourseDetails">
                    <Button className="goto-course" variant="">
                      <img
                        src="https://ulearn.uniathena.com/Images/icons/cursor.svg"
                        alt=""
                      />
                      <span>GO TO COURSE HOME</span>
                    </Button>
                  </Link>
                </div>
                <hr className="my-3" />

                <p className="text-center">
                  Know More About this Course &amp; Fee
                </p>
                <div className="gotodetailpage">
                  <Button variant="warning" className="gotodetailpage-btn">
                    Go to Course Details Page
                  </Button>
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
              disabled={currentDivIndex === divs.length - 1}
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
