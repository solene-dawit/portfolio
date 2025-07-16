import './SkillCard.css'
function SkillCard() {
  return (
    <section className="skill-container" id="skills">
      <h2 className="skill-title">
        My <span>Skills</span>
      </h2>
      <div className="skil">
        <div className="skill">
          <div className="skills">
            <div className="skills-info">
              <p>HTML</p>
              <p>90%</p>
            </div>
            <div className="progress-line">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>
          <div className="skills">
            <div className="skills-info">
              <p>CSS</p>
              <p>85%</p>
            </div>
            <div className="progress-line">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>
          <div className="skills">
            <div className="skills-info">
              <p>JavaScript</p>
              <p>80%</p>
            </div>
            <div className="progress-line">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className="skills">
            <div className="skills-info">
              <p>React</p>
              <p>75%</p>
            </div>
            <div className="progress-line">
              <span style={{ width: "75%" }}></span>
            </div>
          </div>

          <div className="skills">
            <div className="skills-info">
              <p>Java</p>
              <p>75%</p>
            </div>
            <div className="progress-line">
              <span style={{ width: "75%" }}></span>
            </div>
          </div>

          <div className="skills">
            <div className="skills-info">
              <p>C#</p>
              <p>85%</p>
            </div>
            <div className="progress-line">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>

          <div className="skills">
            <div className="skills-info">
              <p>c++</p>
              <p>90%</p>
            </div>
            <div className="progress-line">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>

          <div className="skills">
            <div className="skills-info">
              <p>UI/UX</p>
              <p>80%</p>
            </div>
            <div className="progress-line">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillCard;
