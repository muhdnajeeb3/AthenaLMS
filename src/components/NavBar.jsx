import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link } from "react-router-dom";

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
        <Navbar.Brand href="/">
          <img
            src="https://ulearn.uniathena.com/Images/athenanew-logo.svg"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              DASHBOARD
            </Link>
            <Link to="/ProjectandAssignments" className="nav-link">
              PROJECT DETAILS
            </Link>
            {/* <Nav.Link href="/">DASHBOARD</Nav.Link> */}
            {/* <Nav.Link href="#">PROJECT DETAILS</Nav.Link> */}
            <Nav.Link href="#link">ONLINE CLASS</Nav.Link>
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
              <NavDropdown.Item href="#">Quick Apllication</NavDropdown.Item>
            </NavDropdown>
            <div className="mt-1 profiledrop">
              <img
                id="imgUserLogo"
                className="athena-profile-pic"
                src="https://community.upwork.com/bpyhf24739/attachments/bpyhf24739/New_to_Upwork/112350/1/Hostess%20characters.jpg"
              />
              <NavDropdown title="Muizz" id="basic-nav-dropdown">
                <NavDropdown.Item href="">
                  <Link to="/MyProfile" className="profilelist">
                    <i className="fa fa-user"></i>
                    <span>MY PROFILE</span>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                  <Link to="/ChangePassword" className="profilelist">
                    <i className="fa fa-refresh"></i>
                    <span>PASSWORD</span>
                  </Link>
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
