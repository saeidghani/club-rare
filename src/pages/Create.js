import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Select from '../components/UI/Select';
import Layout from '../layouts/MainLayout/MainLayout';

function Create() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [activeSaleModel, setActiveSaleModel] = useState('fixedPrice');
  const onSubmit = (data) => console.log(data);

  const salesModels = [
    { key: 'fixedPrice', title: t('create.FixedPrice') },
    { key: 'auction', title: t('create.Auction') },
  ];

  const minimumBidOptions = [
    { name: 'WETH', value: 'WETH' },
    { name: 'Arlene Mccoy', value: 'arlene Mccoy' },
  ];
  const startingDateOptions = [
    { name: 'Right after listing', value: t('create.RightAfterListing') },
    { name: 'Right after listing', value: t('create.RightAfterListing') },
  ];
  const expirationDateOptions = [
    { name: '1 Day', value: t('create.1Day') },
    { name: '1 Day', value: t('create.1Day') },
  ];
  const categoryOptions = [
    { name: 'Photography', value: t('create.Photography') },
    { name: 'category2', value: t('create.category2') },
  ];

  return (
    <Layout mainClassName="lg:ml-2" displayStickySidebar>
      <div className="text-18 md:text-24 text-blue font-semibold mb-9 md:mb-15">
        {t('create.CreateACollectible')}
      </div>
      <form
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row-start-2 md:row-start-1">
          <div className="text-16 md:text-18 text-blue font-semibold mb-2.5 mt-8 md:mt-0">
            {t('create.UploadYourArtwork')}
          </div>
          <div className="flex mb-2.5">
            <div className="text-14 md:text-16 text-blue opacity-80 mr-2">
              PNG, GIF, WEBP, MP4 or MP3
            </div>
            <div className="text-14 md:text-16 text-blue font-semibold mb-2.5 opacity-50">
              {t('create.Max30mb')}
            </div>
          </div>
          <div className="grid grid-cols-1 justify-items-start items-center mt-6.5">
            <input
              className="custom-file-input text-transparent cursor-pointer row-start-1 col-start-1 w-full
              font-semibold rounded-12 bg-white bg-opacity-20 border border-solid border-white"
              style={{ height: 99 }}
              type="file"
            />
            <div className="row-start-1 col-start-1 justify-self-center z-10 text-16 md:text-20 text-gray pointer-events-none">
              {t('create.ChooseFile')}
            </div>
          </div>
          <div className="text-18 text-blue font-semibold mt-9">
            {t('create.ChooseYourSalesModel')}
          </div>
          <div className="flex flex-col space-y-6 mt-6 mb-9">
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
          {activeSaleModel === 'fixedPrice' && (
            <>
              <div className="text-16 md:text-18 text-blue mb-5.5">{t('create.Price')}</div>
              <input
                className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
                placeholder="0.00$"
                {...register('price', { required: true })}
              />
              {errors.price && (
                <p className="text-red justify-self-start mt-2 pl-2">
                  {t('create.PleaseEnterPrice')}
                </p>
              )}
            </>
          )}
          {activeSaleModel === 'auction' && (
            <div className="flex flex-col space-y-5 w-full">
              <div className="">
                <div className="text-16 md:text-18 text-blue mt-5 mb-4">
                  {t('create.MinimumBid')}
                </div>
                <Select {...register('minimumBid')} options={minimumBidOptions} width="w-full" />
              </div>
              <div className="flex justify-between w-full">
                <div className="">
                  <div className="text-18 text-blue mt-5 mb-4">{t('create.StartingDate')}</div>
                  <Select options={startingDateOptions} width="w-42" />
                </div>
                <div className="">
                  <div className="text-18 text-blue mt-5 mb-4">{t('create.ExpirationDate')}</div>
                  <Select options={expirationDateOptions} width="w-42" />
                </div>
              </div>
            </div>
          )}
          <div className="text-16 md:text-18 text-blue mt-9 mb-5.5">{t('create.Title')}</div>
          <input
            className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
            placeholder={t('create.28Characters')}
            {...register('title', { required: true })}
          />
          {errors.title && (
            <p className="text-red justify-self-start mt-2 pl-2">{t('create.PleaseEnterTitle')}</p>
          )}

          <div className="text-16 md:text-18 text-blue mt-9 mb-5.5">{t('create.Description')}</div>
          <input
            className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
            placeholder={t('create.Description')}
            {...register('description', { required: true })}
          />
          {errors.description && (
            <p className="text-red justify-self-start mt-2 pl-2">
              {t('create.PleaseEnterDescription')}
            </p>
          )}

          <div className="">
            <div className="text-16 md:text-18 text-blue mt-9 mb-5.5">{t('create.Category')}</div>
            <Select {...register('category')} options={categoryOptions} width="w-full" />
          </div>

          <div className="text-16 md:text-18 text-blue mt-9 mb-5.5">{t('create.Royalties')}</div>
          <input
            className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
            placeholder="10"
            {...register('royalties', { required: true })}
          />
          {errors.royalties && (
            <p className="text-red justify-self-start mt-2 pl-2">
              {t('create.PleaseEnterRoyalties')}
            </p>
          )}

          <div className="w-full">
            <div className="text-16 md:text-18 text-blue mt-9 mb-5.5">
              {t('create.Properties')}{' '}
              <span className="text-14 opacity-50">{t('create.Optional')}</span>
            </div>
            <div className="flex justify-between">
              <input
                className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
                placeholder={t('create.Size')}
                {...register('royalties', { required: true })}
                style={{ maxWidth: 135 }}
              />
              {errors.royalties && (
                <p className="text-red justify-self-start mt-2 pl-2">
                  {t('create.PleaseEnterProperties')}
                </p>
              )}
              <input
                className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
                placeholder="M"
                {...register('royalties', { required: true })}
                style={{ maxWidth: 135 }}
              />
              {errors.royalties && (
                <p className="text-red justify-self-start mt-2 pl-2">
                  {t('create.PleaseEnterProperties')}
                </p>
              )}
            </div>
          </div>

          <button
            className="w-full text-16 md:text-14 text-white linearGradient font-bold rounded-12 py-4 md:py-3.5 mt-17"
            type="submit"
          >
            {t('create.CreateItem')}
          </button>
        </div>
        <div className="row-start-1 md:row-start-1 xl:col-span-2 justify-self-end md:pl-6 xl:pl-40 w-full">
          <div className="text-16 md:text-18 text-blue font-semibold">Preview</div>
          <div className="grid grid-cols-1 justify-items-center items-center">
            <input
              className="custom-file-input text-transparent cursor-pointer row-start-1 col-start-1 w-full rounded-50 bg-white bg-opacity-20 mt-6.5 h-60 md:h-140"
              type="file"
            />
            <div className="row-start-1 col-start-1 z-10 text-14 md:text-16 xl:text-20 text-gray pointer-events-none">
              {t('create.UploadFileToPreview')}
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default Create;
