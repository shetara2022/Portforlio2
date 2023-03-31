import './projects.css'
import { Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import trivia  from '../../images/trivia.png'
import games  from '../../images/games.png'

const Projects = () => {
  return (
      <section className='my-/projects'>
          <Container>
                      <h2> Projects</h2>
                      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo facere commodi, enim minima tenetur voluptatibus. Sed officiis obcaecati ducimus cupiditate autem optio distinctio hic, laboriosam fuga consequuntur laudantium nam quae.</p>

                      <div className='card-wrapper'>
                      <div className='card-container'>
                      <Card className='pro-card'>
                            <Card.Img variant="top" src={trivia} />
                            <Card.Body>
                                <Card.Title>Let's Play: Trivia</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Live Demo</Button>
                            </Card.Body>
                            </Card>
                        </div>

                        <div className='card-container'>
                            <Card className='pro-card'>
                            <Card.Img variant="top" src={games} />
                            <Card.Body>
                                <Card.Title>Home of the Games</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Live Demo</Button>
                            </Card.Body>
                            </Card>
                        </div>
                  
                        <div className='card-container'>
                            <Card className='pro-card'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Travel & Share Blog</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Live Demo</Button>
                            </Card.Body>
                            </Card>
                        </div>
                        </div>
            </Container>
        </section>
  )
}

export default Projects