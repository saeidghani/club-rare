import React from 'react';
import { useTranslation } from 'react-i18next';
import avatar from '../../../assets/images/avatar-2.png';
import { CryptoIcon } from '../../../components/common/Icons';
import { useQuery } from '../../../hooks/useQuery';

function History({ wrapperClass }) {
  const { t } = useTranslation();
  const [parsedQuery, query, setQuery] = useQuery();
  const { auctionAvailable, fixedPrice, auctionEnded, auctionNotStarted } = parsedQuery || {};

  const HistoryItem = ({ wrapperClass }) => (
    <div className={wrapperClass}>
      <div className="flex w-full items-center">
        <img
          className="w-16 h-16 lg:w-21 lg:h-21 -mr-8 z-30 border border-solid border-white rounded-full"
          src={avatar}
          alt="avatar"
        />
        <div
          className="w-full flex justify-between items-center border border-solid border-white
                  bg-white bg-opacity-20 rounded-50 py-2 lg:py-3 px-10"
        >
          <div className="">
            <div className="flex">
              <div className="text-14 lg:text-18 text-blue opacity-80 mr-2">
                {t('claimingNFT.sunlightCreated')}
              </div>
              <div className="text-14 lg:text-18 text-blue font-semibold">@Chris Yang</div>
            </div>
            <div className="text-12 lg:text-blue opacity-60 mt-1">May 11, 2021 at 4:30pm</div>
          </div>
          <div className="">
            <div className="flex items-center space-x-2">
              <div className="text-18 text-blue font-semibold">Sold for 3.00</div>
              <CryptoIcon />
            </div>
            <div className="text-18 text-blue opacity-60">$232.10</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={wrapperClass}>
      {auctionEnded && <HistoryItem wrapperClass="mb-8.5" />}
      <div className="text-24 text-blue font-semibold pl-8 mb-5">History</div>
      {!auctionNotStarted && (
        <div className="flex flex-col space-y-8">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <HistoryItem key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
