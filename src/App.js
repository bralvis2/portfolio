import './App.css';
import Nav from './components/Nav';
import About from './components/pages/About.js';
import Portfolio from './components/pages/Portfolio.js';
import Resume from './components/pages/Resume.js';
import Contact from './components/pages/Contact.js';
import Footer from './components/Footer';

import './App.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <Portfolio/>
      <Resume/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
