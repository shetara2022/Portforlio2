import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import './navbar.css'


const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    //triggered once user scrolls
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll); //fired only on scroll

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
      <>
    <Navbar className={scrolled ? "scrolled": "" }>
        <Container className='nav-container'>
            <Navbar.Brand className='title'>Shetara Smith</Navbar.Brand>
                <Nav className="navbar">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Let's Connect</Nav.Link>
              </Nav>
              <span className='social-icons'>
                <a href = "https://linkedin.com" target="_blank" rel='noreferrer'><BsLinkedin /></a>          
                <a href = "https://github.com" target="_blank" rel='noreferrer'><BsGithub /></a>  
              </span>
    </Container>
  </Navbar>
  </>
  )
}


export default NavBar