import './contact.css'
// import contactcolor from '../../images/contactcolor.png'


const Contact = () => {
  return (
    <section className='contact' id='connect'>
      <h2 className='contact-title'>Let's Connect</h2>
      {/* <img src={contactcolor} alt="Woman on computer" /> */}
      <p className='contact-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repudiandae recusandae nesciunt, optio ducimus accusantium sint impedit ad harum rerum alias eligendi sequi consequuntur vero at facilis praesentium deleniti quidem!</p>
      <a className='email-link' href="https://home-of-the-games.vercel.app/" target="_blank" rel="noopener noreferrer">Contact Me
      </a>
    </section>
  )
}

export default Contact
