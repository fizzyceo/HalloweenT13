import { motion } from 'framer-motion';
import React from 'react';

const MapPoint = ({ x, y, time, title, isInView }) => {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={
        isInView && {
          opacity: 1,

          transition: { duration: 1, bounce: 0.5 },
        }
      }
    >
      <text className="text01 fill-white" x="30" y="200">
        11:50 PM
      </text>

      <text className="text01 fill-white" x="350" y="200">
        Preseadadasdntation game dev
      </text>
      <circle className="ball  fill-[#db6724] ball02" r="20" cx="278" cy="201">
        {' '}
      </circle>
    </motion.g>
  );
};

export default MapPoint;
