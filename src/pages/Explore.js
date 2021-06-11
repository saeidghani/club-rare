import React, { useEffect, useState } from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import Explore from '../components/common/Explore';

function ExplorePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout displayStickySidebar loading={loading}>
      <Explore />
    </Layout>
  );
}

export default ExplorePage;
