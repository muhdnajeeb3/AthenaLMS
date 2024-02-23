import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";
// import samplevideo from "./sample.mp4";
import Vimeo from "@u-wave/react-vimeo";
import EssentialReadings from "./EssentialReadings";
import Table from "react-bootstrap/Table";
import AdditionalResources from "./AdditionalResources";
import pdf from './mn.pdf' 

const Progress = () => {
  const [progressShow, setProgressShow] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [chapter, setChapter] = useState(1);
  const [levels, setLevels] = useState(1);

  const chapterHandler = (id) => {
    setChapter(id);
  };
  const levelHandler = (id) => {
    setLevels(id);
  };
  const ProgressShowHideHandler = () => {
    setProgressShow(!progressShow);
  };
  const sidebarShowHideHandler = () => {
    setSidebarShow(!sidebarShow);
  };
  const now = 60;
  return (
    <>
      <Container
        fluid
        className="bg-white progrescontainer"
        style={{ padding: !progressShow && "1.5rem 0" }}
      >
        <Button
          className="arrow-showhide-btn shadow"
          variant=""
          onClick={ProgressShowHideHandler}
        >
          <span
            style={{
              transform: progressShow ? "rotate(270deg)" : "rotate(90deg)",
            }}
          >
            {">>"}
          </span>
        </Button>
        {!progressShow && (
          <>
            <div className="progresswrap px-3">
              <div className="col-md-4 vcpcirclewrap">
                <div className="vcpcircleitem">
                  <div className="vcpcircle">
                    <span>8</span>
                  </div>
                  <p>Viewed</p>
                </div>
                <div className="vcpcircleitem">
                  <div className="vcpcircle">
                    <span>8</span>
                  </div>
                  <p>Completed</p>
                </div>
                <div className="vcpcircleitem">
                  <div className="vcpcircle">
                    <span>44</span>
                  </div>
                  <p>Pending</p>
                </div>
              </div>
              <div
                className="col-md-8"
                style={{ maxWidth: "760px", paddingRight: "10px" }}
              >
                <div>
                  <ProgressBar now={now} label={`${now}% Completed`} />
                </div>
                <div className="overallstatus">
                  <span>Overall Status </span>
                  <span>{`${now}% Completed`}</span>
                </div>
              </div>
            </div>
            <div className="resumebtnwrap py-2">
              <Button className="resume-first-lesson-btn" variant="">
                Resume First Lesson
              </Button>
            </div>
          </>
        )}
      </Container>
      <Container fluid className="bg-light py-5">
        <div className="coursehomewrap">
          {!sidebarShow && (
            <div className="col-md-3" id="sidebar">
              <div className="shadow bg-white mb-4 w-100 p-3 pt-4">
                <h2 className="coursehometitle">
                  <img
                    src="https://ulearn.uniathena.com/Images/icons/coursehome.svg"
                    alt=""
                  />
                  <Link to="">Course Home</Link>
                </h2>
                <div className="mt-3">
                  <div
                    className="coursechapters"
                    onClick={() => chapterHandler(1)}
                  >
                    <img
                      src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                      alt=""
                      width={13}
                      height={13}
                    />
                    <p>Chapter 1 Fundamentals to Machine Learning</p>
                  </div>
                  {chapter === 1 && (
                    <ul className="coursechaptersections">
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Introduction to Machine Learning</p>
                      </li>
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Concept of Machine Learning</p>
                      </li>
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Examples of Machine Learning Application</p>
                      </li>
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Application of Machine Learning</p>
                      </li>
                    </ul>
                  )}
                </div>
                <div className="mt-3">
                  <div
                    className="coursechapters"
                    onClick={() => chapterHandler(2)}
                  >
                    <img
                      src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                      alt=""
                      width={13}
                      height={13}
                    />
                    <p>Chapter 2 Fundamentals to Machine Learning</p>
                  </div>
                  {chapter === 2 && (
                    <ul className="coursechaptersections">
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Introduction to Machine Learning</p>
                      </li>
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Concept of Machine Learning</p>
                      </li>
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Examples of Machine Learning Application</p>
                      </li>
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Application of Machine Learning</p>
                      </li>
                    </ul>
                  )}
                  <div
                    style={{
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      display: "flex",
                      borderBottom: "none",
                      marginTop: "1rem",
                    }}
                    className="quiz-assignbtn-wrap"
                  >
                    <Button className="quizz-assign-btn" variant="">
                      Take Lesson Quiz
                    </Button>
                    <Button className="quizz-assign-btn" variant="">
                      View Assignment
                    </Button>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className="coursechapters"
                    onClick={() => chapterHandler(3)}
                  >
                    <img
                      src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                      alt=""
                      width={13}
                      height={13}
                    />
                    <p>Chapter 3 Fundamentals to Machine Learning</p>
                  </div>
                  {chapter === 3 && (
                    <ul className="coursechaptersections">
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Introduction to Machine Learning</p>
                      </li>
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Concept of Machine Learning</p>
                      </li>
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Examples of Machine Learning Application</p>
                      </li>
                      <li>
                        <img
                          src="https://ulearn.uniathena.com/Images/icons/Tick-32.png"
                          alt=""
                          width={13}
                          height={13}
                        />
                        <p>Application of Machine Learning</p>
                      </li>
                    </ul>
                  )}
                  <div
                    style={{
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      display: "flex",
                      borderBottom: "none",
                      marginTop: "1rem",
                    }}
                    className="quiz-assignbtn-wrap"
                  >
                    <Button className="quizz-assign-btn" variant="">
                      Take Lesson Quiz
                    </Button>
                    <Button className="quizz-assign-btn" variant="">
                      View Assignment
                    </Button>
                  </div>
                </div>
                <div className="pt-4 flex">
                  <Button
                    className="dreadmore-btn"
                    style={{
                      borderRadius: "3px",
                      width: "165px",
                      height: "44px",
                    }}
                  >
                    GO TO MODULE
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div
            className="col-md-9 chapterview"
            style={{ width: sidebarShow && "100%" }}
          >
            <Button
              className="arrow-showhide-coursehome-btn shadow"
              variant=""
              onClick={sidebarShowHideHandler}
            >
              <span
                style={{
                  transform: sidebarShow ? "rotate(360deg)" : "rotate(180deg)",
                }}
              >
                {">>"}
              </span>
            </Button>
            <div className="shadow bg-white p-4 pt-3 mb-4 w-100">
              <div className="mb-5">
                <h3>
                  <b>Simple & Multiple Linear Regression</b>
                </h3>
                <p>
                  Estimated time to complete:
                  <b>45 mins</b>
                </p>
              </div>
              <div className="col-md-12">
                <div className="flex">
                  <div className="col text-center">
                    <span onClick={() => levelHandler(1)}>Level 1</span>
                  </div>
                  <div className="col text-center">
                    <span onClick={() => levelHandler(2)}>Level 2</span>
                  </div>
                  <div className="col text-center">
                    <span onClick={() => levelHandler(3)}>Level 3</span>
                  </div>
                  <div className="col text-center">
                    <span onClick={() => levelHandler(4)}>Level 4</span>
                  </div>
                </div>
              </div>
              <div className="arrow-steps mt-4 clearfix">
                <div className={`step ${levels === 1 ? "current" : ""}`}>
                  <span>
                    &nbsp;{" "}
                    <span onClick={() => levelHandler(1)}>
                      <i className="fa fa-circle"></i>
                    </span>
                  </span>
                </div>
                <div className={`step ${levels === 2 ? "current" : ""}`}>
                  <span>
                    &nbsp;{" "}
                    <span onClick={() => levelHandler(2)}>
                      <i className="fa fa-circle"></i>
                    </span>
                  </span>
                </div>
                <div className={`step ${levels === 3 ? "current" : ""}`}>
                  <span>
                    &nbsp;{" "}
                    <span onClick={() => levelHandler(3)}>
                      <i className="fa fa-circle"></i>
                    </span>
                  </span>
                </div>
                <div className={`step ${levels === 4 ? "current" : ""}`}>
                  <span>
                    &nbsp;{" "}
                    <span onClick={() => levelHandler(4)}>
                      <i className="fa fa-circle"></i>
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex pt-5 pb-1 level-section-btn-wrap">
                <Button
                  onClick={() => levelHandler(1)}
                  variant=""
                  className={`level-section-btn step ${
                    levels === 1 ? "current" : ""
                  }`}
                >
                  Video Lecture
                  <div className="arrow-down" />
                </Button>

                <Button
                  onClick={() => levelHandler(2)}
                  variant=""
                  className={`level-section-btn step ${
                    levels === 2 ? "current" : ""
                  }`}
                >
                  Essential Readings
                  <div className="arrow-down" />
                </Button>

                <Button
                  onClick={() => levelHandler(3)}
                  variant=""
                  className={`level-section-btn step ${
                    levels === 3 ? "current" : ""
                  }`}
                >
                  Reference Materials
                  <div className="arrow-down" />
                </Button>

                <Button
                  onClick={() => levelHandler(4)}
                  variant=""
                  className={`level-section-btn step ${
                    levels === 4 ? "current" : ""
                  }`}
                >
                  Additional Resources
                  <div className="arrow-down" />
                </Button>
              </div>
              {/* video section */}
              <div
                className={`fadeanimation ${
                  levels === 1 ? "contentactive" : "contentnotactive"
                }`}
              >
                {/* <ReactPlayer url={samplevideo} controls={true} width="100%" height="500px" muted 
                config={{ file: { 
                  attributes: {
                    controlsList: 'nodownload'
                  }
                }}}
                /> */}
                <Vimeo
                  // video="328808137"
                  video="285854272"
                  allowfullscreen="allowfullscreen"
                  height="514"
                  className="vp"
                  showTitle={false}
                  responsive={true}
                />
              </div>
              {levels === 2 && <EssentialReadings />}
              {levels === 3 && (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th colSpan={2}>Description</th>
                      <th>File Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <span>
                          Sweeten to systems thinking and teamwork if you want
                          to stand out in sustainability. Here are the 8
                          attributes of successful sustainability leaders
                        </span>
                      </td>
                      <td>
                      <a href={pdf} download>
                          <img
                            src="https://ulearn.uniathena.com/images/icon-pdf.png"
                            alt=""
                            width="40"
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              )}
              {levels === 4 && <AdditionalResources />}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Progress;
