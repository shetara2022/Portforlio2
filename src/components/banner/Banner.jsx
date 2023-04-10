import './banner.css'
import { useTypewriter } from 'react-simple-typewriter'
import me3 from '../../images/me3.jpeg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';

const Banner = () => {
  const [text] = useTypewriter({
    words: [ '- Fullstack Developer',  ' - React Developer',  ' - Web Developer',  '- Software Developer'],
    loop: {},
    typeSpeed: 160,
    deleteSpeed: 80,
  });

  return (
    <>
      <div className='home' id= 'home'>
        <div>
            <img className='mypic' src={me3} alt="Woman Coder" />
          </div>
        <TrackVisibility>
          <div className={isVisible ? "animate__animated animate__rubberBand" : ""}>
          <h1 className='intro_words'>
          Hi, I'm Shetara!
              {'  '} </h1> 
          <span className='typewords'>
            {text}
            </span>
            </div>
      </TrackVisibility>
    </div>
     <div>
     <header className='bg text-white p-5' style={{ marginBottom: '10%' }} >
         <p>As an experienced educator of 12 years, I have always been passionate about creating engaging and enjoyable lessons that cater to the needs of individual students. During the pandemic, my interest in software development was sparked when I saw the potential for technology to enhance the learning experience. Recently, I completed a rigorous software development bootcamp at North Carolina State University, where I gained hands-on experience in a range of programming languages and tools. I am now excited to apply my skills and knowledge to a new career in software development and make a positive impact in the industry!</p>
     </header>
 </div>
    </>
      )  
}

export default Banner