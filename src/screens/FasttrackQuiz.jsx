import { useEffect, useState } from "react";
import { Breadcrumb, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FasttrackQuiz = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [animateNext, setAnimateNext] = useState(false);

  useEffect(() => {
    const quizQuestions = [
      {
        question: "Who is the parent company of Tableau?",
        answers: ["Microsoft", "Salesforce", "Google", "Amazon"],
        correctAnswer: "Salesforce",
      },
      {
        question: "Who is the parent company of Tableau?",
        answers: ["Microsoft", "Salesforce", "Google", "Amazon"],
        correctAnswer: "Salesforce",
      },
      {
        question: "Who is the parent company of Tableau?",
        answers: ["Microsoft", "Salesforce", "Google", "Amazon"],
        correctAnswer: "Salesforce",
      },
      {
        question: "Who is the parent company of Tableau?",
        answers: ["Microsoft", "Salesforce", "Google", "Amazon"],
        correctAnswer: "Salesforce",
      },
      // Add more questions here
    ];

    setQuestions(quizQuestions);
    setLoading(false); // Set loading to false after questions are initialized
  }, []);

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
  }, []);

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedAnswer,
    }));
  };

  const handleNextQuestion = () => {
    if (selectedAnswers === "") {
      alert("choose one");
    }
    setAnimateNext(true);
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAnimateNext(false);
    }, 500); // Adjust this delay to match the transition duration
  };

  const navigate = useNavigate();

  const handleSubmitQuiz = () => {
    console.log("Selected Answers:", selectedAnswers);
    navigate("/FasttrackTestResult");
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while questions are being fetched
  }

  return (
    <Container fluid className="bg-white py-5">
      <div className="fasttrack-wrap">
        <div className="fasttrack-timer-wrap p-3">
          <div>
            <h2>Data Visualization</h2>
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
        <div
          key={currentQuestionIndex}
          className={animateNext ? "question-animation" : ""}
        >
          <div className="practicalinfo pb-2">
            <div className="practicalinfo-title w-100 mb-2">
              <h5>
                <b>
                  Question {currentQuestionIndex + 1} of {questions.length}
                </b>
              </h5>
            </div>
          </div>
          <div>
            <form>
              <div className="flex gap-10 mb-4">
                <span>{currentQuestionIndex + 1}.</span>
                <span>{questions[currentQuestionIndex]?.question}</span>
              </div>
              <div className="shadow select-answer p-4">
                {questions[currentQuestionIndex].answers.map(
                  (answer, answerIndex) => (
                    <Form.Check
                      key={answerIndex}
                      type="radio"
                      id={`question-${currentQuestionIndex}-answer-${answerIndex}`}
                      label={answer}
                      checked={selectedAnswers[currentQuestionIndex] === answer}
                      onChange={() =>
                        handleAnswerChange(currentQuestionIndex, answer)
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
