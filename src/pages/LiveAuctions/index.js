import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../layouts/MainLayout/MainLayout';
import BidCard from '../../components/common/BidCard';
import bag3 from '../../assets/images/products/bag-3.png';
import watch2 from '../../assets/images/products/watch-2.png';
import bag4 from '../../assets/images/products/bag-4.png';
import watch3 from '../../assets/images/products/watch-3.png';
import bag5 from '../../assets/images/products/bag-5.png';
import watch4 from '../../assets/images/products/watch-4.png';
import watch5 from '../../assets/images/products/watch-5.png';
import bag6 from '../../assets/images/products/bag-6.png';
import watch6 from '../../assets/images/products/watch-6.png';
import bag7 from '../../assets/images/products/bag-7.png';
import watch7 from '../../assets/images/products/watch-7.png';
import bag8 from '../../assets/images/products/bag-8.png';

function LiveAuctionsPage() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const items = [
    { key: 1, src: bag3 },
    { key: 2, src: watch2 },
    { key: 3, src: bag4 },
    { key: 4, src: watch3 },
    { key: 5, src: bag5 },
    { key: 6, src: watch4 },
    { key: 7, src: watch5 },
    { key: 8, src: bag6 },
    { key: 9, src: watch6 },
    { key: 10, src: bag7 },
    { key: 11, src: watch7 },
    { key: 12, src: bag8 },
  ];

  return (
    <Layout displayStickySidebar loading={loading}>
      <div className="text-24 text-blue font-semibold">{t('header.liveAuctions')}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-9 gap-x-8 md:gap-x-12 mt-16 md:mt-8">
        {items.map((i) => (
          <div key={i.key}>
            <BidCard id={i.key} src={i.src} contentClass="lightShadow p-6" />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default LiveAuctionsPage;
