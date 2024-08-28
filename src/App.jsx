import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Service from "./components/Service";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="px-48 bg-black min-h-screen pb-6">
        <Navbar />
        <Hero />
        <About />
        <Resume />
        <Service />
        <Skill />
        <Footer />
      </div>
    </>
  );
}

export default App;
