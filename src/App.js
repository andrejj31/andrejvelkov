import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Section({ id, title, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="section__title" id={`${id}-title`}>
        <span className="hl">{title}</span>
      </h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <Navigation />
      <main className="container" id="top">
        <About />
        <Section id="about" title="About">
          <AboutMe />
        </Section>
        <Section id="services" title="What I do">
          <Services />
        </Section>
        <Section id="work" title="Projects">
          <Portfolio />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
        <Footer />
      </main>
    </>
  );
}

export default App;
