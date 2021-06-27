import React from 'react';
import bag1 from '../../../assets/images/products/bag-1.png';

function Poster({ wrapperClass }) {
  return (
    <div className={wrapperClass}>
      <div className="border border-solid border-white rounded-50 p-8">
        <img
          className="w-full border border-solid border-white rounded-12 py-4 pl-2"
          src={bag1}
          alt="nature"
        />
      </div>
    </div>
  );
}

export default Poster;
