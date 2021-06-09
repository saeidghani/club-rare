import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../../layouts/MainLayout/MainLayout';
import RouteMap from '../../../routes/RouteMap';
import twitter from '../../../assets/icons/twitter.svg';
import tickBox2 from '../../../assets/icons/tickBox2.svg';

function VerifyProfile() {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <Layout displaySidebar={false} mainClassName="grid grid-cols-4">
      <div className="col-start-2 col-span-2 flex flex-col justify-center items-center mt-32">
        <img src={tickBox2} alt="tickBox" />
        <div className="relative mt-7">
          <div className="text-34 text-blue font-bold text-center">{t('verifyProfile.title')}</div>
          <div className="radialGradient radialGradient--md -left-24 -top-10"></div>
        </div>
        <p className="text-24 text-blue mt-8 text-center opacity-80">{t('verifyProfile.text1')}</p>
        <div className="relative mt-8.5">
          <button
            className="flex justify-center space-x-4 items-center border border-solid border-blue text-22 text-blue rounded-12 py-3 px-10 mt-4"
            onClick={() => history.push(RouteMap.profile.verifyProfile.viaTwitter)}
          >
            <img src={twitter} alt="twitter" />
            <div className="">{t('verifyProfile.verifyViaTwitter')}</div>
          </button>
          <div className="radialGradient radialGradient--lg left-80 -top-8 opacity-30"></div>
        </div>
      </div>
    </Layout>
  );
}

export default VerifyProfile;
