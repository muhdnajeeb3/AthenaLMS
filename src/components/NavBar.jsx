import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

function NavBar() {
  const NotificationBtn = (
    <img
      src="https://ulearn.uniathena.com/Images/icons/notification.svg"
      alt="Notification"
      style={{ width: "20px" }}
    />
  );
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="light">
      <Container style={{ maxWidth: "1200px" }}>
        <Navbar.Brand href="#home">
          <img
            src="https://ulearn.uniathena.com/Images/athenanew-logo.svg"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">DASHBOARD</Nav.Link>
            <Nav.Link href="#link">PROJECT DETAILS</Nav.Link>
            <Nav.Link href="#link">ONLINE CLASS</Nav.Link>
            <Nav.Link href="#link">MY SURVEY</Nav.Link>
            <NavDropdown title="APPLICATIONS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Quick Application
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">E-LIBRARY</Nav.Link>
            <NavDropdown title={NotificationBtn} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Quick Apllication
              </NavDropdown.Item>
            </NavDropdown>
            <div className="mt-1 profiledrop">
              <img
                id="imgUserLogo"
                className="athena-profile-pic"
                src="https://community.upwork.com/bpyhf24739/attachments/bpyhf24739/New_to_Upwork/112350/1/Hostess%20characters.jpg"
              />
              <NavDropdown title="Joju" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="profilelist">
                  <i className="fa fa-user"></i>
                  <span>MY PROFILE</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className="profilelist">
                  <i className="fa fa-refresh"></i>
                  <span>PASSWORD</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className="profilelist">
                  <i className="fa fa-user"></i>
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
