import React, { useState } from 'react';

function TechStack() {
  const [isVertical, setIsVertical] = useState(false);

  const handleToggleClick = () => {
    setIsVertical(prevIsVertical => !prevIsVertical);
  };

  return (
    <div>
      <button id="direction-toggle" onClick={handleToggleClick}>
        Toggle Direction
      </button>
      <div className={`wrapper${isVertical ? ' wrapper--vertical' : ''}`}>
        {marqueesData.map((marquee, index) => (
          <div
            key={index}
            className={`marquee${isVertical ? ' marquee--vertical' : ''}`}
          >
            {marquee.text}
          </div>
        ))}
      </div>
    </div>
  );
}

const marqueesData = [
  { text: 'Marquee 1 Content' },
  { text: 'Marquee 2 Content' },
];

export default TechStack;
