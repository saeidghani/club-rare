import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../layouts/MainLayout/MainLayout';
import RouteMap from '../../routes/RouteMap';

function CommunityUpvote() {
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
        <div className="md:col-start-4 md:col-span-6 xl:col-start-5 xl:col-span-4 w-full flex flex-col justify-center items-center mx-auto mt-32">
          <div className="relative w-full">
            <div className="text-24 md:text-34 text-blue font-bold text-center">
              {t('communityUpvote.title.part1')}
              <span className="textGradient ml-2">{t('communityUpvote.title.part2')}</span> <br />
              {t('communityUpvote.title.part3')}
            </div>
            <div className="hidden lg:block radialGradient radialGradient--md left-24 top-8"></div>
          </div>
          <p className="text-14 md:text-24 text-blue mt-8 text-center opacity-80">
            {t('communityUpvote.text1')}
          </p>
          <p className="text-16 md:text-22 text-blue text-center mt-8.5 opacity-80">
            {t('communityUpvote.text2')}
          </p>
          <div className="relative mt-8.5">
            <button
              className="flex justify-center space-x-4 items-center bg-blue text-16 md:text-22 text-white rounded-12 py-3.5 px-11 mt-4"
              onClick={() => history.push(RouteMap.profile.verifyProfile.index)}
            >
              {t('communityUpvote.verifyProfile')}
            </button>
            <div className="hidden lg:block radialGradient radialGradient--lg left-80 -top-8 opacity-30"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CommunityUpvote;
