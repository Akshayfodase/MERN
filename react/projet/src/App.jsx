import React from 'react';
import './index.css'; 
import image from './image/image.png'; // Corrected the import statement

const IndianFlag = () => {
  return (
    <div className="flag">
      <div className="saffron"></div>
      <div className="white">
        <div className="ashoka-chakra"></div>
        <img src={image} alt="Ashoka Chakra" style={{ height: 50 }} /> {/* Corrected the height property */}
      </div>
      <div className="green"></div>
    </div>
  );
};

export default IndianFlag;
