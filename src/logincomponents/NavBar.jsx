import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Login.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg='light'>
      <Container style={{maxWidth:'1200px'}}>
        <Navbar.Brand href="#home">
          <img src="https://ulearn.uniathena.com/Images/athenanew-logo.svg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="https://uniathena.com/course-home">Courses</Nav.Link>
            <Nav.Link href="https://uniathena.com/insights/all">Insights</Nav.Link>
            <Nav.Link href="/login" className='logintext'>Log in</Nav.Link>
            <Link to='https://uniathena.com/registration'>
            <Button className='btngetstarted' variant=''>Get Started</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar