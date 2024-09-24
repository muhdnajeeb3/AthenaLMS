import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import {  useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";
import { LinkContainer } from "react-router-bootstrap";
import profilepic from '../assets/njbpic.jpg'

function NavBar() {
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo } = studentLogin;

  let FirstName = studentInfo && studentInfo[0]?.FirstName;

  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await dispatch(signout());
    await navigate("/login");
  };
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;
  const NotificationBtn = (
    <img
      src="https://ulearn.uniathena.com/Images/icons/notification.svg"
      alt="Notification"
      style={{ width: "20px" }}
    />
  );
  // Check if the pathname is '/login'
  const isLoginPage = pathname === "/login";
  const Homepage = pathname === "/";
  // const isFreeTrialHome = pathname === "/FreeTrialHome";
  if (isLoginPage || Homepage) {
    return null;
  }

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="light"
      collapseOnSelect
    >
      <Container style={{ maxWidth: "1200px" }}>
        <LinkContainer to="/EnrolledHome">
          <Navbar.Brand>
            <img
              src="https://ulearn.uniathena.com/Images/athenanew-logo.svg"
              alt=""
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/FreeTrialHome">
              <Nav.Link>DASHBOARD</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ProjectandAssignments">
              <Nav.Link>PROJECT DETAILS</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/MyOnlineClass">
              <Nav.Link>ONLINE CLASS</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#">MY SURVEY</Nav.Link>
            <NavDropdown title="APPLICATIONS" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://learn.uniathena.com/quick-application/user-details"
                target="__blank"
              >
                Quick Application
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://www.proquest.com/" target="__blank">
              E-LIBRARY
            </Nav.Link>
            <NavDropdown title={NotificationBtn} id="basic-nav-dropdown">
              <LinkContainer to="/InboxMails">
                <NavDropdown.Item className="mail">
                  2 new Mails
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/InboxMails">
                <NavDropdown.Item className="mail">
                  13 new unread Mails
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <div className="mt-1 profiledrop">
              <img
                id="imgUserLogo"
                className="athena-profile-pic"
                src={profilepic}
                width={35}
                height={35}
              />
              <NavDropdown
                title={FirstName || "Username"}
                id="basic-nav-dropdown"
              >
                <LinkContainer to="/MyProfile">
                  <NavDropdown.Item className="profilelist">
                    <i className="fa fa-user" />
                    <span>MY PROFILE</span>
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/ChangePassword">
                  <NavDropdown.Item className="profilelist">
                    <i className="fa fa-refresh" />
                    <span>PASSWORD</span>
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item
                  onClick={logoutHandler}
                  className="profilelist"
                >
                  <i className="fa fa-user" />
                  <span>LOGOUT</span>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
