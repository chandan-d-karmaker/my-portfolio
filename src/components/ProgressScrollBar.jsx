import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProgressScrollBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-linear-to-r from-[#C778DD] via-[#5BB4E1] to-[#C778DD] z-50"
      style={{
        width: `${scrollProgress}%`,
      }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default ProgressScrollBar;
