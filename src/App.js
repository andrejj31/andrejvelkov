import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="nav-section">
        <div className="container">
          <Navigation />
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="container">
          <About />
        </div>
      </section>
      <section className="skills-section" id="skills">
        <div className="container">
          <Skills />
        </div>
      </section>
      <section className="portfolio-section" id="projects">
        <h3 className="title">Projects I have worked on👷‍♂️</h3>
        <Portfolio></Portfolio>
      </section>
      <section className="contact-section" id="contact">
        <Contact></Contact>
      </section>
      <section className="footer-section">
        <Footer></Footer>
      </section>
    </>
  );
}

export default App;
