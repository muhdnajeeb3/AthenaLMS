import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Login.css'

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
            <Nav.Link href="#home">Courses</Nav.Link>
            <Nav.Link href="#link">Insights</Nav.Link>
            <Nav.Link href="/login" className='logintext'>Log in</Nav.Link>
            <Button className='btngetstarted' variant=''>Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar