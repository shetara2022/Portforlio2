import './skills.css'
import {Container, Row, Col} from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsFillMortarboardFill } from "react-icons/bs";
import { BsCheckCircle} from "react-icons/bs";
import colorful from '../../images/colorful.png'


const Skillset = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    
    return (
        <section className='skillset' id= 'skills'>
            <Container className='skills-container'>
                <Row>
                    <Col>
                        <div className='skillset-bx'>
                            <h2>Technical Skills</h2>
                            <p className='skills-intro'>As a self-motivated and dedicated learner, I have acquired a range of technical skills that enable me to develop creative and effective solutions. I am continuously expanding my skillset and staying up-to-date with the latest trends in the industry </p>
                            <img className="computer" src={colorful} alt="Colorful computer" />
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <h5>Front-End Development <BsFillMortarboardFill/> </h5>
                                    <ul>
                                        <li><BsCheckCircle/> HTML</li>
                                        <li><BsCheckCircle/> CSS</li>
                                        <li><BsCheckCircle/> JavaScript</li>
                                        <li><BsCheckCircle/> React</li>
                                        <li><BsCheckCircle/> Bootstrap</li>
                                        <li><BsCheckCircle/>React Bootstrap</li>
                                        <li><BsCheckCircle/>Responsive-Web-Design</li>
                                    </ul>
                                </div>
                                <div className='item'>
                                    <h5>Back-End Development <BsFillMortarboardFill/> </h5>
                                    <ul>
                                        <li><BsCheckCircle/> NodeJs</li>
                                        <li><BsCheckCircle/> Express</li>
                                        <li><BsCheckCircle/> MongoDB</li>
                                        <li><BsCheckCircle/> Mongoose</li>
                                        <li><BsCheckCircle/> SQL</li>
                                        <li><BsCheckCircle/> RESTful APIs</li>
                                        <li><BsCheckCircle/> Python</li>
                                    </ul>
                                </div>
                                <div className='item'>
                                    <h5>Soft-Skills <BsFillMortarboardFill/> </h5>
                                    <ul>
                                        <li><BsCheckCircle/> Communication</li>
                                        <li><BsCheckCircle/> Teamwork</li>
                                        <li><BsCheckCircle/> Problem-Solving</li>
                                        <li><BsCheckCircle/> Time Management</li>
                                        <li><BsCheckCircle/> Organizational</li>
                                        <li><BsCheckCircle/> Critical Thinking</li>
                                        <li><BsCheckCircle/> Adaptability</li>
                                    </ul>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}

export default Skillset
