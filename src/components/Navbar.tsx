import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/alejandrotanondiaz", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/alejandrotanon", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/alejandrotanon", label: "Instagram" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left: Name / Logo */}
        <div className="w-56 flex justify-start">
          <h1 className="text-xl font-bold">
            <Link to="/">Alejandro Tañón Díaz</Link>
          </h1>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-black hover:text-brand transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Social Icons (Desktop) */}
        <div className="hidden md:flex w-56 justify-end space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-gray-700 hover:text-brand text-xl"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden focus:outline-none text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="py-2 px-4 rounded hover:bg-gray-100 text-black"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-700 hover:text-black text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
