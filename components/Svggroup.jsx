import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { useState } from 'react';
import MapPoint from './MapPoint';

const Svggroup = () => {
  const refp = useRef(null);
  const isInView = useInView(refp, { once: true });
  return (
    <g>
      <MapPoint isInView={isInView} />
    </g>
  );
};

export default Svggroup;
