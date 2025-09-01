import { motion } from "framer-motion";
import { FaCode, FaPlay } from "react-icons/fa";
import devBg from "../assets/dev-bg.jpg"; 
import videoBg from "../assets/video-bg.mp4"
import ScrollIndicator from "./ScrollIndicator";
import WaveDivider from "./WaveDivider";
export default function HeroSection() {
  return (
    <div id="hero" className="relative">
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden relative">
      {/* Left Side - Web Dev */}
      <motion.div
        initial={{ width: "100%" }}
        whileHover={{ width: "60%" }}
        transition={{ duration: 0.5 }}
        className="relative md:w-1/2 h-1/2 md:h-full bg-gray-900 text-white flex flex-col justify-center items-center p-8"
        style={{
          backgroundImage: `url(${devBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col items-center">
          <FaCode className="text-5xl mb-4 text-blue-400" />
          <h1 className="text-4xl font-bold text-center">Web Developer</h1>
          <p className="mt-4 text-lg text-gray-300 text-center max-w-md">
            I build fast, modern, and scalable websites.
          </p>
          <button  className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
            <a href="#projects">  View Web Projects</a>
          
          </button>
        </div>
      </motion.div>

      {/* Center Divider Logo */}
      {/* <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
          {`{▶}`}
        </div>
      </div> */}

      {/* Right Side - Video Editor */}
      <motion.div
        initial={{ width: "100%" }}
        whileHover={{ width: "60%" }}
        transition={{ duration: 0.5 }}
        className="relative md:w-1/2 h-1/2 md:h-full text-white flex flex-col justify-center items-center p-8"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center">
          <FaPlay className="text-5xl mb-4" />
          <h1 className="text-4xl font-bold text-center">Video Editor</h1>
          <p className="mt-4 text-lg text-center max-w-md">
            I craft cinematic stories from raw footage.
          </p>
          <button className="mt-6 px-6 py-3 bg-white/20 hover:bg-white/40 rounded-lg transition">
          <a href="#projects"> Watch My Reel</a>
           
          </button>
        </div>
      </motion.div>
    </div>
  <ScrollIndicator/>
  <WaveDivider/>
  </div>
  );
}
