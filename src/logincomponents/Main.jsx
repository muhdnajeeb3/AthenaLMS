import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Main() {
  const [passwordViewer,setPasswordViewer] = useState(false)
  const LoginHandler = (event) => {
    event.preventDefault();
    alert("you clicked login")
  }
  return (
    <Container fluid>
      <Row>
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
                  name="ctl00$MainContent$txtusername"
                  type="email"
                  id="MainContent_txtusername"
                  className="form-control frmfieldsize"
                  placeholder="Username"
                  //  onchange="hasWhiteSpaces(this)"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <div id="MainContent_UpdatePanel1">
                <span className="btn-show-pass">
                  <i className={`fa fa-eye${passwordViewer ? '-slash' : ""}`} onClick={()=>setPasswordViewer(!passwordViewer)}></i>
                </span>
                <input
                  name="ctl00$MainContent$txtpassword"
                  type={`${passwordViewer ? "text" : "password"}`}
                  id="MainContent_txtpassword"
                  className="form-control frmfieldsize"
                  placeholder="Password"
                  // onchange="hasWhiteSpaces(this)"
                />
              </div>
            </div>
            <div className="pl-0 clearfix">
              <p
                className="forgot-pass"
                //    style="text-align: right"
              >
                <em className="clickhere">
                  <span
                  //  onclick="OpenPopup(); return false"
                  // style="cursor: pointer;"
                  >
                    Forgot Password?{" "}
                  </span>
                </em>
              </p>
              <div id="MainContent_UpdatePanel2">
                {/* <input
                  type="submit"
                  name="ctl00$MainContent$btnsubmit"
                  value="Login"
                  // onclick="hasWhiteSpaces();"
                  id="MainContent_btnsubmit"
                  className="btn-theme submitbt"
                /> */}
                <Button
                  type="submit"
                  variant=""
                  // name="ctl00$btnsave"
                  // value="Subscribe"
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
