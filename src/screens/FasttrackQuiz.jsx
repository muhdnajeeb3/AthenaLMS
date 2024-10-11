import { useEffect, useState } from "react";
import { Breadcrumb, Container, Form, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { GetQuestionDetails, SubmitStudentTest } from "../actions/quizDetails";
import Skeleton from "react-loading-skeleton";

const FasttrackQuiz = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [animateNext, setAnimateNext] = useState(false);

  const [allOptions, setAllOptions] = useState([]);

  const dispatch = useDispatch();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();

  const TestId = query.get("TestId");
  const CourseId = query.get("CourseId");
  const ModuleId = query.get("ModuleId");
  const LessonId = query.get("LessonId");
  const FacultyId = query.get("FacultyId");

  const QuestionDetails = useSelector((state) => state.questionDetail);
  const { loading, questionDetail } = QuestionDetails;
  const StudentSubmit = useSelector((state) => state.studentSubmit);
  const { loading: submitloading } = StudentSubmit;

  useEffect(() => {
    if (TestId) {
      dispatch(GetQuestionDetails(TestId));
    }
  }, [dispatch, TestId]);

  const TYPEIN = questionDetail?.[0].QuesType === "IN";
  const MQ = questionDetail?.[0].QuesType === "MQ";

  useEffect(() => {
    if (questionDetail && questionDetail.length > 0) {
      const slicedQnA =
        TYPEIN || MQ ? questionDetail[0].QnA.slice(1) : questionDetail[0].QnA;

      const quizQuestions = slicedQnA.map((qna) => ({
        question: qna?.QuesText,
        questionId: qna?.QuestId,
        answers: qna?.QtAn?.map((ans) => ({
          ansId: ans?.AnsId,
          answer: ans?.Answer, // Storing the answer text to display
        })),
        // correctAnswer: qna?.QtAn?.find((ans) => ans.OptionNum === 1)?.Answer,
        correctAnswerId: qna?.CorrectAnswer?.[0]?.CorrectAnsId, // Assuming correct answer is the first option, update this as per your logic
      }));

      setQuestions(quizQuestions);
    }
  }, [questionDetail,TYPEIN,MQ]);

  useEffect(() => {
    if (questionDetail?.[0]?.QnA) {
      // Combine all answers (QtAn) into a single array
      const combinedOptions = questionDetail[0].QnA.reduce((acc, question) => {
        if (question?.QtAn) {
          return [...acc, ...question.QtAn];
        }
        return acc;
      }, []);

      setAllOptions(combinedOptions);
    }
  }, [questionDetail]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          handleSubmitQuiz();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestionIndex]);

  const handleAnswerChange = (
    questionId,
    selectedAnswerId,
    correctAnswerId
  ) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: {
        selectedAnswerId: selectedAnswerId, // Store selected answer ID
        correctAnswerId: correctAnswerId, // Store correct answer ID
      },
    }));
  };

  const handleNextQuestion = () => {
    const currentQuestionId = questions[currentQuestionIndex]?.questionId;

    if (!selectedAnswers[currentQuestionId]) {
      // If no answer is selected for the current question
      alert("Please choose an answer before proceeding.");
      return;
    }
    setAnimateNext(true);
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAnimateNext(false);
    }, 500); // Adjust this delay to match the transition duration
  };

  const navigate = useNavigate();

  const handleSubmitQuiz = async () => {
    
    const result = Object.keys(selectedAnswers).map((questionId) => ({
      TestId: TestId,
      QuestId: questionId,
      FacultyId: FacultyId,
      StudentAns: selectedAnswers[questionId].selectedAnswerId, // Get the selected answer
      CorrectAns: selectedAnswers[questionId].correctAnswerId,
      CourseId: CourseId,
      LessonId: LessonId,
      ModuleId: ModuleId,
    }));

    if (result.length != questions.length) {
      // If no answer is selected for the current question
      alert("Please choose an answer before proceeding.");
      return;
    }
    
    await dispatch(SubmitStudentTest(result));
    await navigate(`/FasttrackTestResult?TestId=${TestId}`);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Container fluid className="bg-white py-5">
      <div className="fasttrack-wrap">
        <div className="fasttrack-timer-wrap p-3">
          <div>
            <h2>{questionDetail?.[0]?.TestName}</h2>
            <h5>Master In Data Sciences</h5>
          </div>
          <div>
            <strong>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds} Time Left
            </strong>
          </div>
        </div>
        <div className="py-2">
          <Breadcrumb>
            <Breadcrumb.Item href="/" className="breadcrumb">
              Course Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href={`/ModuleDetails?CourseId=${CourseId}`}>Unit 3</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {!MQ && (
          <div className="practicalinfo pb-2">
            <div className="practicalinfo-title w-100 mb-2">
              <h5>
                <b>
                  Question {currentQuestionIndex + 1} of {questions?.length}
                </b>
              </h5>
            </div>
          </div>
        )}
        {TYPEIN && (
          <div
            dangerouslySetInnerHTML={{
              __html: questionDetail?.[0]?.QnA[0].QuesText,
            }}
          />
        )}
        {MQ && (
          <div
            dangerouslySetInnerHTML={{
              __html: questionDetail?.[0]?.QnA[0].QuesText,
            }}
          />
        )}
        <div
          key={currentQuestionIndex}
          className={animateNext ? "question-animation" : ""}
        >
          <div>
            <form>
              {MQ ? (
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map((question, index) => (
                      <tr key={question.questionId}>
                        <td>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: question.question,
                            }}
                          />
                        </td>
                        <td>
                          <Form.Group>
                            <Form.Select
                              value={
                                selectedAnswers[question.questionId]
                                  ?.selectedAnswerId || ""
                              }
                              onChange={
                                (e) =>
                                  handleAnswerChange(
                                    question.questionId,
                                    e.target.value,
                                    question.correctAnswerId
                                  ) // Pass the correct answer ID as well
                              }
                            >
                              <option value="">Select Answer</option>
                              {allOptions.map((answer) => (
                                <option key={answer.AnsId} value={answer.AnsId}>
                                  {answer.Answer}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <>
                  <div className="flex gap-10 mb-4">
                    <span>{currentQuestionIndex + 1}.</span>
                    <div>
                      {loading ? (
                        "Loading..."
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: questions?.[currentQuestionIndex]?.question,
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="shadow select-answer p-4">
                    {loading && <Skeleton count={3} />}

                    {questions?.[currentQuestionIndex]?.answers?.map(
                      (answer, answerIndex) => (
                        <Form.Check
                          key={answer.ansId}
                          type="radio"
                          id={`question-${currentQuestionIndex}-answer-${answerIndex}`}
                          label={answer.answer}
                          checked={
                            selectedAnswers[
                              questions[currentQuestionIndex].questionId
                            ]?.selectedAnswerId === answer.ansId
                          }
                          onChange={() =>
                            handleAnswerChange(
                              questions[currentQuestionIndex].questionId,
                              answer.ansId,
                              questions[currentQuestionIndex].correctAnswerId // Correct answer ID from state
                            )
                          }
                        />
                      )
                    )}
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
        <div className="flex content-center py-3 item-center gap-10">
          {currentQuestionIndex === questions?.length - 1 || MQ ? (
            <Button
              onClick={handleSubmitQuiz}
              style={{ borderRadius: "26px", width: "125px" }}
            >
              {submitloading ? "Submitting.." : "Submit"}
            </Button>
          ) : (
            <>
              <Button
                variant="dark"
                style={{ borderRadius: "26px", width: "90px" }}
              >
                Quit
              </Button>
              <Button
                onClick={handleNextQuestion}
                className="default-btn"
                style={{ borderRadius: "26px", width: "90px" }}
              >
                Next
              </Button>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default FasttrackQuiz;
