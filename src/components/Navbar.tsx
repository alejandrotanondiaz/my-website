import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left: Name / Logo */}
        <div className="w-56 flex justify-start">
          <h1 className="text-xl font-bold">
            <Link to="/">Alejandro Tañón Díaz</Link>
          </h1>
        </div>
        
        {/* Center: Navigation Links */}
        <div className="flex-1 flex justify-center space-x-6">
          <Link to="/" className="text-black hover:text-brand transition-colors">Home</Link>
          <Link to="/about" className="text-black hover:text-brand transition-colors">About</Link>          
          <Link to="/projects" className="text-black hover:text-brand transition-colors">Projects</Link>
          <Link to="/contact" className="text-black hover:text-brand transition-colors">Contact</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="w-56 flex justify-end space-x-4">
          <a
            href="https://github.com/alejandrotanondiaz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-700 hover:text-black text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/alejandrotanon/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-brand text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/alejandrotanon/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-700 hover:text-brand text-xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
