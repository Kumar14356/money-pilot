import React from 'react';

const InfiniteScroll = () => {
  const partnerLogos = [
    "./images/infund.png",
    "./images/together.png",
    "./images/Avamore.png",
    "./images/infund.png",
    "./images/together.png",
    "./images/Avamore.png",
  ];

  return (
    <div className="bg-gray-50 py-4 border-t border-b border-gray-100 w-full relative overflow-x-auto z-10">
      <div className="flex gap-20 justify-evenly min-w-max px-4">
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className="h-7 inline-block object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
