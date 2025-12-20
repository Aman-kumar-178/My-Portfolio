import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Certifacte from "./components/Certifacte";
import Get from "./components/Get";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden selection:bg-cyan-500/30">
      {/* 1. Navbar: Isme links [Home, About, Experience, Skills, Projects, Achievements, Contact] hain */}
      <Navbar />

      <main>
        {/* 2. Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* 3. About Section */}
        <section id="about">
          <About />
        </section>

        {/* 4. Experience Section (Navbar ke 'Experience' link ke liye) */}
        <section id="experience">
          <Work />
        </section>

        {/* 5. Skills Section */}
        <section id="skills">
          <Skill />
        </section>

        {/* 6. Projects Section */}
        <section id="projects">
          <Project />
        </section>

        {/* 7. Achievements Section 
            Yahan dhyan dein: Navbar mein humne 'achievements' id par scroll set kiya hai, 
            isliye id="certifications" ko badal kar id="achievements" kar diya gaya hai.
        */}
        <section id="achievements">
          <Certifacte />
        </section>

        {/* 8. Contact Section */}
        <section id="contact">
          <Get />
        </section>
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default App;