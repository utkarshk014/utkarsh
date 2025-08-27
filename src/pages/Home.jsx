import Navbar from "../components/Navbar.jsx";
import Introduction from "../components/Home/Introduction.jsx";
import About from "../components/Home/About.jsx";
import Skills from "../components/Home/Skills.jsx";
import Projects from "../components/Home/Projects.jsx";
import Footer from "../components/Footer.jsx";
import Work from "../components/Home/Work.jsx";

export default function Home() {
  return (
    <div id="at">
      <div className="max-sm:w-screen flex justify-center bg-platinum">
        <div className="max-w-[1240px] max-sm:w-[100%] space-y-8 text-jet">
          <Navbar />
          <Introduction />
          <About />
          <Skills />
          <Work />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}
