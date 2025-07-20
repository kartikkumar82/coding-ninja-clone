import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [items]);

  return (
    <div className="alum-caro">
        {items[currentIndex]}
    </div>
)};

export default Carousel;