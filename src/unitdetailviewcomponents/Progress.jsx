import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

const Progress = () => {
  const [progressShow, setProgressShow] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [chapter, setChapter] = useState(1);

  const chapterHandler = (id) => {
    setChapter(id);
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
            <div className="progresswrap">
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
              <div className="col-md-8" style={{ maxWidth: "760px" }}>
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
      <Container fluid className="bg-light py-3">
        <div className="coursehomewrap">
          {!sidebarShow && (
            <div className="col-md-3" id="sidebar">
              <div className="shadow bg-white mt-4 mb-4 w-100 p-3 pt-4">
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
            <div className="shadow bg-white mt-4 p-4 pt-3 mb-4 w-100">
              <h3>
                <b>Simple & Multiple Linear Regression</b>
              </h3>
              <p>
                Estimated time to complete:
                <b>45 mins</b>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Progress;
