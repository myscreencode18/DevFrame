import { motion } from "framer-motion";
import { useState } from "react";

export default function DraggableScroller({ onScroll }) {
  const [y, setY] = useState(0);

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex items-center z-50">
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 400 }} // limit drag range
        dragElastic={0.1}
        onDrag={(event, info) => {
          setY(info.point.y);
          onScroll(info.point.y);
        }}
        className="w-3 h-24 rounded-full cursor-pointer shadow-lg"
        style={{
          background: "linear-gradient(180deg, #00f5d4, #ff4d6d)",
          boxShadow: "0 0 10px #00f5d4, 0 0 20px #ff4d6d",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />
    </div>
  );
}
