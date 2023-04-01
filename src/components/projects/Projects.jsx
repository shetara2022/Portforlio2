import './projects.css'
import { Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import trivia  from '../../images/trivia.png'
import games  from '../../images/games.png'
import blog  from '../../images/blog.png'

const Projects = () => {
  return (
      <section className='my-/projects'>
          <Container>
                      <h2> Projects</h2>
                      <div className='card-wrapper'>
                      <div className='card-container'>
                      <Card className='pro-card'>
                            <Card.Img variant="top" src={trivia} />
                            <Card.Body>
                                <Card.Title>Let's Play: Trivia</Card.Title>
                                <Card.Text>
                                Let's Play: Trivia is a fast-paced and challenging game designed to test your general knowledge skills. For my first milestone project, I used HTML, CSS, and vanilla JavaScript to create this engaging game. You can add your high score to local storage and see if you can beat it on your next playthrough. Test your knowledge and see if you have what it takes to top the leaderboard!
                              </Card.Text>
                                <Button variant="primary">
                                <a className='hyperlink' href="http://trivia-game2.vercel.app" target="_blank" rel="noopener noreferrer">
                                See Live
                                </a>
                                </Button>
                            </Card.Body>
                            </Card>
                        </div>

                        <div className='card-container'>
                            <Card className='pro-card'>
                            <Card.Img variant="top" src={games} />
                            <Card.Body>
                                <Card.Title>Home of the Games</Card.Title>
                                <Card.Text>
                                Welcome to our fully functional collaborative website designed using the MERN stack, where you can share your favorite games with the world. With our easy-to-use interface, you can create new games, edit or delete your existing games. Development on this site continues as we work to include user authentication and authorization! Join us today and experience the thrill of sharing your favorite games with the world!  
                                </Card.Text>
                                <Button variant="primary">
                                <a className='hyperlink' href="https://home-of-the-games.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    See Live
                                </a>
                                </Button>
                            </Card.Body>
                            </Card>
                        </div>
                  
                        <div className='card-container'>
                            <Card className='pro-card'>
                            <Card.Img variant="top" src={blog} />
                            <Card.Body>
                                <Card.Title>Travel & Share Blog</Card.Title>
                                <Card.Text>
                                "Welcome to Travel & Share Blog, the perfect platform for travel enthusiasts to share their experiences with the world. Using the MERN stack, we've created an easy-to-use website that allows authorized users to create new blogs, edit and delete their existing blogs. Sign up with Travel & Share today and start sharing your travel experiences with us!"
                                </Card.Text>
                                <Button variant="primary">
                                <a className='hyperlink' href="https://milestone-3-ayanbajo.vercel.app/" target="_blank" rel="noopener noreferrer">
                                See Live
                                </a>
                                </Button>
                            </Card.Body>
                            </Card>
                        </div>
                        </div>
            </Container>
        </section>
  )
}

export default Projects