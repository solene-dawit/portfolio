
import { useState } from 'react';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Component/About/AboutSection'
import ContactForm from './Component/ContactForm/ContactForm'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home';
import ProjectCard from './Component/ProjectCard/ProjectCard';
import Skill from './Component/Skill/SkillCard'



const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<ProjectCard />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/Skill" element={<Skill />} />
              </Routes>
                <Footer />
              </div>
      </Router>
  );
};

export default App;

