// import { motion } from "framer-motion";
// import dev1 from "../assets/dev1.png"; // Replace with your projects
// import dev2 from "../assets/dev2.png";
// import reel1 from "../assets/reel1.mp4";
// import reel2 from "../assets/reel2.mp4";
// import DraggableScroller from "./DraggableScroller";
// import { useRef } from "react";

// export default function ProjectsSection() {
  
  
//     const leftRef = useRef(null);
//   const rightRef = useRef(null);

//   const handleScroll = (y) => {
//     if (leftRef.current && rightRef.current) {
//       leftRef.current.scrollTop = y * 3; // adjust multiplier for sensitivity
//       rightRef.current.scrollTop = y * 3;
//     }
//   };


//     const webProjects = [
//     {
//       title: "Portfolio Website",
//       tech: "React, TailwindCSS",
//       img: dev1,
//       link: "#",
//     },
//     {
//       title: "E-Commerce Store",
//       tech: "MERN Stack",
//       img: dev2,
//       link: "#",
//     },
//   ];

//   const videoProjects = [
//     {
//       title: "Travel Vlog",
//       video: reel1,
//     },
//     {
//       title: "Product Ad",
//       video: reel2,
//     },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row w-full h-screen md:h-auto">
//       {/* Left Side - Web Dev Projects */}
//       <div className="md:w-1/2 bg-gray-900 text-white p-8 overflow-y-auto h-screen webdev-scroll">
//         <h2 className="text-3xl font-bold mb-6">Web Development Projects</h2>
//         <div className="space-y-6">
//           {webProjects.map((proj, idx) => (
//             <motion.a
//               key={idx}
//               href={proj.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{proj.title}</h3>
//                 <p className="text-gray-400">{proj.tech}</p>
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>

//       {/* Right Side - Video Projects */}
//       <div className="md:w-1/2 bg-black text-white p-8 overflow-y-auto h-screen video-scroll">
//         <h2 className="text-3xl font-bold mb-6">Video Editing Projects</h2>
//         <div className="space-y-6">
//           {videoProjects.map((proj, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <video
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-48 object-cover"
//               >
//                 <source src={proj.video} type="video/mp4" />
//               </video>
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{proj.title}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//            {/* Center draggable scroller */}
//       {/* <DraggableScroller onScroll={handleScroll} /> */}
//     </div>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const webDevProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with MERN & Tailwind CSS.",
    img: "/dev1.jpg",
    liveLink: "https://example.com",
    codeLink: "https://github.com/example"
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Full-stack store with payments integration.",
    img: "/dev2.jpg",
    liveLink: "https://example.com",
    codeLink: "https://github.com/example"
  }
];

const videoProjects = [
  {
    id: 1,
    title: "Travel Montage",
    description: "A cinematic travel video with smooth transitions.",
    video: "/mov2.mp4",
    reelLink: "https://youtube.com"
  },
  {
    id: 2,
    title: "Product Commercial",
    description: "High-energy ad for a lifestyle brand.",
    video: "/mov3.mp4",
    reelLink: "https://youtube.com"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="flex flex-col md:flex-row h-screen w-full">
      {/* Web Dev Side */}
      <div className="md:w-1/2 bg-gray-900 text-white p-6 overflow-y-scroll h-screen custom-scrollbar-web webdev-scroll">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">Web Development</h2>
        <div className="space-y-4">
          {webDevProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.img} alt={project.title} className="rounded mb-3" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Editing Side */}
      <div className="md:w-1/2 bg-black text-white p-6 overflow-y-scroll h-screen custom-scrollbar-video video-scroll">
        <h2 className="text-3xl font-bold mb-6 text-pink-400">Video Editing</h2>
        <div className="space-y-4">
          {videoProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              <video
                src={project.video}
                muted
                loop
                autoPlay
                className="rounded mb-3"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white rounded-lg p-6 max-w-3xl w-full relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>

              {/* Media */}
              {selectedProject.img && (
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="rounded mb-4"
                />
              )}
              {selectedProject.video && (
                <video
                  src={selectedProject.video}
                  controls
                  autoPlay
                  className="rounded mb-4"
                />
              )}

              {/* Title + Description */}
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>

              {/* Links */}
              <div className="flex gap-4">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-600"
                  >
                    View Live
                  </a>
                )}
                {selectedProject.codeLink && (
                  <a
                    href={selectedProject.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-800"
                  >
                    View Code
                  </a>
                )}
                {selectedProject.reelLink && (
                  <a
                    href={selectedProject.reelLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600"
                  >
                    Watch Full Reel
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
