import  { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Pi1 from "../../assets/assets/loungemanagment.jpg";
import Pi2 from "../../assets/assets/videoediting.jpg";
import Pi3 from "../../assets/assets/graphics.png";
import './ProjectCard.css'

const ProjectCard = () => {
  const [projects, setProjects] = useState([
    {
      img: Pi1,
      title: "Lounge managment system",
      description:
        "Developing responsive and dynamic web applications using React, JavaScript, and modern CSS frameworks. for lounge  management system ",
      likes: 0,
      liked:false


    },
    {
      img: Pi2,
      title: "Backend Development",
      description:
        "Proficient in designing robust backend systems using c# . Expertise in database management with SQL for secure and scalable solutions.",
      likes: 0,
      liked:false
    },
    {
      img: Pi3,
      title: "Web Design (UX/UI)",
      description:
        "Creating visually appealing and intuitive user interfaces. Skilled in wireframing, prototyping, and implementing user-centered design principles.",
      likes: 0,
      liked:false

    },
  ]);

 const handleLike = (index) => {
  const updatedProjects = [...projects];
  const project = updatedProjects[index];

  // Toggle like and unlike
  if (project.liked) {
    project.likes -= 1;
  } else {
    project.likes += 1;
  }

  project.liked = !project.liked;
  setProjects(updatedProjects);
};


  return (
    <div className="sectionProject" id="projects">
      <div className="title-project">
        My <span>Projects</span>
      </div>
      <div className="container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`card ${project.isEnlarged ? "enlarged" : ""}`}
          >
            <div className="pic">
              <img src={project.img} alt={`${project.title} image`} />
            </div>
            <div className="content">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
             <button
            className={`like-button ${project.liked ? "liked" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              handleLike(index);
            }}
          >
            <FaHeart /> {project.likes}
          </button>


            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
