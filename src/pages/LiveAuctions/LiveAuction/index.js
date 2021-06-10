import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../../layouts/MainLayout/MainLayout';
import { useQuery } from '../../../hooks/useQuery';
import BidModal from './BidModal';
import AuctionSummary from './AuctionSummary';
import History from './History';
import Information from './Information';
import Poster from './Poster';
import PutOnSale from './PutOnSale';

function LiveAuction() {
  const { t } = useTranslation();
  const [parsedQuery, query, setQuery] = useQuery();
  const { putOnSale } = parsedQuery || {};
  const [bidOpen, setBidOpen] = useState(false);

  return (
    <Layout mainClassName="mx-4">
      <BidModal open={bidOpen} onCloseModal={() => setBidOpen(false)} />
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-12 gap-y-6 w-full mt-8">
        <div className="md:col-start-1 md:col-span-5 lg:col-start-1 lg:col-span-5">
          <Poster />
          <Information />
        </div>
        <div className="md:col-start-6 md:col-span-7 lg:col-start-6 lg:col-span-7 w-full">
          {putOnSale ? (
            <PutOnSale />
          ) : (
            <AuctionSummary wrapperClass="" onSetBidOpen={() => setBidOpen(true)} />
          )}
          <History wrapperClass="mt-11.5" />
        </div>
      </div>
    </Layout>
  );
}

export default LiveAuction;
