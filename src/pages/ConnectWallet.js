import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '../layouts/MainLayout/MainLayout';
import metamask from '../assets/icons/metamask.svg';
import metamaskLogo from '../assets/icons/metamaskLogo.svg';
import walletConnect from '../assets/icons/walletConnect.svg';

function ConnectWallet() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <MainLayout
      displaySidebar={false}
      mainClassName="flex flex-col justify-center items-center"
      loading={loading}
    >
      <div className="text-24 text-blue font-semibold">{t('connectWallet.title')}</div>
      <div className="text-18 text-blue mt-3.5">{t('connectWallet.text')}</div>
      <button
        className="flex justify-center space-x-4 items-center border border-solid border-white rounded-10 py-2.5 mt-6.5"
        style={{ width: 188 }}
      >
        <img src={metamaskLogo} alt="" />
        <img src={metamask} alt="" />
      </button>
      <button
        className="flex justify-center space-x-4 items-center border border-solid border-white rounded-10 py-3.5 mt-4"
        style={{ width: 188 }}
      >
        <img src={walletConnect} alt="" />
      </button>
    </MainLayout>
  );
}

export default ConnectWallet;
