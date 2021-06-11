import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../../components/UI/Modal';
import closeBox from '../../../assets/icons/closeBox.svg';
import nature from '../../../assets/images/nature.png';
import { CryptoIcon } from '../../../components/common/Icons';

function NotificationsModal({ open, onCloseModal }) {
  const { t } = useTranslation();

  const title = (
    <div className="grid grid-cols-3 items-center border-gray w-full border-b border-solid border-fadeBlue">
      <div className="col-start-2 text-18 md:text-22 text-center font-semibold p-4.5">
        {t('productPage.bidModal.PlaceABid')}
      </div>
      <div
        className="col-start-3 justify-self-end mr-9 cursor-pointer"
        onClick={() => onCloseModal()}
      >
        <img className="" src={closeBox} alt="close" />
      </div>
    </div>
  );

  const content = (
    <div className="flex flex-col py-9.5 px-12">
      <div className="text-16 md:text-18 text-blue font-semibold">
        {t('productPage.bidModal.Item')}
      </div>
      <div className="flex items-center space-x-5 mt-4">
        <div className="gradient-box">
          <img className="rounded-12 w-full" src={nature} alt="nature" />
        </div>
        <div className="flex flex-col space-y-2.5">
          <div className="text-18 md:text-22 text-blue font-semibold">Sunlight</div>
          <div className="flex items-center space-x-2">
            <div className="text-16 md:text-20 text-blue font-bold">3.00 ETH</div>
            <CryptoIcon />
          </div>
          <div className="text-14 md:text-16 text-blue opacity-60">
            {t('productPage.bidModal.comissionFee')}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-8">
        <div className="colorful-checkbox">
          <label>
            <input type="checkbox" name="checkbox" value="css" />
            <span className="text-blue font-semibold">
              {t('productPage.bidModal.TermsOfService')}
            </span>
          </label>
        </div>
      </div>
      <div className="w-full mt-8">
        <button
          className="w-full text-16 md:text-20 text-white font-semibold bg-blue rounded-12 rounded-b-30 py-4 md:py-3.5"
          style={{ boxShadow: '10px 20px 25px 7px rgba(27, 49, 66, 0.13)' }}
          onClick={() => onCloseModal()}
        >
          {t('productPage.bidModal.Submit')}
        </button>
      </div>
    </div>
  );

  return (
    <Modal
      title={title}
      open={open}
      content={content}
      onCloseModal={onCloseModal}
      containerClass="rounded-50"
    />
  );
}

export default NotificationsModal;