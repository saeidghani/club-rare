import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/MainLayout/MainLayout';
import Banner from './Banner';
import TopMembers from './TopMembers';
import LiveAuctions from '../../components/common/LiveAuctions';
import Explore from '../../components/common/Explore';
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

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const exploreItems = [
    { key: 1, timer: '06:23:57', src: bag3 },
    { key: 2, timer: 'Auction has Ended', src: watch2 },
    { key: 3, timer: '', src: bag4 },
    { key: 4, timer: '', src: watch3 },
    { key: 5, timer: '06:23:57', src: bag5 },
    { key: 6, timer: '06:23:57', src: watch4 },
    { key: 7, timer: '06:23:57', src: watch5 },
    { key: 8, timer: '06:23:57', src: bag6 },
    { key: 9, timer: '06:23:57', src: watch6 },
    { key: 10, timer: '06:23:57', src: bag7 },
    { key: 11, timer: '06:23:57', src: watch7 },
    { key: 12, timer: '06:23:57', src: bag8 },
  ];

  return (
    <Layout mainClassName="" loading={loading}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-0 lg:gap-x-4 xl:gap-x-8">
        <Banner wrapperClass="col-span-1 lg:col-span-7" />
        <TopMembers wrapperClass="col-span-5" />
      </div>
      <LiveAuctions wrapperClass="mt-14" />
      <Explore wrapperClass="mt-22" exploreItems={exploreItems} />
    </Layout>
  );
}
