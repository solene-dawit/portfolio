import './About.css'
import Testimony from '../Testimonial/TestimonialCard'
function AboutSection() {
  return (
    <section className="about">
      <div className="about-content" >
        <h2 id="about">
          About <span>Me</span>
        </h2>
        <br />
        <p> Hi! I’m solene dawit,  i have  web development skilled in<br/>
          frontend and backend technologies like <span >Html,css, React,
           Node.js, and SQL.</span> A.
           I’v worked on impactful projects, including <br/>e-learning platforms and job
          tracking applications. Let’s collaborate and build meaningful
          projects!
        </p>
        <Testimony/>
      </div>
    
    </section>
  );
}
export default AboutSection;
