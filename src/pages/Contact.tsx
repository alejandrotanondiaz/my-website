import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-12 text-center">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>

      <p className="text-gray-600 mb-8 max-w-md">
        Feel free to reach out via email or connect with me on any of the
        platforms below.
      </p>

      {/* Email */}
      <a
        href="mailto:a.tanon@outlook.com"
        className="flex items-center gap-2 text-lg font-medium text-brand hover:text-brand-hover transition mb-6"
      >
        <FaEnvelope className="text-xl" />
        a.tanon [at] outlook.com
      </a>

      {/* Social Links */}
      <div className="flex gap-6 text-3xl">
        <a
          href="https://github.com/alejandrotanondiaz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-brand transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/alejandrotanondiaz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-brand transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/alejandrotanondiaz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-700 hover:text-brand transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;
