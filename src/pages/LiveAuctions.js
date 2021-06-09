import React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '../layouts/MainLayout/MainLayout';
import BidCard from '../components/common/BidCard';

function LiveAuctionsPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="text-24 text-blue font-semibold">{t('header.liveAuctions')}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-9 gap-x-8 md:gap-x-12 mt-16 md:mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div key={i}>
            <BidCard contentClass="lightShadow p-6" />
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default LiveAuctionsPage;
