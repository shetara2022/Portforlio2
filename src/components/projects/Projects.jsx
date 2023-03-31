import './projects.css'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = () => {

    const projects = [
        {
            title: "Lets Play: Trivia",
            description: "Trivia game built using html, css, javascript",
            // imgUrl: projImg1
        },

        {
            title: "Lets Play: Trivia",
            description: "Trivia game built using html, css, javascript",
            // imgUrl: projImg2

        },

        {
            title: "Lets Play: Trivia",
            description: "Trivia game built using html, css, javascript",
            // imgUrl: projImg3
        }
    ]

  return (
      <section className='my-projects'>
          <Container>
              <Row>
                  <Col>
                      <h2> Projects</h2>
                      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo facere commodi, enim minima tenetur voluptatibus. Sed officiis obcaecati ducimus cupiditate autem optio distinctio hic, laboriosam fuga consequuntur laudantium nam quae.</p>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>


                  </Col>
              </Row>
          </Container>
   </section>
  )
}

export default Projects