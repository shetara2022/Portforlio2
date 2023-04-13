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
       
        <TrackVisibility>
        <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""} >
            <img className='mypic' src={me3} alt="Woman Coder" />
          </div>
          <div className={isVisible ? "animate__animated animate__lightSpeedInLeft" : ""}>
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
     <header className='bg text-white p-5' >
          <p>As an experienced educator of 12 years, I have always been passionate about creating engaging and enjoyable lessons that cater to the needs of individual students. During the pandemic, my interest in software development was sparked when I saw the potential for technology to enhance the learning experience. </p>
          <p>My passion for learning is contagious, and I am constantly seeking out new challenges and opportunities for growth. My journey from educator to developer is a testament to my adaptability and tenacity. As a lifelong learner, I am always eager to take on new projects and expand my skill set. My unique combination of skills, dedication, and passion makes me an invaluable asset to any team.</p>
     </header>
 </div>
    </>
      )  
}

export default Banner