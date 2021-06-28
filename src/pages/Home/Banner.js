import React from 'react';
import { useTranslation } from 'react-i18next';
import bannerIllustration from '../../assets/images/bannerIllustration.png';
import purse from '../../assets/images/purse.png';

function Banner({ wrapperClass }) {
  const { t } = useTranslation();

  return (
    <div className={wrapperClass}>
      <div className="rounded-50 linearGradientTopToBottom relative" style={{ height: 282 }}>
        <img className="absolute top-0 right-0" src={bannerIllustration} alt="illustration" />
        <div className="absolute top-0 w-full">
          <div className="flex flex-col items-center pl-6 lg:pl-6 xl:pl-8 pr-2 pt-2 lg:pt-8">
            <div className="text-14 md:text-24 text-white self-center md:self-start font-Ubuntu mt-2 xs:mt-3.5">
              <span className="font-bold">Club</span>
              <span className="opacity-60 ml-2">Rare</span>
            </div>
            <div className="flex flex-col md:flex-row-reverse md:self-start md:justify-between items-center w-full md:pr-4">
              <img className="mt-3" src={purse} alt="purse" />
              <p
                className="text-14 md:text-20 xl:text-26 text-white text-center md:text-left 
                            font-semibold uppercase mt-3 px-2 lg:pr-2 xl:pr-0 md:pl-0"
                style={{ letterSpacing: 0.5 }}
              >
                {t('home.banner.text')}
              </p>
            </div>
            <button className="self-center md:self-start text-white font-bold border border-solid border-white rounded-12 mt-4 md:mt-2 py-2 px-7 mb-5">
              {t('home.banner.viewArtwork')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
