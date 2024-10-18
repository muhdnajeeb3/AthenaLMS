import { useEffect, useState } from "react";
import { Breadcrumb, Container, Form, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { GetQuestionDetails, SubmitStudentTest } from "../actions/quizDetails";
import Skeleton from "react-loading-skeleton";
import DynamicBreadcrumb from "../reusablecomponents/DynamicBreadCrumb";

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
  }, [dispatch, TestId, questions]);


  useEffect(() => {
    if (questionDetail && questionDetail.length > 0) {
      const quizQuestions = questionDetail[0].QnA.map((qna) => ({
        question: qna?.QuesText,
        questionId: qna?.QuestId,
        questionType: qna?.QuesType,
        answers: qna?.QtAn?.map((ans) => ({
          ansId: ans?.AnsId,
          answer: ans?.Answer, // Answer text for the current question
        })),
        correctAnswerId: qna?.CorrectAnswer?.[0]?.CorrectAnsId,
        subQuestions:
          qna?.SubQuestions?.map((subQ) => ({
            subQuestion: subQ.QuesText,
            subQuestionId: subQ.QuestId,
            subAnswers: subQ.QtAn?.map((ans) => ({
              ansId: ans?.AnsId,
              answer: ans?.Answer,
            })),
          })) || [], // Sub-questions if present
      }));
      setQuestions(quizQuestions);
    }
  }, [questionDetail]);

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

    // if (!selectedAnswers[currentQuestionId]) {
    //   // If no answer is selected for the current question
    //   alert("Please choose an answer before proceeding.");
    //   return;
    // }
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

    // if (result.length != questions.length) {
    //   // If no answer is selected for the current question
    //   alert("Please choose an answer before proceeding.");
    //   return;
    // }

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
          <DynamicBreadcrumb />
        </div>
        <div className="practicalinfo pb-2">
          <div className="practicalinfo-title w-100 mb-2">
            <h5>
              <b>
                Question {currentQuestionIndex + 1} of {questions?.length}
              </b>
            </h5>
          </div>
        </div>
        {questions[currentQuestionIndex]?.questionType === "IN" && (
          <div
            dangerouslySetInnerHTML={{
              __html: questions[currentQuestionIndex]?.question,
            }}
          />
        )}
        {questions[currentQuestionIndex]?.questionType === "MQ" && (
          <div
            dangerouslySetInnerHTML={{
              __html: questions[currentQuestionIndex]?.questionType,
            }}
          />
        )}
        <div
          key={currentQuestionIndex}
          className={animateNext ? "question-animation" : ""}
        >
          <div>
            <form>
              {questions[currentQuestionIndex]?.questionType === "MQ" ? (
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions?.[currentQuestionIndex]?.subQuestions?.map(
                      (subQuestion, subIndex) => {
                        // Merge allOptions from all subQuestions
                        const mergedOptions = questions?.[
                          currentQuestionIndex
                        ]?.subQuestions.reduce((acc, currSubQ) => {
                          const options = currSubQ?.subAnswers || []; // Use `subAnswers`
                          return [...acc, ...options];
                        }, []);

                        return (
                          <tr key={subQuestion.subQuestionId}>
                            <td>
                              <b>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: subQuestion.subQuestion,
                                  }}
                                />
                              </b>
                            </td>
                            <td>
                              <Form.Group>
                                <Form.Select
                                  value={
                                    selectedAnswers[subQuestion.subQuestionId]
                                      ?.selectedAnswerId || ""
                                  }
                                  onChange={(e) =>
                                    handleAnswerChange(
                                      subQuestion.subQuestionId,
                                      e.target.value,
                                      subQuestion.correctAnswerId
                                    )
                                  }
                                >
                                  <option value="">Select Answer</option>
                                  {mergedOptions.length > 0 ? (
                                    mergedOptions.map((answer) => (
                                      <option
                                        key={answer.AnsId}
                                        value={answer.AnsId}
                                      >
                                        {answer.answer}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="">
                                      No options available
                                    </option>
                                  )}
                                </Form.Select>
                              </Form.Group>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </Table>
              ) : questions[currentQuestionIndex]?.questionType === "IN" ? (
                <>
                  {questions[currentQuestionIndex]?.subQuestions?.map(
                    (subQuestion, subIndex) => (
                      <div
                        key={subQuestion.subQuestionId}
                        className="sub-question mb-3"
                      >
                        {/* Sub-question Text */}
                        <div className="flex gap-10 mb-4">
                          <span>
                            {currentQuestionIndex + 1} .{subIndex + 1}
                          </span>{" "}
                          {/* Sub-question numbering */}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: subQuestion.subQuestion,
                            }}
                          />
                        </div>

                        {/* Sub-question Options */}
                        <div className="shadow select-answer p-4">
                          {subQuestion.subAnswers.map((answer) => (
                            <Form.Check
                              key={answer.ansId}
                              type="radio"
                              id={`subquestion-${currentQuestionIndex}-${subIndex}-answer-${answer.ansId}`} // Unique ID for each radio button
                              label={answer.answer}
                              checked={
                                selectedAnswers[subQuestion.subQuestionId]
                                  ?.selectedAnswerId === answer.ansId
                              }
                              onChange={() =>
                                handleAnswerChange(
                                  subQuestion.subQuestionId,
                                  answer.ansId,
                                  subQuestion.correctAnswerId // Pass the correct answer ID for sub-questions
                                )
                              }
                            />
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </>
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
          {currentQuestionIndex === questions?.length - 1 ? (
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
