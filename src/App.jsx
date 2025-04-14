import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="events">
          <Events />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;

