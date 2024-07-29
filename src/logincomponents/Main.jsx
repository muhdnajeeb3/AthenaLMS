import { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin, studentlogin } from "../actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import { EncriptDecrypt } from "../actions/encriptDecrypt";

function Main() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordViewer, setPasswordViewer] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => setShowPopup(false);
  const handleShow = () => setShowPopup(true);

  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo, error } = userSignin;

  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo,error } = studentLogin;
  let IsActive;
  if (studentInfo && studentInfo.length > 0 && studentInfo[0]?.result) {
    const resultString = studentInfo[0]?.result;
    console.log(resultString);
  
    try {
      const resultArray = JSON.parse(resultString);
  
      if (resultArray && resultArray.length > 0) {
        const firstResultObject = resultArray[0];
        IsActive = firstResultObject.status;
  
        console.log("IsActive:", IsActive);
      }
    } catch (e) {
      console.error("Error parsing JSON:", e, "resultString:", resultString);
    }
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AthenaUsername = "Athena";
  const AthenaPassword = "Athena@123$";
  const Type = "Encript";
  const LoginHandler = async (event) => {
    event.preventDefault();

    try {
      await dispatch(signin(AthenaUsername, AthenaPassword));

      await dispatch(EncriptDecrypt(password, Type));

      await dispatch(studentlogin(Email));
    } catch (error) {
      // Handle any errors that might occur during the dispatch of actions
      console.error("Error in LoginHandler:", error);
    }
  };

  useEffect(() => {
    if (IsActive === 'Active') {
      navigate("/EnrolledHome");
    }
  }, [IsActive]);
  useEffect(() => {
    if (error) {
      const notify = () =>
        toast.error(error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // theme: "dark",
          // transition: Bounce,
        });
      notify();
    }
  }, [error]);

  return (
    <Container fluid>
      <Row>
        <ToastContainer />
        <Col className="col-md-6">
          <div className="col-md-6 login-round d-flex d-md-none mt-5">
            <img
              src="https://ulearn.uniathena.com/Images/sidebn.jpg"
              style={{ width: "100%" }}
            />
          </div>
          <form className="login-form" onSubmit={LoginHandler}>
            <h2 className="welc">
              Welcome <span style={{ color: "black" }}>Back</span>
            </h2>
            <p className="learn">
              Learning is never too late. The whole world is in front of you ——
              Forward to the dream
            </p>
            <div className="btn-group">
              <Link to="" className="link-1">
                Academic Courses{" "}
              </Link>
              <Link
                className="link-2"
                to="https://uniathena.com/lms/short-course-sign-in"
              >
                Short Courses{" "}
              </Link>
            </div>
            <div className="form-group">
              <label>Email/User Name</label>
              <div id="MainContent_UpdatePanel8">
                <input
                  type="email"
                  id="email"
                  className="form-control frmfieldsize"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <div id="MainContent_UpdatePanel1">
                <span className="btn-show-pass">
                  <i
                    className={`fa fa-eye${passwordViewer ? "-slash" : ""}`}
                    onClick={() => setPasswordViewer(!passwordViewer)}
                  ></i>
                </span>
                <input
                  type={`${passwordViewer ? "text" : "password"}`}
                  id="password"
                  className="form-control frmfieldsize"
                  placeholder="Enter Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="pl-0 clearfix">
              <p
                className="forgot-pass"
              >
                <em className="clickhere">
                  <span
                  onClick={handleShow}
                  >
                    Forgot Password?{" "}
                  </span>
                </em>
              </p>
              <div>
                <Button
                  type="submit"
                  variant=""
                  //   onclick="if(!validateNewsletter()) return false;"
                  id="MainContent_btnsubmit"
                  className="btn-theme submitbt"
                  style={{ color: "white" }}
                >
                  Login
                </Button>
              </div>
              <p></p>
            </div>
            <Modal show={showPopup} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Forgot Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input type="email" className="w-100" placeholder="Enter Registered Email"/>
                </Modal.Body>
                <Modal.Footer className="completed-btnwrap">
                  <Button variant="primary" onClick={handleClose}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            <div className="pt-5 text-center">
              If you are a new user please{" "}
              <span className="clickhere">
                <Link
                  to="https://uniathena.com/registration"
                  className="clickhere"
                >
                  Sign Up
                </Link>
              </span>{" "}
            </div>
          </form>
        </Col>
        <Col className="col-md-6 hidden-xs p-0 d-none d-md-block">
          <img
            src="https://ulearn.uniathena.com/Images/sidebn.jpg"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
