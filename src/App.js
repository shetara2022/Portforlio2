import NavBar from './components/navbar/Navbar';
import Banner from './components/banner/Banner'
import Skills from './components/skills/Skills';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />

    </div>
  );
}

export default App;
