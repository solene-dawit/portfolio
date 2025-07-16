import Pic2 from "../../assets/assets/solene.jpg";
import './Home.css'
function Home() {
   
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <div>
            <img className="pic" src={Pic2} />
          </div>
          <div className="te">
            <h1>
              Hi I am <span>Solene Dawit </span>
              <br />a Full-Stack Developer
            </h1>
            <p>
              Aspiring Full-Stack Developer passionate
             about solving problems and building
              impactful digital solutions.
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
