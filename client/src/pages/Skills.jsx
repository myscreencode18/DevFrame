import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Code, Video } from "lucide-react";

// Hook to check if section is visible
const useInView = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};

export default function Skills() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, "-100px");

  const skills = {
    dev: [
      { name: "HTML, CSS, JavaScript", level: 95, info: "5+ years experience" },
      { name: "React & MERN Stack", level: 90, info: "Full-stack projects delivered" },
      { name: "Tailwind CSS", level: 95, info: "Expert in responsive design" }
    ],
    video: [
      { name: "Adobe Premiere Pro", level: 90, info: "Certified Adobe Expert" },
      { name: "After Effects", level: 85, info: "Motion graphics specialist" },
      { name: "DaVinci Resolve", level: 80, info: "Color grading mastery" }
    ]
  };

  return (
    <section id="skills"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),transparent_50%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Web Dev Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-900/30 to-cyan-500/10 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
        >
          <div className="flex items-center gap-4 mb-6">
            <Code size={32} className="text-cyan-400" />
            <h3 className="text-2xl font-bold">Web Development</h3>
          </div>

          <ul className="space-y-4">
            {skills.dev.map((skill, index) => (
              <li key={index} className="group">
                <span
                  className="block text-sm font-semibold text-gray-300 cursor-help relative"
                  title={skill.info}
                >
                  {skill.name}
                </span>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${skill.level}%` : "0%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-shadow"
                  ></motion.div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Video Editing Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-pink-900/30 to-pink-500/10 p-8 rounded-2xl border border-pink-500/30 hover:border-pink-400 transition-all hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]"
        >
          <div className="flex items-center gap-4 mb-6">
            <Video size={32} className="text-pink-400" />
            <h3 className="text-2xl font-bold">Video Editing</h3>
          </div>

          <ul className="space-y-4">
            {skills.video.map((skill, index) => (
              <li key={index} className="group">
                <span
                  className="block text-sm font-semibold text-gray-300 cursor-help relative"
                  title={skill.info}
                >
                  {skill.name}
                </span>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${skill.level}%` : "0%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-pink-400 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-shadow"
                  ></motion.div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
