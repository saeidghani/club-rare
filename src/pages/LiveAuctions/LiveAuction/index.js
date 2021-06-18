import React, { useState, useEffect } from 'react';
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
  const [bidOpen, setBidOpen] = useState(false);
  const [bidModalTitle, setBidModalTitle] = useState('');
  const { auctionAvailable, fixedPrice, auctionEnded, auctionNotStarted, putOnSale } =
    parsedQuery || {};

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auctionAvailable && !fixedPrice && !auctionEnded && !auctionNotStarted && !putOnSale) {
      setQuery({ auctionAvailable: true });
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout displayStickySidebar loading={loading}>
      <BidModal
        bidModalTitle={bidModalTitle}
        open={bidOpen}
        onCloseModal={() => setBidOpen(false)}
      />
      <Poster wrapperClass="block md:hidden" />
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-4 lg:gap-x-2 xl:gap-x-12 gap-y-6 w-full mt-8">
        <div className="row-start-2 md:row-start-1 md:col-start-1 md:col-span-5 lg:col-start-1 lg:col-span-5">
          <Poster wrapperClass="hidden md:block" />
          <Information />
        </div>
        <div className="row-start-1 md:row-start-1 md:col-start-6 md:col-span-7 lg:col-start-6 lg:col-span-7 w-full">
          {putOnSale ? (
            <PutOnSale />
          ) : (
            <AuctionSummary
              onSetBidModalTitle={(title) => setBidModalTitle(title)}
              onSetBidOpen={() => setBidOpen(true)}
            />
          )}
          <History wrapperClass="mt-11.5" />
        </div>
      </div>
    </Layout>
  );
}

export default LiveAuction;
