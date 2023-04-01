import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
      <div className='footer'>
          <div className='footer_social'>
            <h5>Designed & Built by Shetara Smith</h5>
            <a href = "https://linkedin.com" target="_blank" rel='noreferrer'><BsLinkedin /></a>          
            <a href = "https://github.com" target="_blank" rel='noreferrer'><BsGithub /></a>  
          </div>
          <p> &copy; 2023</p>
          
    </div>
  )
}

export default Footer