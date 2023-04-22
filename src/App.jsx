import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import projectsData from './data/data.json';

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
        setProjects(projectsData[0].projects);
  }, []);

  return (
    <div className="App">
      <Header title="Najib Osman" occupation="Web Developer" />
      <AboutMe
        myself="About me"
        description="Hello, my name is Najib Osman. I am a recent graduate of computer programming and web development from Humber College. I love to learn different languages in coding, and after challenge myself to code projects with the new languages i have learned. I am a front-end web developer passionate about building websites and applications with responsive, clean, and user friendly code using HTML, CSS, JavaScript, and React."
        other="Coding is one of the many things i love to spend multiple hours working on. Most of the time i am either writing code or leaning a new coding language. But, if i am not doing any of those two activities, I am either playing video games, working out at the gym, or playing basketball."
        newSection="Below is a list of my projects, and ways to connect with me"
      />
      <Projects projectHeader="Projects" projects={projects} />
      <ContactUs
        getInTouch="Let's Get In Touch"
        questions="If you have any questions or want to chat then drop your information down below. I look forward to hearing from you!"
        contactForm="Contact Form"
        email="Your Email Address:"
        yourName="Your Name:"
        yourSubject="Subject:"
        yourMessage="Your Message:"
      />
    </div>
  );
}

export default App;