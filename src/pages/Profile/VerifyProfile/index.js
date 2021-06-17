import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../../layouts/MainLayout/MainLayout';
import RouteMap from '../../../routes/RouteMap';
import twitter from '../../../assets/icons/twitter.svg';
import tickBox2 from '../../../assets/icons/tickBox2.svg';

function VerifyProfile() {
  const history = useHistory();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout displaySidebar={false} loading={loading}>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 w-full flex flex-col justify-center items-center mx-auto mt-32">
          <img src={tickBox2} alt="tickBox" />
          <div className="relative mt-7">
            <div className="text-24 md:text-34 text-blue font-bold text-center">
              {t('verifyProfile.title')}
            </div>
            <div className="hidden lg:block radialGradient radialGradient--md -left-24 -top-10"></div>
          </div>
          <p className="text-14 md:text-24 text-blue mt-8 text-center opacity-80 px-10 sm:px-0">
            {t('verifyProfile.text1')}
          </p>
          <div className="relative mt-8.5">
            <button
              className="flex justify-center space-x-4 items-center border border-solid border-blue
               text-16 md:text-22 text-ble rounded-12 py-3 mt-4 w-72"
              onClick={() => history.push(RouteMap.profile.verifyProfile.viaTwitter)}
            >
              <img src={twitter} alt="twitter" />
              <div className="">{t('verifyProfile.verifyViaTwitter')}</div>
            </button>
            <div className="hidden lg:block radialGradient radialGradient--lg left-80 -top-8 opacity-30"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default VerifyProfile;
