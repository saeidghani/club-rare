import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../layouts/MainLayout/MainLayout';
import Banner from './Banner';
import TopMembers from './TopMembers';
import LiveAuctions from './LiveAuctions';
import Explore from './Explore';

export default function Home() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout mainClassName="ml-3" loading={loading}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-4 xl:gap-x-12">
        <Banner wrapperClass="col-span-1 lg:col-span-7" />
        <TopMembers wrapperClass="col-span-5 mt-8 md:mt-0" />
      </div>
      <LiveAuctions wrapperClass="mt-14" />
      <Explore wrapperClass="mt-22" />
    </Layout>
  );
}
