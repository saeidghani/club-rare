import React from 'react';
import bag1 from '../../../assets/images/products/bag-1.png';

function Poster({ wrapperClass }) {
  return (
    <div className={wrapperClass}>
      <img
        className="w-full border border-solid border-white rounded-50 p-7"
        src={bag1}
        alt="nature"
      />
    </div>
  );
}

export default Poster;
