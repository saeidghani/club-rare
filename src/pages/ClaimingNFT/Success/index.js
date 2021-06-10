import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../../layouts/MainLayout/MainLayout';
import nature from '../../../assets/images/nature.png';
import switchBox from '../../../assets/icons/switchBox.svg';

function ClaimingNFTSuccess() {
  const { t } = useTranslation();

  return (
    <Layout displaySidebar={false} mainClassName="grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-start-4 md:col-span-6 xl:col-start-5 xl:col-span-4">
        <div className="w-full mx-auto flex flex-col items-center mt-20 lg:mt-8">
          <div className="text-24 lg:text-34 text-blue font-bold">
            {t('claimingNFTSuccess.title')}
          </div>
          <div className="relative mt-2">
            <div className="text-14 lg:text-18 text-center">
              {t('claimingNFTSuccess.text.part1')}
              <br className="hidden lg:block" /> {t('claimingNFTSuccess.text.part2')}
            </div>
            <div className="hidden lg:block radialGradient radialGradient--md left-24 -top-2"></div>
          </div>
        </div>
        <div
          className="relative w-full flex flex-col space-y-12 lg:space-y-4
       justify-center items-center mx-auto mt-8"
        >
          <img
            className="w-full border border-solid border-white rounded-50 p-7"
            src={nature}
            alt="nature"
          />
          <div className="hidden lg:block radialGradient radialGradient--lg left-120 top-28 opacity-30"></div>
          <div className="flex items-center space-x-5 w-full mt-8.5">
            <button
              className="w-full text-20 text-white font-semibold bg-blue rounded-12 rounded-bl-30 py-4 lg:py-3.5"
              style={{ boxShadow: '10px 20px 25px 7px rgba(27, 49, 66, 0.13)' }}
            >
              {t('claimingNFTSuccess.continue')}
            </button>
            <img className="" src={switchBox} alt="switchBox" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClaimingNFTSuccess;
