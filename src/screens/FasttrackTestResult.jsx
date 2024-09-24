import { useEffect } from "react";
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

  useEffect(() => {
    if (studentScore) {
      console.log(studentScore);
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
              {studentScore?.map((score, index) => (
                <div key={index}>
                  <div className="flex item-center row-col p-3">
                    <strong className="text-center attempt-title">
                      Attempt {index + 1}
                    </strong>
                    <div className="result-percentage text-center">
                      <CountUp end={score.Score} duration={2} />%
                    </div>
                  </div>
                  {score?.QtAn?.map((question, qIndex) => (
                    <div className="question-answer-wrap pt-3" key={qIndex}>
                      <div className="flex gap-10 bg-secondary py-3 text-white">
                        <span>{qIndex + 1}.</span>
                        <span>{question.QuesText}</span>
                      </div>
                      <div className="py-3 my-3">
                        <strong>Selected Answer:</strong>
                      </div>
                      <div className="pb-3 my-3 flex content-sb gap-10 item-center">
                        <strong>{question["Student Answer"]}</strong>
                        {question.result === "correct" ? (
                          <>
                            <img
                              src="https://ulearn.uniathena.com/Images/correct.png"
                              alt="Correct"
                              width={30}
                              height={30}
                            />
                          </>
                        ) : (
                          <img
                            src="https://ulearn.uniathena.com/Images/wrong.png"
                            alt="Correct"
                            width={30}
                            height={30}
                          />
                        )}
                      </div>
                      {question.result === "wrong" && (
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
                  ))}
                  <div className="p-4 text-center">
                    <strong>Test Results</strong>
                  </div>
                </div>
              ))}
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
                studentScore.map((score, index) => (
                  <tr key={index}>
                    <th>Attempt {index + 1}</th>
                    <th>{score.TestName}</th>
                    <th>Your Score: {score.Score}</th>
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
