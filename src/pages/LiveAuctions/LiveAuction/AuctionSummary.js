import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import switchBox from '../../../assets/icons/switchBox.svg';
import { CryptoIcon } from '../../../components/common/Icons';
import { useQuery } from '../../../hooks/useQuery';

function AuctionSummary({ wrapperClass, onSetBidOpen }) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [parsedQuery, query, setQuery] = useQuery();
  const { auctionAvailable, fixedPrice, auctionEnded, auctionNotStarted } = parsedQuery || {};

  const onSubmit = (data) => console.log(data);

  return (
    <div className={wrapperClass}>
      <div className="bg-white rounded-32 md:rounded-50 p-5 md:p-8">
        <div className="flex justify-between items-center">
          <div className="text-18 md:text-24 text-blue font-semibold">
            {t('productPage.auctionSummary.sunlight')}
          </div>
          {(auctionAvailable || fixedPrice) && (
            <div className="flex items-end space-x-2">
              <div className="text-14 md:text-24 text-blue flex space-x-3">
                <div className="">6h</div>
                <div className="">35m</div>
                <div className="">12s</div>
              </div>
              <div className="text-12 md:text-14 text-blue opacity-70 md:pb-1">
                {t('productPage.auctionSummary.TillEnd')}
              </div>
            </div>
          )}
          {auctionEnded && (
            <div className="text-14 md:text-24 text-blue">
              {t('productPage.auctionSummary.AuctionEnded')}
            </div>
          )}
        </div>
        {auctionAvailable && (
          <div className="text-12 md:text-16 text-blue mt-8.5">
            {t('productPage.auctionSummary.CurrentBid')}
          </div>
        )}
        {auctionEnded && (
          <div className="text-12 md:text-16 text-blue mt-8.5">
            {t('productPage.auctionSummary.SoldFor')}
          </div>
        )}
        {fixedPrice && (
          <div className="text-12 md:text-16 text-blue mt-8.5">
            {t('productPage.auctionSummary.Price')}
          </div>
        )}
        {auctionNotStarted && (
          <div className="text-12 md:text-16 text-blue mt-8.5">
            {t('productPage.auctionSummary.MinimumBid')}
          </div>
        )}
        <div className={auctionEnded ? 'flex justify-between items-center' : ''}>
          <div
            className={`flex mt-1 ${auctionEnded ? 'flex-col' : 'justify-between items-center'}`}
          >
            <div className="flex items-center space-x-2">
              <div className="text-16 md:text-22 text-blue font-bold">3.00 ETH</div>
              <CryptoIcon />
            </div>
            <div className="text-12 md:text-16 text-blue">$3,600</div>
          </div>
          {auctionEnded && <img className="" src={switchBox} alt="switchBox" />}
        </div>
        {auctionAvailable && (
          <p className="text-12 md:text-15 text-blue opacity-80 mt-3">
            {t('productPage.auctionSummary.currentBidText')}
          </p>
        )}
        {auctionNotStarted && (
          <p className="text-15 text-blue opacity-80 mt-3">
            {t('productPage.auctionSummary.minimumBidText')}
          </p>
        )}
        {(auctionAvailable || auctionNotStarted) && (
          <form className="mt-3.5 w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <div className="absolute top-4.5 left-4">
                <CryptoIcon fill="#8E8E8E" />
              </div>
              <input
                className="responsive-placeholder bg-transparent border border-solid border-blue rounded-12
                   pl-9 pr-5 py-3.5 w-full"
                placeholder="0.00"
                {...register('bid', { required: true })}
              />
              <div className="absolute top-4.5 right-4 text-gray3">0.00$</div>
            </div>
            {errors.bid && (
              <p className="text-red justify-self-start mt-2 pl-2">
                {t('productPage.auctionSummary.PleaseEnterAnAmount')}
              </p>
            )}

            <div className="flex items-center space-x-5 w-full mt-8">
              <button
                className="w-full text-16 md:text-20 text-white font-semibold bg-blue rounded-12 rounded-bl-30 py-4 md:py-3.5"
                style={{ boxShadow: '10px 20px 25px 7px rgba(27, 49, 66, 0.13)' }}
                type="submit"
              >
                {t('productPage.auctionSummary.PlaceABid')}
              </button>
              <img className="" src={switchBox} alt="switchBox" />
            </div>
          </form>
        )}
        {fixedPrice && (
          <div className="flex items-center space-x-5 w-full mt-8">
            <button
              className="w-full text-16 md:text-20 text-white font-semibold bg-blue rounded-12 rounded-bl-30 py-4 md:py-3.5"
              style={{ boxShadow: '10px 20px 25px 7px rgba(27, 49, 66, 0.13)' }}
              onClick={onSetBidOpen}
            >
              {t('productPage.auctionSummary.BuyNow')}
            </button>
            <img className="" src={switchBox} alt="switchBox" />
          </div>
        )}
      </div>
    </div>
  );
}

export default AuctionSummary;
