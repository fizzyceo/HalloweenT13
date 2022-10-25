import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

const Section = ({ children, index, setSelectedMenu }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  if (isInView) {
    setSelectedMenu(index);
  } else {
    setSelectedMenu('');
  }

  return (
    <section id="" className="mt-32" ref={ref}>
      <div
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
