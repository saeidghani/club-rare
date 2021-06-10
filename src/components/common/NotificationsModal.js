import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../components/UI/Modal';
import avatar from '../../assets/images/avatar-2.png';
import girl from '../../assets/images/girl.png';

function NotificationsModal({ open, onCloseModal }) {
  const { t } = useTranslation();

  const title = (
    <div className="text-18 text-center border-b border-solid border-gray p-5 w-full">
      {t('header.notifications')}
    </div>
  );

  const content = (
    <div className="flex flex-col space-y-4 px-5 mt-4 mb-6 overflow-auto" style={{ height: 420 }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <div key={i} className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10 rounded-full" src={avatar} alt="avatar" />
            <div className="flex flex-col items-start">
              <div className="text-14 font-semibold">Bigboyniftie</div>
              <div className="text-14">
                {t('header.offered')} <span className="font-bold">$600.00</span>
              </div>
            </div>
          </div>
          <img className="w-12 h-9.5 object-cover rounded-12" src={girl} alt="girl" />
        </div>
      ))}
      <button className=""></button>
    </div>
  );

  return (
    <Modal
      title={title}
      open={open}
      width="max-w-320"
      contentClass="mt-2 text-blue px-2"
      content={content}
      onCloseModal={onCloseModal}
    />
  );
}

export default NotificationsModal;
