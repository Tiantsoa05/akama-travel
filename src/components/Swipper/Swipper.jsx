import React, { useState, useEffect } from 'react';

const images = [
  '/images/ranomafana.jpg',
  '/images/andasibe.jpg'
];

export default function Swipper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center mt-25">
      <img 
        src={images[currentIndex]} 
        alt="slider" 
        className="w-100 transition-all image-swip"
      />
    </div>
  );
}
