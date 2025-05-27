import React from 'react';
import "../css/AdBanner.css";

const AdBanner = ({ position }) => {
  const getAdSizeClass = () => {
    switch (position) {
      case 'top':
      case 'bottom':
        return 'h-24 w-full';
      case 'sidebar':
        return 'h-80 w-full md:w-60';
      default:
        return 'h-24 w-full';
    }
  };

  return (
    <div className={`my-4 bg-gray-100 rounded-lg flex items-center justify-center ${getAdSizeClass()}`}>
      <div className="ad-content">
        <p className="ad-text">Advertisement</p>
        <p className="ad-placeholder">(Google Ad would appear here)</p>
      </div>
    </div>
  );
};

export default AdBanner;
