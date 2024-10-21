// import React, { useState } from 'react';
// import './ImageSlider.css'; // Optional CSS for styling

// const ImageSlider = () => {
//   const images = [
//     'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/8533129/pexels-photo-8533129.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
//     'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPreviousSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div className="slider-container">
//       <button className="prev-btn" onClick={goToPreviousSlide}>
//         ❮
//       </button>
//       <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
//       <button className="next-btn" onClick={goToNextSlide}>
//         ❯
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;


import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Optional CSS for styling

const ImageSlider = () => {
  const images = [
    'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/8533129/pexels-photo-8533129.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Auto slide functionality using useEffect and setInterval
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, currentIndex); // Re-run the effect whenever currentIndex changes

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={goToPreviousSlide}>
        ❮
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
      <button className="next-btn" onClick={goToNextSlide}>
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;

