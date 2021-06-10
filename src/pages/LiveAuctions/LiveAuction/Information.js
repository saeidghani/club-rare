import React from 'react';
import { useTranslation } from 'react-i18next';
import openSeaLogo from '../../../assets/icons/openSeaLogo.svg';

function Information() {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="text-24 text-blue font-semibold mt-11.5">Information</div>
      <div className="bg-white rounded-50 p-8 mt-7">
        <div className="text-22 text-blue font-semibold">Sunlight</div>
        <div className="text-16 text-blue font-bold opacity-50 mt-2.5">Edition 1 of 1</div>
        <p className="text-18 text-blue opacity-80 leading-6 text-justify mt-3">
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
  );
}

export default Information;
