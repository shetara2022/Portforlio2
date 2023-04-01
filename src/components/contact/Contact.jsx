import './contact.css'
import { Button } from 'react-bootstrap'



const Contact = () => {
  return (
    <section className='contact' id='connect'>
      <h2 className='contact-title'>Let's Connect</h2>
      <p className='contact-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repudiandae recusandae nesciunt, optio ducimus accusantium sint impedit ad harum rerum alias eligendi sequi consequuntur vero at facilis praesentium deleniti quidem!</p>
      <Button variant="primary">
        <a className='hyperlink' href="mailto:smithshetarall@gmail.com" target="_blank" rel="noopener noreferrer">Contact </a>
      </Button>
    </section>
  )
}

export default Contact
