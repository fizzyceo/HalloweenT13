import React, { useRef } from 'react';
//import { useInView } from 'react-intersection-observer';
import { motion, useInView } from 'framer-motion';
import MapPoint from './MapPoint';
import Svggroup from './Svggroup';
import { useEffect } from 'react';
import { useState } from 'react';

const Plan = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const path1 = useRef();
  const pathVariants = {
    hidden: {
      opacity: 0.5,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,

      transition: {
        duration: 8,
        ease: 'easeOut',
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

  function animate_svg_on_scroll(value) {
    var pathLength1 = path1.current.getTotalLength(); // Getting the total length of the SVG path.

    path1.current.style.strokeDasharray = 100; // Get the starting position of the draw.
    path1.current.style.strokeDashoffset = pathLength1;
    var draw = pathLength1 * value;
    path1.current.style.strokeDashoffset = pathLength1 - draw;
  }
  useEffect(() => {
    const handleScroll = (event) => {
      const value = window.scrollY / 1069;

      animate_svg_on_scroll(value);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="challenges"
      className="texts w-[90%] text-white relative flex flex-col mx-auto items-center"
    >
      <h1 className="text-[50px]">DAY 01</h1>
      <svg
        ref={ref1}
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 1200"
      >
        {/*variants={pathVariants}
          initial="hidden"
  animate={isInView1 && 'visible'}*/}

        <motion.path
          ref={path1}
          className="theLine path1  stroke-white text-black"
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
            10h30 - 10h50
          </text>

          <text className="text01 title fill-white" x="350" y="200">
            Welcome session
          </text>
          <circle
            className="ball  fill-[#db6724] ball02"
            r="20"
            cx="278"
            cy="201"
          ></circle>

          <text className="text01 fill-white" x="15" y="400">
            11h20- 12h30
          </text>
          <text className="text01 title fill-white" x="370" y="400">
            Game-dev fundamentals
          </text>

          <circle
            className="ball  fill-[#db6724] ball03"
            r="20"
            cx="327"
            cy="401"
          ></circle>

          <text className="text01 fill-white" x="15" y="610">
            13h10- 15h10
          </text>
          <text className="text01 title fill-white" x="300" y="610">
            Build a game in python
          </text>

          <circle
            className="ball  fill-[#db6724] ball04"
            r="20"
            cx="203"
            cy="601"
          ></circle>

          <text className="text01 fill-white" x="15" y="810">
            Break
          </text>
          <text className="text01 title fill-white" x="300" y="810">
            diverse activities
          </text>

          <circle
            className="ball  fill-[#db6724] ball04"
            r="20"
            cx="130"
            cy="801"
          ></circle>

          <text className="text01 fill-white" x="15" y="1010">
            17h00
          </text>
          <text className="text01 title fill-white" x="350" y="1010">
            Closing of day 1
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
          <text className="text01 fill-white" x="15" y="210">
            10h30 - 10h50
          </text>

          <text className="text01 title fill-white" x="350" y="210">
            Welcome session
          </text>
          <circle
            className="ball  fill-[#db6724] ball02"
            r="20"
            cx="278"
            cy="201"
          ></circle>

          <text className=" text01 fill-white" x="15" y="410">
            11h20 - 13h30
          </text>
          <text className="title text01 fill-white" x="370" y="410">
            Artificial intelligence
          </text>

          <circle
            className="ball  fill-[#db6724] ball03"
            r="20"
            cx="327"
            cy="401"
          ></circle>

          <text className="text01 fill-white" x="15" y="610">
            14h10 -15h20
          </text>
          <text className="text01 title fill-white" x="300" y="610">
            VR & AR kickstart
          </text>

          <circle
            className="ball  fill-[#db6724] ball04"
            r="20"
            cx="203"
            cy="601"
          ></circle>

          <text className="text01 fill-white" x="15" y="810">
            15h20 ------- 16h
          </text>
          <text className="text01 title fill-white" x="300" y="810">
            VR & AR experience
          </text>

          <circle
            className="ball  fill-[#db6724] ball04"
            r="20"
            cx="130"
            cy="801"
          ></circle>

          <text className="text01 fill-white" x="15" y="1010">
            17h00
          </text>
          <text className="text01 title fill-white" x="350" y="1010">
            Trick or Code Closing
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
