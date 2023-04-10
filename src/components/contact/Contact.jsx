import './contact.css'
import contactcolor from '../../images/contactcolor.png'



const Contact = () => {
    
  return (
    <> 
    <section className='contact' id='connect'>
      <h2 className='contact-title'>Let's Connect!</h2>
      <img className='colorimage' src={contactcolor} alt="Woman on computer" />
      

      <p className='contact-p'>Thank you for taking the time to visit my portfolio! I am excited about the opportunity to connect with you and collaborate on your web development needs. Please feel free to reach out to me with any questions or project inquiries. I am eager to apply my skills and knowledge to create efficient, high-quality, and visually appealing websites that exceed your expectations. Let's work together to bring your ideas to life!
      </p>
      </section>
      </>
  )
}

export default Contact
