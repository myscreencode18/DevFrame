import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background subtle overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_left,_rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_right,_rgba(236,72,153,0.15),transparent_40%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Profile Image with Dual Mask */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
        >
          <img
            src="/Profile.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
          {/* Split overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-transparent to-pink-500/40 mix-blend-overlay"></div> */}



        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-cyan-400">&</span> Me
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I’m a passionate creator with a unique combination of skills in {" "}
            <span className="text-cyan-400 font-semibold">web development {""}</span> 
            and{" "}
            <span className="text-pink-400 font-semibold">video editing</span>.  
            My work blends the precision of coding with the creativity of visual storytelling.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {/* Web Dev Side */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Web Developer
              </h3>
              <p className="text-gray-400 text-sm">
                Proficient in MERN stack, Tailwind CSS, and creating responsive, high-performance websites.
              </p>
            </div>
            {/* Video Editor Side */}
            <div>
              <h3 className="text-xl font-semibold text-pink-400 mb-2">
                Video Editor
              </h3>
              <p className="text-gray-400 text-sm">
                Skilled in Adobe Premiere Pro, After Effects, and DaVinci Resolve to craft compelling visuals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



{/* Profile Image with Animated Gradient Border */}
{/* <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative w-64 h-64 rounded-full p-[4px] animate-gradient-border 
             bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 
             bg-[length:300%_300%] shadow-lg"
>
  <img
    src="/profile.jpg"
    alt="Profile"
    className="rounded-full object-cover w-full h-full border-4 border-black"
  />
</motion.div> */}
