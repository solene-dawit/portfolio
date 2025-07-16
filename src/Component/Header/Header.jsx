import { Link } from 'react-router-dom';
import pic1 from '../../assets/assets/logo.png';
import { FaSun, FaMoon } from "react-icons/fa";
import './Header.css';

const Header = ({ toggleDarkMode, darkMode }) => {

  const Links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/About" },
    { name: "Skill", link: "/Skill" },
    { name: "Contact", link: "/Contact" },
  ];

 

  return (
    <div className="header-container">
      <header className="header">
        <img className="logo" src={pic1} alt="Logo" />

        <nav className='nav-bar'>
          {Links.map((link) => (
            <Link key={link.name} to={link.link} className="nav-link" >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="action-buttons">
          <button onClick={toggleDarkMode} className="mode-toggle">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
