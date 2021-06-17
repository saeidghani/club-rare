import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CryptoIcon } from './Icons';
import RouteMap from '../../routes/RouteMap';

function BidCard({ wrapperClass, headerClass, contentClass, displayTime, src, id }) {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div className={wrapperClass} onClick={() => history.push(RouteMap.liveAuctions.view(id))}>
      <div
        className={`flex flex-col justify-center border border-solid border-white rounded-50 cursor-pointer ${
          contentClass || 'p-6'
        }`}
      >
        <div className={`flex justify-between ${headerClass}`}>
          <div className="text-18 text-blue">Blondie</div>
          {displayTime && <div className="text-gray">06:23:57</div>}
        </div>
        <img
          className="border border-solid border-white rounded-12 mt-3.5 object-contain"
          style={{ height: 233 }}
          src={src}
          alt=""
        />
        <div
          className="flex items-center justify-between bg-white px-5 pt-2 pb-5
                      rounded-t-16 rounded-b-40 mt-7"
        >
          <div className="">
            <div className="text-18">{t('profile.bid.highestBid')}</div>
            <div className="flex items-center space-x-2 mt-1">
              <div className="sm:text-18 sm:font-semibold">0.5</div>
              <CryptoIcon />
              <div className="text-12 sm:text-14 opacity-50">$2,000</div>
            </div>
          </div>
          <div
            className="text-18 bg-blue px-6 py-3 rounded-10 rounded-br-30 text-white"
            style={{ boxShadow: '10px 10px 15px 7px rgba(27, 49, 66, 0.13)' }}
          >
            {t('profile.bid.placeABid')}
          </div>
        </div>
      </div>
    </div>
  );
}
//
export default BidCard;
