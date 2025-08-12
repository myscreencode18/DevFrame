import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="bg-white text-black rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold shadow-lg cursor-pointer hover:scale-110 transition">
        {`{▶}`}
      </div>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="mt-2 text-white"
      >
        <FaChevronDown className="text-lg" />
      </motion.div>
    </motion.div>
  );
}
