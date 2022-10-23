import React, { useRef } from 'react';
//import { useInView } from 'react-intersection-observer';
import { motion, useInView } from 'framer-motion';
import MapPoint from './MapPoint';
import Svggroup from './Svggroup';
const Plan = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const pathVariants = {
    hidden: {
      opacity: 0.5,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,

      transition: {
        duration: 10,
        ease: 'easeIn',
      },
    },
  };
  const PointVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 1,
        ease: 'easeIn',
        bounce: 0.5,
      },
    },
  };

  return (
    <div className="texts w-[90%] text-white relative flex flex-col mx-auto items-center">
      <h1 className="text-[50px]">DAY 01</h1>
      <svg
        ref={ref1}
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 1200"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={isInView1 && 'visible'}
          className="theLine stroke-white text-black"
          d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
          fill="none"
        />
        <motion.g
          className="title"
          variants={PointVariants}
          initial="hidden"
          animate="visible"
        >
          <text className="text01 fill-white" x="15" y="200">
            11:00 PM
          </text>

          <text className="text01 title fill-white" x="350" y="200">
            Presentation game dev
          </text>
          <circle
            className="ball  fill-[#db6724] ball02"
            r="20"
            cx="278"
            cy="201"
          ></circle>

          <text className="text01 fill-white" x="15" y="400">
            13:00 PM
          </text>
          <text className="text01 title fill-white" x="370" y="400">
            Presentation Ai tools
          </text>

          <circle
            className="ball  fill-[#db6724] ball03"
            r="20"
            cx="327"
            cy="401"
          ></circle>

          <text className="text01 fill-white" x="15" y="600">
            15:00 PM
          </text>
          <text className="text01 title fill-white" x="300" y="600">
            WORKSHOP GAME DEV HAL THEME
          </text>

          <circle
            className="ball  fill-[#db6724] ball04"
            r="20"
            cx="203"
            cy="601"
          ></circle>

          <text className="text01 fill-white" x="15" y="800">
            17:00 PM
          </text>
          <text className="text01 title fill-white" x="300" y="800">
            WORKSHOP AI generator
          </text>

          <circle
            className="ball  fill-[#db6724] ball04"
            r="20"
            cx="130"
            cy="801"
          ></circle>

          <text className="text01 fill-white" x="15" y="1000">
            17:00 PM
          </text>
          <text className="text01 title fill-white" x="350" y="1000">
            ENDING CEREMONY
          </text>

          <circle
            className="ball  fill-[#db6724] ball04"
            r="20"
            cx="300"
            cy="1001"
          ></circle>
        </motion.g>
        <circle
          className="ball  fill-white ball04"
          r="20"
          cx="325"
          cy="1151"
        ></circle>
      </svg>
      <h1 className="text-[50px] my-20">DAY 02</h1>
      <svg
        ref={ref2}
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 1200"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={isInView2 && 'visible'}
          className="theLine stroke-white text-black"
          d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
          fill="none"
        />
        <motion.g
          className="title"
          variants={PointVariants}
          initial="hidden"
          animate="visible"
        >
          <text className="text01 fill-white" x="15" y="200">
            11:00 PM
          </text>

          <text className="text01 title fill-white" x="350" y="200">
            Presentation game dev
          </text>
          <circle
            className="ball  fill-[#db6724] ball02"
            r="20"
            cx="278"
            cy="201"
          ></circle>

          <text className=" text01 fill-white" x="15" y="400">
            13:00 PM
          </text>
          <text className="title text01 fill-white" x="370" y="400">
            Presentation Ai tools
          </text>

          <circle
            className="ball  fill-[#db6724] ball03"
            r="20"
            cx="327"
            cy="401"
          ></circle>

          <text className="text01 fill-white" x="15" y="600">
            15:00 PM
          </text>
          <text className="text01 title fill-white" x="300" y="600">
            WORKSHOP GAME DEV HAL THEME
          </text>

          <circle
            className="ball  fill-[#db6724] ball04"
            r="20"
            cx="203"
            cy="601"
          ></circle>

          <text className="text01 fill-white" x="15" y="800">
            17:00 PM
          </text>
          <text className="text01 title fill-white" x="300" y="800">
            WORKSHOP AI generator
          </text>

          <circle
            className="ball  fill-[#db6724] ball04"
            r="20"
            cx="130"
            cy="801"
          ></circle>

          <text className="text01 fill-white" x="15" y="1000">
            17:00 PM
          </text>
          <text className="text01 title fill-white" x="350" y="1000">
            ENDING CEREMONY
          </text>

          <circle
            className="ball  fill-[#db6724] ball04"
            r="20"
            cx="300"
            cy="1001"
          ></circle>
        </motion.g>
        <circle
          className="ball  fill-white ball04"
          r="20"
          cx="325"
          cy="1151"
        ></circle>
      </svg>
    </div>
  );
};

export default Plan;
