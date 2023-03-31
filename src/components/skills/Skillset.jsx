import './skills.css'
import {Container, Row, Col} from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsFillMortarboardFill } from "react-icons/bs";



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
        <section className='skillset'>
            <Container>
                <Row>
                    <Col>
                        <div className='skillset-bx'>
                            <h2>Technical Skills</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero esse, inventore suscipit quasi ab quos ad error, temporibus ea atque aut incidunt voluptatibus quas beatae obcaecati corrupti, doloremque ratione!</p>

                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <h5>Front End Development <BsFillMortarboardFill/> </h5>
                                    <ul>
                                        <li>⭐️HTML</li>
                                        <li>⭐️CSS</li>
                                        <li>⭐️JavaScript</li>
                                        <li>⭐️JavaScript</li>
                                        <li>⭐️React</li>
                                        <li>⭐️Bootstrap</li>
                                        <li>⭐️React Bootstrap</li>
                                        <li>⭐️Responsive Web Design</li>
                                    </ul>
                                </div>
                                <div className='item'>
                                    <h5>Back End Development <BsFillMortarboardFill/> </h5>
                                    <ul>
                                        <li>⭐️NodeJs</li>
                                        <li>⭐️Express</li>
                                        <li>⭐️MongoDB</li>
                                        <li>⭐️SQL</li>
                                        <li>⭐️RESTful APIs</li>
                                        <li>⭐️Python</li>
                                    </ul>
                                </div>
                                <div className='item'>
                                    <h5>Soft Skills <BsFillMortarboardFill/> </h5>
                                    <ul>
                                        <li>⭐️Communication</li>
                                        <li>⭐️Teamwork</li>
                                        <li>⭐️Problem-Solving</li>
                                        <li>⭐️Time Management</li>
                                        <li>⭐️Organizational</li>
                                        <li>⭐️Critical Thinking</li>
                                        <li>⭐️Adaptability</li>
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
