import { useEffect, useState } from "react";
import { Breadcrumb, Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { GetQuestionDetails, SubmitStudentTest } from "../actions/quizDetails";

const FasttrackQuiz = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [animateNext, setAnimateNext] = useState(false);

  const dispatch = useDispatch();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();

  const TestId = query.get("TestId");
  const CourseId = query.get("CourseId");
  const ModuleId = query.get("ModuleId");
  const LessonId = query.get("LessonId");

  const QuestionDetails = useSelector((state) => state.questionDetail);
  const { questionDetail } = QuestionDetails;

  // console.log(questionDetail);

  useEffect(() => {
    if (TestId) {
      dispatch(GetQuestionDetails(TestId));
    }
  }, [dispatch, TestId]);

  useEffect(() => {
    if (questionDetail && questionDetail.length > 0) {
      const quizQuestions = questionDetail[0].QnA.map((qna) => ({
        question: qna?.QuesText,
        questionId: qna?.QuestId,
        answers: qna?.QtAn?.map((ans) => ({
          ansId: ans?.AnsId,
          answer: ans?.Answer, // Storing the answer text to display
        })),
        correctAnswer: qna?.QtAn?.find((ans) => ans.OptionNum === 1)?.Answer, // Assuming correct answer is the first option, update this as per your logic
      }));
      console.log(questionDetail[0].QnA);

      setQuestions(quizQuestions);
      setLoading(false);
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

  const handleAnswerChange = (questionIndex, questionId, selectedAnswerId) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswerId, // Store `questionId` as the key and `ansId` as the value
    }));
  };

  const handleNextQuestion = () => {
    // if (selectedAnswers[questionId] === undefined) {
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
    const result = Object.keys(selectedAnswers).map((questionId) => ({       // You can modify this as needed
      LeadId: 2,            // Replace this with actual LeadId as needed
      TestId: TestId,
      QuestId: questionId,  // Use the questionId
      StudentAns: selectedAnswers[questionId],
      CourseId:CourseId,
      LessonId:LessonId,
      ModuleId:ModuleId
    }));
    console.log("Selected Answers:", result);
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
            <Breadcrumb.Item href="/ModuleDetails">Unit 3</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="practicalinfo pb-2">
          <div className="practicalinfo-title w-100 mb-2">
            <h5>
              <b>
                Question {currentQuestionIndex + 1} of {questions.length}
              </b>
            </h5>
          </div>
        </div>
        <div
          key={currentQuestionIndex}
          className={animateNext ? "question-animation" : ""}
        >
          <div>
            <form>
              <div className="flex gap-10 mb-4">
                <span>{currentQuestionIndex + 1}.</span>
                <span>{questions[currentQuestionIndex]?.question}</span>
              </div>
              <div className="shadow select-answer p-4">
                {questions[currentQuestionIndex]?.answers?.map(
                  (answer, answerIndex) => (
                    <Form.Check
                      key={answer.ansId} // Use AnsId as the key
                      type="radio"
                      id={`question-${currentQuestionIndex}-answer-${answerIndex}`}
                      label={answer.answer} // Display the answer text
                      checked={
                        selectedAnswers[
                          questions[currentQuestionIndex].questionId
                        ] === answer.ansId
                      } // Compare selected AnsId
                      onChange={() =>
                        handleAnswerChange(
                          // Pass questionId and ansId
                          currentQuestionIndex,
                          questions[currentQuestionIndex].questionId,
                          answer.ansId
                        )
                      }
                    />
                  )
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="flex content-center py-3 item-center gap-10">
          {currentQuestionIndex === questions.length - 1 ? (
            <Button
              onClick={handleSubmitQuiz}
              style={{ borderRadius: "26px", width: "100px" }}
            >
              Submit
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
