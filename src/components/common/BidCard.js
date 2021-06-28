import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CryptoIcon } from './Icons';
import RouteMap from '../../routes/RouteMap';

function BidCard({
  wrapperClass,
  headerClass,
  contentClass,
  timer,
  src,
  id,
  isPutOnSale,
  isSold,
  title,
  height,
  isLiveAuction,
}) {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div className={wrapperClass} onClick={() => history.push(RouteMap.liveAuctions.view(id))}>
      <div
        className={`flex flex-col justify-center border border-solid border-white rounded-50 cursor-pointer bg-white bg-opacity-20 ${
          contentClass || 'p-6'
        }`}
      >
        <div className={`flex justify-between ${headerClass}`}>
          <div className="text-18 text-blue font-semibold">Blondie</div>
          {timer && <div className="text-gray">{timer}</div>}
        </div>
        <img
          className="border border-solid border-white rounded-12 mt-3.5 object-contain py-1"
          style={{ height: height || 233 }}
          src={src}
          alt=""
        />
        <div
          className={`flex items-center justify-between bg-white px-5
                      rounded-t-16 rounded-b-40 mt-7 ${
                        isPutOnSale || isSold ? 'py-4' : 'pt-2 pb-4'
                      }`}
          style={{ height: isLiveAuction ? 99 : 79 }}
        >
          {!isPutOnSale && (
            <div
              className={`flex ${
                isSold ? 'w-full justify-between items-center' : 'flex-col space-y-1'
              }`}
            >
              <div className="text-16 sm:text-18">{title || t('profile.bid.highestBid')}</div>
              <div className="flex items-center space-x-2">
                <div className="sm:text-18 sm:font-semibold">0.5</div>
                <CryptoIcon />
                <div className="text-12 sm:text-14 opacity-50">$2,000</div>
              </div>
            </div>
          )}
          {!isSold && (
            <button
              className={`text-18 bg-blue px-6 py-3 text-white rounded-10 text-center ${
                isPutOnSale ? 'w-full rounded-b-30' : 'rounded-br-30'
              }`}
              style={{ boxShadow: '10px 10px 15px 7px rgba(27, 49, 66, 0.13)' }}
            >
              {isPutOnSale ? 'Put on Sale' : t('profile.bid.placeABid')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
//
export default BidCard;
