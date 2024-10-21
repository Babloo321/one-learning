import React from 'react';
import './ImageWithInfo.css';

const ImageWithInfo = ({ imageUrl, infoText }) => {
  return (
    <div className="image-with-info">
      <div className="image-container">
        <img src={imageUrl} alt="Circle" className="circle-image" />
      </div>
      <div className="line"></div>
      <div className="info-text">{infoText}</div>
    </div>
  );
};

export default ImageWithInfo;


// uses
{/* <ImageWithInfo 
  imageUrl=''
  infoText=''
/> */}