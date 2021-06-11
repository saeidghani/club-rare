import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../layouts/MainLayout/MainLayout';
import nature from '../../assets/images/nature.png';
import avatar from '../../assets/images/avatar-2.png';
import switchBox from '../../assets/icons/switchBox.svg';
import { CryptoIcon } from '../../components/common/Icons';

function ClaimingNFT() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout displaySidebar={false} loading={loading}>
      <div className="w-full mx-auto flex flex-col items-center mt-28 lg:mt-8 pb-6">
        <div className="text-24 lg:text-34 text-blue font-bold">{t('claimingNFT.title')}</div>
        <div className="relative mt-2">
          <div className="text-14 lg:text-18 text-center">
            {t('claimingNFT.text.part1')}
            <br className="hidden lg:block" /> {t('claimingNFT.text.part2')}
          </div>
          <div className="hidden lg:block radialGradient radialGradient--md left-24 -top-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-12 gap-y-6 w-full mt-8">
        <hr className="hidden lg:block row-start-1 col-start-2 col-span-10 mb-8" />
        <img
          className="md:justify-self-start md:row-start-2 md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-4 w-full border border-solid border-white rounded-50 p-7"
          src={nature}
          alt="nature"
        />
        <div className="md:row-start-2 md:col-start-6 md:col-span-7 lg:col-start-6 lg:col-span-6 self-center w-full">
          <div className="bg-white rounded-32 lg:rounded-50 p-5 lg:p-8">
            <div className="flex justify-between items-center">
              <div className="text-24 lg:text-24 text-blue font-semibold">
                {t('claimingNFT.sunlight')}
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-12 lg:text-14 text-blue opacity-70">
                  {t('claimingNFT.auctionEnded')}
                </div>
                <div className="text-14 lg:text-24 text-blue md:pb-1">15 Jan,2020</div>
              </div>
            </div>
            <div className="text-12 lg:text-16 text-blue mt-8.5">{t('claimingNFT.winningBid')}</div>
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center space-x-2">
                <div className="text-16 lg:text-22 text-blue font-bold">3.00 ETH</div>
                <CryptoIcon />
              </div>
              <div className="text-12 lg:text-16 text-blue">$3,600</div>
            </div>
            <div className="flex items-center space-x-5 w-full mt-8">
              <button
                className="w-full text-16 lg:text-20 text-white font-semibold bg-blue rounded-12 rounded-bl-30 py-4 lg:py-3.5"
                style={{ boxShadow: '10px 20px 25px 7px rgba(27, 49, 66, 0.13)' }}
              >
                {t('claimingNFT.claimYourNFT')}
              </button>
              <img className="" src={switchBox} alt="switchBox" />
            </div>
          </div>
          <div className="relative flex w-full items-center mt-10.5">
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
            <div className="hidden lg:block radialGradient radialGradient--lg left-60 -top-20 opacity-30"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClaimingNFT;
