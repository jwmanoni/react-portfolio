import './App.css';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
