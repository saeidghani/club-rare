import React from 'react';
import { useTranslation } from 'react-i18next';
import nature from '../../../assets/images/nature.png';
import avatar from '../../../assets/images/avatar-2.png';

function Poster() {
  const { t } = useTranslation();

  return (
    <div>
      <img
        className="w-full border border-solid border-white rounded-50 p-7"
        src={nature}
        alt="nature"
      />
      <div className="flex w-full items-center mt-10.5">
        <img
          className="w-16 h-16 lg:w-21 lg:h-21 -mr-8 z-30 border border-solid border-white rounded-full"
          src={avatar}
          alt="avatar"
        />
        <div className="w-full border border-solid border-white bg-white bg-opacity-20 rounded-50 py-2 lg:py-3 pl-10">
          <div className="flex">
            <div className="text-14 lg:text-18 text-blue opacity-80 mr-2">
              {t('claimingNFT.sunlightCreated')}
            </div>
            <div className="text-14 lg:text-18 text-blue font-semibold">@Chris Yang</div>
          </div>
          <div className="text-12 lg:text-blue opacity-60 mt-1">May 11, 2021 at 4:30pm</div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
