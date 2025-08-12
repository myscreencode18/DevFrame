
import { motion } from "framer-motion";
import React from 'react';

export default function WaveDivider() {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#111827" // dark gray for web dev side
          d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,170.7C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
