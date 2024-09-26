import { useEffect, useState } from "react";
import { Breadcrumb, Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { GetStudentScore } from "../actions/quizDetails";
import CountUp from "react-countup";
import Loader from "../reusablecomponents/Loader";

const FasttrackTestResult = () => {
  const dispatch = useDispatch();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();

  const TestId = query.get("TestId");

  const StudentScore = useSelector((state) => state.studentScore);
  const { loading, studentScore } = StudentScore;

  // State to track the selected attempt
  const [selectedAttempt, setSelectedAttempt] = useState(null);

  // Set default attempt (last one) on component load
  useEffect(() => {
    if (studentScore && studentScore.length > 0) {
      setSelectedAttempt(studentScore.length - 1); 
    }
  }, [studentScore]);

  useEffect(() => {
    if (TestId) {
      dispatch(GetStudentScore(TestId));
    }
  }, [dispatch, TestId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRowClick = (index) => {
    setSelectedAttempt(index);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling to top
    });
  };

  return (
    <Container fluid>
      <div className="fasttrack-wrap">
        <div className="pt-4">
          <Breadcrumb>
            <Breadcrumb.Item href="/" className="breadcrumb">
              Course Home /
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {loading && <Loader />}
        <div className="result-attempt-wrap mb-5">
          {studentScore && studentScore.length > 0 && (
            <>
              {/* Show the selected attempt */}
              {selectedAttempt !== null && (
                <div>
                  <div className="flex item-center row-col p-3">
                    <strong className="text-center attempt-title">
                      Attempt {selectedAttempt + 1}
                    </strong>
                    <div className="result-percentage text-center">
                      <CountUp
                        end={studentScore[selectedAttempt]?.Score}
                        duration={2}
                      />
                      %
                    </div>
                  </div>
                  {studentScore[selectedAttempt]?.StudQuizAttempt?.map(
                    (question, qIndex) => (
                      <div className="question-answer-wrap pt-3" key={qIndex}>
                        <div className="flex gap-10 bg-secondary py-3 text-white">
                          <span>{qIndex + 1}.</span>
                          <span>{question.QuesText}</span>
                        </div>
                        <div className="py-3 my-3">
                          <strong>Selected Answer:</strong>
                        </div>
                        <div className="pb-3 my-3 flex content-sb gap-10 item-center">
                          <strong>{question.selectedAnswer}</strong>
                          {question?.result === "correct" && (
                            <>
                              <img
                                src="https://ulearn.uniathena.com/Images/correct.png"
                                alt="Correct"
                                width={30}
                                height={30}
                              />
                            </>
                          )}
                          {question?.result === "wrong" && (
                            <>
                              <img
                                src="https://ulearn.uniathena.com/Images/wrong.png"
                                alt="Wrong"
                                width={30}
                                height={30}
                              />
                            </>
                          )}
                        </div>
                        {question?.result === "wrong" && (
                          <>
                            <div className="py-3 my-2">
                              <strong>Correct Answer:</strong>
                            </div>
                            <div className="py-1 my-2">
                              {question["correct answer"]}
                            </div>
                          </>
                        )}
                      </div>
                    )
                  )}
                  <div className="p-4 text-center">
                    <strong>Test Results</strong>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <div className="m-auto py-3" style={{ maxWidth: "888px" }}>
          <Table responsive="md" bordered className="my-2">
            <thead>
              <tr className="attempt-table-tile">
                <th>Attempt</th>
                <th>Test Name</th>
                <th>Score</th>
                <th>Grade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {studentScore &&
                studentScore?.map((score, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(index)} // Set selected attempt on row click
                    style={{ cursor: "pointer" }} // Add pointer cursor for row
                  >
                    <th>Attempt {index + 1}</th>
                    <th>{score.TestName}</th>
                    <th> {score.Score}</th>
                    <th>{score.Grade}</th>
                    <th>
                      <Button className="default-btn">
                        Submit For Final Evaluation
                      </Button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default FasttrackTestResult;
