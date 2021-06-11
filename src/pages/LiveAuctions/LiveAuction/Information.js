import React from 'react';
import { useTranslation } from 'react-i18next';
import openSeaLogo from '../../../assets/icons/openSeaLogo.svg';
import avatar from '../../../assets/images/avatar-2.png';

function Information() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="order-last md:order-first">
        <div className="flex w-full items-center mt-10.5">
          <img
            className="w-16 h-16 md:w-21 md:h-21 -mr-8 z-30 border border-solid border-white rounded-full"
            src={avatar}
            alt="avatar"
          />
          <div className="w-full border border-solid border-white bg-white bg-opacity-20 rounded-50 py-2.5 md:py-3 pl-10">
            <div className="flex">
              <div className="text-14 md:text-14 xl:text-18 text-blue opacity-80 mr-2">
                Sunlight Created by
              </div>
              <div className="text-14 md:text-14 xl:text-18 text-blue font-semibold">
                @Chris Yang
              </div>
            </div>
            <div className="text-12 md:text-blue opacity-60 mt-1">May 11, 2021 at 4:30pm</div>
          </div>
        </div>
      </div>
      <div className="mt-11.5">
        <div className="text-18 md:text-24 text-blue font-semibold">Information</div>
        <div className="bg-white rounded-50 p-8 mt-7">
          <div className="text-16 md:text-22 text-blue font-semibold">Sunlight</div>
          <div className="text-12 md:text-16 text-blue font-bold opacity-50 mt-2.5">
            Edition 1 of 1
          </div>
          <p className="text-14 md:text-18 text-blue opacity-80 leading-6 text-justify mt-3">
            Not everything that is faced can be changed, but nothing can be changed until it is
            faced.” Detail of a forgotten relic, broken off from the source and lost from memory.
            Featuring original sound and visual design by The Weeknd & Strangeloop Studios.
          </p>
          <button className="flex items-center space-x-2 border border-solid border-blue rounded-12 p-3 mt-4">
            <img src={openSeaLogo} alt="" />
            <div className="">View On openSea</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Information;
