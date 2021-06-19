import React from 'react';
import avatar1 from '../../assets/images/avatar-1.png';
import boy from '../../assets/images/boy.png';
import closeBox from '../../assets/icons/closeBox.svg';

function Notifications({ onClose }) {
  return (
    <div className="pt-15 pb-8 px-10">
      <div className="grid grid-cols-3 items-center border-b border-solid border-white pb-4 mb-11 mr-5 ">
        <div className="col-start-2 text-center text-18">Notifications</div>
        <div className="col-start-3 justify-self-end cursor-pointer" onClick={onClose}>
          <img src={closeBox} alt="" />
        </div>
      </div>
      <div className="flex flex-col space-y-4 overflow-x-auto pr-5" style={{ height: 460 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={avatar1} alt="avatar1" />
              <div className="">
                <div className="text-14 font-semibold">Bigboyniftie</div>
                <div className="text-14">
                  offered <span className="font-bold">$600.00</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-12 h-9 object-cover border border-solid border-white rounded-12"
                src={boy}
                alt="boy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
