import React from 'react';
import '../../assets/styles/spinner.css';

function Spinner() {
  return (
    <div className="flex justify-center pt-10">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
