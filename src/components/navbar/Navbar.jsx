import './navbar.css'
import { useState } from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsEnvelope } from 'react-icons/bs'

const Navbar = () => {
   const [activeNav, setActiveNav]= useState('#')
  return (
    <>
    <nav>
      <span className='title'>Shetara Smith</span>
      <a href='#home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>Skills</a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a>
      <a href='#connect' onClick={() => setActiveNav('#connect')} className={activeNav === '#connect' ? 'active' : ''}>Let's Connect</a>
  
      <span className='social-icons'>
      <a href = "https://linkedin.com" target="_blank" rel='noreferrer'><BsLinkedin /></a>          
      <a href = "https://github.com" target="_blank" rel='noreferrer'><BsGithub /></a>  
      <a href = "mailto:smithshetarall@gmail.com" target="_blank" rel='noreferrer'><BsEnvelope /></a>
        </span>
      </nav>
      </>
  )
}

export default Navbar 