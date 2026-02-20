import Navbar from "/components/Navbar.jsx";
import Hero from "/components/Hero.jsx";
import About from "/components/About.jsx";
import Portfolio from "/components/Portfolio.jsx";
import Services from "/components/Services.jsx";
import Testimonials from "/components/Testimonials.jsx";
import Contact from "/components/Contact.jsx";
import Dial from "/components/Dial.jsx";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Dial />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;