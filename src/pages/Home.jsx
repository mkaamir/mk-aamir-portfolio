import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
// import Footer from '../components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
      {/* <Footer />  */}
    </div>
  );
}

export default App;