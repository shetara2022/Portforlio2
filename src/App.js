import NavBar from './components/navbar/Navbar';
import Banner from './components/banner/Banner'
import Skillset from './components/skills/Skillset';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    <div className="App">
      <NavBar />
      <Banner />
      <Skillset />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;