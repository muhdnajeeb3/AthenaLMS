import { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";

const Banner = () => {
    const [showmore, setShowmore] = useState(false);
    const ShowHideHandler = () => {
        setShowmore(!showmore)
        console.log(showmore);
    }
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
                  margin: "0 0 0 auto",
                  background: " linear-gradient(-90deg, #5c1a88, #300051)",
                  width: "191px",
                  height: "44px",
                }}
              >
                Go to Course Home
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Container fluid className="py-4">
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
              <Button
                className="dreadmore-btn unittitle"
                style={{
                  background: " linear-gradient(-90deg, #5c1a88, #300051)",
                  //   width: "191px",
                  //   height: "44px",
                }}
              >
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
              <Button
                className="dreadmore-btn unittitle"
                style={{
                  background: " linear-gradient(-90deg, #5c1a88, #300051)",
                  //   width: "191px",
                  //   height: "44px",
                }}
              >
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
              <Button
                className="dreadmore-btn unittitle"
                style={{
                  background: " linear-gradient(-90deg, #5c1a88, #300051)",
                  //   width: "191px",
                  //   height: "44px",
                }}
              >
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
              <Button
                className="dreadmore-btn unittitle"
                style={{
                  background: " linear-gradient(-90deg, #5c1a88, #300051)",
                  //   width: "191px",
                  //   height: "44px",
                }}
              >
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
      <Container fluid className="py-4 bg-light">
        <div className="moduledetailwrap">
          <div className="col-md-9 bg-white shadow">
            <div
              className="px-5 py-4"
              style={{ height: showmore ? "" : "575px", overflow: "hidden" }}
            >
              <h5 className="modulecardheading">1. Machine Learning</h5>
              <p className="pl-4 pb-2">Estimated time to complete: 30 hours.</p>
              <hr />
              <ul className="module-list clearfix">
                <li>Chapter 1 Fundamentals to Machine Learning</li>
                <li>
                  <span>Introduction to Machine Learning</span>
                  <Button className="openlesson-btn text-center text-white">
                    <b>Open Lesson</b>
                  </Button>
                </li>

                <li>
                  <span>Concept of Machine Learning</span>
                  <Button className="openlesson-btn text-center text-white">
                    <b>Open Lesson</b>
                  </Button>
                </li>

                <li>
                  <span>Examples of Machine Learning Application</span>
                  <Button className="openlesson-btn text-center text-white">
                    <b>Open Lesson</b>
                  </Button>
                </li>

                <li>
                  <span>Application of Machine Learning</span>
                  <Button className="openlesson-btn text-center text-white">
                    <b>Open Lesson</b>
                  </Button>
                </li>
              </ul>
              <ul className="module-list clearfix">
                <li>Chapter 2 Fundamentals to Machine Learning</li>
                <li>
                  <span>Introduction to Machine Learning</span>
                  <Button className="openlesson-btn text-center text-white">
                    <b>Open Lesson</b>
                  </Button>
                </li>

                <li>
                  <span>Concept of Machine Learning</span>
                  <Button className="openlesson-btn text-center text-white">
                    <b>Open Lesson</b>
                  </Button>
                </li>

                <li>
                  <span>Examples of Machine Learning Application</span>
                  <Button className="openlesson-btn text-center text-white">
                    <b>Open Lesson</b>
                  </Button>
                </li>

                <li>
                  <span>Application of Machine Learning</span>
                  <Button className="openlesson-btn text-center text-white">
                    <b>Open Lesson</b>
                  </Button>
                </li>
                <li style={{justifyContent:'flex-start',flexWrap:'wrap',borderBottom:'none'}}>
                    <Button className="quizz-assign-btn" variant="">Take Lesson Quiz</Button>
                    <Button className="quizz-assign-btn" variant="">Take Lesson Quiz</Button>
                </li>
              </ul>
            </div>
            <div className="text-center py-4">
              <Button
                className="showmoreless"
                onClick={ShowHideHandler}
                variant=""
              >
                <b>{showmore ? 'Show Less' : 'show More'}</b>
              </Button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mystudygoal bg-white shadow p-3 mb-3">
<div><img src="https://ulearn.uniathena.com/css/image/octicon_goal-24.svg" alt="" width={24}/></div>
<div>
    <h6>My Study Goal</h6>
    <p>Learners who set a goal are more likely to complete their course on time or before time  </p>
    <Button className="setgoal-btn text-center text-white">
                    <b>Set Goal</b>
                  </Button>
</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
