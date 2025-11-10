import React from 'react';

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <img 
          src="https://static.wikia.nocookie.net/five-nights-at-freddys-world-world/images/d/dd/Fazbear.gif/revision/latest/thumbnail/width/360/height/360?cb=20160122223119" 
          alt="Loading Animation" 
          className="loading-gif" 
        />
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;