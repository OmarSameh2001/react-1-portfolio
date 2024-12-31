import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Bio from './components/Bio/Bio';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Hero />
        <Bio />
        <Skills />
        <Education />
        <Contact />
    </div>
  );
}

export default App;
