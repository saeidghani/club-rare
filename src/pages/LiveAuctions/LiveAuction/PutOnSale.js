import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Select from '../../../components/UI/Select';

function PutOnSale() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [activeSaleModel, setActiveSaleModel] = useState('fixedPrice');
  const onSubmit = (data) => console.log(data);

  const salesModels = [
    { key: 'fixedPrice', title: t('productPage.PutOnSale.FixedPrice') },
    { key: 'auction', title: t('productPage.PutOnSale.Auction') },
  ];

  const minimumBidOptions = [
    { name: 'WETH', value: 'WETH' },
    { name: 'Arlene Mccoy', value: 'arlene Mccoy' },
  ];
  const startingDateOptions = [
    { name: 'Right after listing', value: t('productPage.PutOnSale.rightAfterListing') },
    { name: 'Right after listing', value: t('productPage.PutOnSale.rightAfterListing') },
  ];
  const expirationDateOptions = [
    { name: '1 Day', value: t('productPage.PutOnSale.1Day') },
    { name: '1 Day', value: t('productPage.PutOnSale.1Day') },
  ];

  return (
    <div className="w-full border border-solid border-white bg-white bg-opacity-20 rounded-50 py-2 md:py-9 px-4 md:px-12">
      <div className="mt-9 md:mt-0 mb-4">{t('productPage.PutOnSale.ChooseYourSalesModel')}</div>
      <div className="flex flex-col space-y-6">
        {salesModels.map((m) => (
          <button
            key={m.key}
            className={`w-full text-16 md:text-18 font-semibold rounded-12 py-4 md:py-3.5 border border-solid border-white ${
              m.key === activeSaleModel
                ? 'text-white linearGradient'
                : 'text-blue bg-white bg-opacity-20'
            }`}
            onClick={() => setActiveSaleModel(m.key)}
          >
            {m.title}
          </button>
        ))}
      </div>
      <form className="mt-3.5 w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {activeSaleModel === 'fixedPrice' && (
          <>
            <div className="text-18 text-blue mt-5">{t('productPage.PutOnSale.Price')}</div>
            <input
              className="responsive-placeholder bg-transparent border-b border-solid border-white
                   py-3.5 w-full"
              placeholder="0.00$"
              {...register('price', { required: true })}
            />
            {errors.price && (
              <p className="text-red justify-self-start mt-2 pl-2">
                {t('productPage.PutOnSale.PleaseEnterPrice')}Please Enter Price
              </p>
            )}
          </>
        )}
        {activeSaleModel === 'auction' && (
          <div className="flex flex-col space-y-5 w-full">
            <div className="">
              <div className="text-18 text-blue mt-5 mb-4">
                {t('productPage.PutOnSale.MinimumBid')}
              </div>
              <Select {...register('minimumBid')} options={minimumBidOptions} width="w-full" />
            </div>
            <div className="flex justify-between w-full">
              <div className="">
                <div className="text-18 text-blue mt-5 mb-4">
                  {t('productPage.PutOnSale.StartingDate')}
                </div>
                <Select options={startingDateOptions} width="w-32 md:w-42" />
              </div>
              <div className="">
                <div className="text-18 text-blue mt-5 mb-4">
                  {t('productPage.PutOnSale.ExpirationDate')}
                </div>
                <Select options={expirationDateOptions} width="w-32 md:w-42" />
              </div>
            </div>
          </div>
        )}
        <div className="text-18 text-blue mt-5">{t('productPage.PutOnSale.Title')}</div>
        <input
          className="responsive-placeholder bg-transparent border-b border-solid border-white
                   py-3.5 w-full"
          placeholder={t('productPage.PutOnSale.28Characters')}
          {...register('title', { required: true })}
        />
        {errors.title && (
          <p className="text-red justify-self-start mt-2 pl-2">
            {t('productPage.PutOnSale.PleaseEnterTitle')}
          </p>
        )}

        <div className="text-18 text-blue mt-5">{t('productPage.PutOnSale.Description')}</div>
        <input
          className="responsive-placeholder bg-transparent border-b border-solid border-white
                   py-3.5 w-full"
          placeholder={t('productPage.PutOnSale.Description')}
          {...register('description', { required: true })}
        />
        {errors.description && (
          <p className="text-red justify-self-start mt-2 pl-2">
            {t('productPage.PutOnSale.PleaseEnterDescription')}
          </p>
        )}

        <button
          className="w-full text-16 md:text-20 text-white font-semibold bg-blue rounded-12 rounded-b-30 py-4 md:py-3.5 mt-10"
          style={{ boxShadow: '10px 20px 25px 7px rgba(27, 49, 66, 0.13)' }}
          type="submit"
        >
          {t('productPage.PutOnSale.PutOnSale')}
        </button>
      </form>
    </div>
  );
}

export default PutOnSale;
