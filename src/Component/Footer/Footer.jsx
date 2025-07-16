import { FaTelegram, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://t.me/solene123" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegram className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/solene-dawit-2aa949284" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.instagram.com/natanem.123/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="icon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="icon" />
        </a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
