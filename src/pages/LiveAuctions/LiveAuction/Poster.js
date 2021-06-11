import React from 'react';
import nature from '../../../assets/images/nature.png';

function Poster({ wrapperClass }) {
  return (
    <div className={wrapperClass}>
      <img
        className="w-full border border-solid border-white rounded-50 p-7"
        src={nature}
        alt="nature"
      />
    </div>
  );
}

export default Poster;
