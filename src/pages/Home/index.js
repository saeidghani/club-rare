import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/MainLayout/MainLayout';
import Banner from './Banner';
import TopMembers from './TopMembers';
import LiveAuctions from '../../components/common/LiveAuctions';
import Explore from '../../components/common/Explore';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout mainClassName="md:ml-3 mt-6.5 lg:mt-0" loading={loading}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-0 lg:gap-x-4 xl:gap-x-12">
        <Banner wrapperClass="col-span-1 lg:col-span-7" />
        <TopMembers wrapperClass="col-span-5" />
      </div>
      <LiveAuctions wrapperClass="mt-14" />
      <Explore wrapperClass="mt-22" />
    </Layout>
  );
}
