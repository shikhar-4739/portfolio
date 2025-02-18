import "./App.css";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";

function App() {
  return (
    <div className="w-full md:w-3/5 mx-auto overflow-x-hidden">
      <Navbar />
      <div className="space-y-10 md:space-y-16">
        <Description />
        <Tools />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
