import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'


const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
    <Container className='container'>
      <Navbar.Brand className='title'>Shetara Smith</Navbar.Brand>
      <Nav className="navbar">
        <Nav.Link className ="links" href="/">About Me</Nav.Link>
        <Nav.Link className ="links" href="/skills">Skills</Nav.Link>
        <Nav.Link className ="links" href="/projects">Projects</Nav.Link>
        <Nav.Link className ="links" href="/contact">Contact Me</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}


export default NavBar