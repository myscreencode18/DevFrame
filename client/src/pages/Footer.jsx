import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer"
      className={`bg-gradient-to-r from-cyan-900 via-black to-pink-900 text-white pt-12 pb-6 animate-gradient transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        
        {/* Left - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right - Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 hover:scale-110 transition transform duration-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 hover:scale-110 transition transform duration-300">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com/yourusername" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 hover:scale-110 transition transform duration-300">
              <FaYoutube />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"
               className="hover:text-cyan-400 hover:scale-110 transition transform duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Motion & Code. All rights reserved.
      </div>
    </footer>
  );
}
