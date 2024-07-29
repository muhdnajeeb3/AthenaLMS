import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";

function NavBar() {
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  const studentLogin = useSelector((state) => state.studentLogin);
  const { studentInfo } = studentLogin;

  let IsActive;
  let Email;
  let Password;
  let FirstName;
  if (studentInfo && studentInfo.length > 0 && studentInfo[0]?.result) {
    const resultString = studentInfo[0]?.result;
    console.log(resultString);
    if (resultString !== "VALIDATION|No Record Found") {
      const resultArray = JSON.parse(resultString);
      if (resultArray && resultArray.length > 0) {
        const firstResultObject = resultArray[0];
        IsActive = firstResultObject.status;
        Email = firstResultObject.Email;
        Password = firstResultObject.Password;
        FirstName = firstResultObject.FirstName;
      }
    }
  }

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
    <Navbar expand="lg" className="bg-body-tertiary" bg="light">
      <Container style={{ maxWidth: "1200px" }}>
        <Navbar.Brand href="/">
          <img
            src="https://ulearn.uniathena.com/Images/athenanew-logo.svg"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/FreeTrialHome" className="nav-link">
              DASHBOARD
            </Link>
            <Link to="/ProjectandAssignments" className="nav-link">
              PROJECT DETAILS
            </Link>
            <Link to="/MyOnlineClass" className="nav-link">
              ONLINE CLASS
            </Link>
            {/* <Nav.Link href="/">DASHBOARD</Nav.Link> */}
            {/* <Nav.Link href="#">PROJECT DETAILS</Nav.Link> */}
            {/* <Nav.Link href="#link">ONLINE CLASS</Nav.Link> */}
            <Nav.Link href="#link">MY SURVEY</Nav.Link>
            <NavDropdown title="APPLICATIONS" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://learn.uniathena.com/quick-application/user-details"
                target="__blank"
              >
                Quick Application
              </NavDropdown.Item>
            </NavDropdown>
            <Link
              to="https://www.proquest.com/"
              className="nav-link"
              target="__blank"
            >
              E-LIBRARY
            </Link>
            {/* <Nav.Link href="#link">E-LIBRARY</Nav.Link> */}
            <NavDropdown title={NotificationBtn} id="basic-nav-dropdown">
              <NavDropdown.Item href="#" className="mail">
                <Link to="/InboxMails">2 new Mails</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="mail">
                <Link to="/InboxMails">13 new unread Mails</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <div className="mt-1 profiledrop">
              <img
                id="imgUserLogo"
                className="athena-profile-pic"
                src="https://community.upwork.com/bpyhf24739/attachments/bpyhf24739/New_to_Upwork/112350/1/Hostess%20characters.jpg"
              />
              <NavDropdown title={FirstName || "Muizz"} id="basic-nav-dropdown">
                <NavDropdown.Item href="">
                  <Link to="/MyProfile" className="profilelist">
                    <i className="fa fa-user" />
                    <span>MY PROFILE</span>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to="/ChangePassword" className="profilelist">
                    <i className="fa fa-refresh" />
                    <span>PASSWORD</span>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link
                    to="#logout"
                    className="profilelist"
                    onClick={logoutHandler}
                  >
                    <i className="fa fa-user" />
                    <span>LOGOUT</span>
                  </Link>
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
