import React, { useEffect, useState } from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import Explore from '../components/common/Explore';
import bag3 from '../assets/images/products/bag-3.png';
import watch2 from '../assets/images/products/watch-2.png';
import bag4 from '../assets/images/products/bag-4.png';
import watch3 from '../assets/images/products/watch-3.png';
import bag5 from '../assets/images/products/bag-5.png';
import watch4 from '../assets/images/products/watch-4.png';
import watch5 from '../assets/images/products/watch-5.png';
import bag6 from '../assets/images/products/bag-6.png';
import watch6 from '../assets/images/products/watch-6.png';
import bag7 from '../assets/images/products/bag-7.png';
import watch7 from '../assets/images/products/watch-7.png';
import bag8 from '../assets/images/products/bag-8.png';

function ExplorePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const exploreItems = [
    { key: 1, timer: '06:23:57', src: bag3 },
    { key: 2, timer: 'Auction has Ended', src: watch2 },
    { key: 3, timer: 'Highest Price', src: bag4 },
    { key: 4, timer: '3h', src: watch3 },
    { key: 5, timer: '3h', src: bag5 },
    { key: 6, timer: '3h', src: watch4 },
    { key: 7, timer: '3h', src: watch5 },
    { key: 8, timer: '3h', src: bag6 },
    { key: 9, timer: '3h', src: watch6 },
    { key: 10, timer: '3h', src: bag7 },
    { key: 11, timer: '3h', src: watch7 },
    { key: 12, timer: '3h', src: bag8 },
  ];

  return (
    <Layout mainClassName="mt-1" displayStickySidebar loading={loading}>
      <Explore exploreItems={exploreItems} />
    </Layout>
  );
}

export default ExplorePage;
