import NavBar from './components/navbar/Navbar';
import Banner from './components/banner/Banner'
import Skillset from './components/skills/Skillset';
import Projects from './components/projects/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <div class="area" >
            <ul class="circles">
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
      

      </div>
      </>
  );
}

export default App;
