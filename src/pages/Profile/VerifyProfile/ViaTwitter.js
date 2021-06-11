import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Layout from '../../../layouts/MainLayout/MainLayout';
import RouteMap from '../../../routes/RouteMap';
import twitter from '../../../assets/icons/twitter.svg';

function ViaTwitter() {
  const history = useHistory();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Layout displaySidebar={false} mainClassName="grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-start-4 md:col-span-6 xl:col-start-5 xl:col-span-4 w-full flex flex-col justify-center items-center mx-auto mt-21 md:mt-32">
        <div className="relative mt-7">
          <div className="text-24 md:text-34 text-blue font-bold text-center">
            {t('verifyProfileViaTwitter.title')}
          </div>
          <div className="hidden lg:block radialGradient radialGradient--md -left-24 -top-10"></div>
        </div>
        <p className="text-14 md:text-24 text-blue mt-8 text-center opacity-80">
          {t('verifyProfileViaTwitter.text1')}
        </p>
        <div className="w-full max-w-400 md:max-w-270 relative mt-8.5">
          <button
            className="w-full flex justify-center space-x-4 items-center border border-solid border-blue text-16 md:text-22 text-blue rounded-12 py-3 px-10 mt-4"
            onClick={() => history.push(RouteMap.profile.verifyProfile.viaTwitter)}
          >
            <img src={twitter} alt="twitter" />
            <div className="">{t('verifyProfileViaTwitter.postTweet')}</div>
          </button>
          <div className="hidden lg:block radialGradient radialGradient--lg left-80 -top-8 opacity-30"></div>
        </div>
        <p className="text-14 md:text-24 text-blue mt-8 text-center opacity-80">
          {t('verifyProfileViaTwitter.text2')}
        </p>
        <form
          className="mt-6 w-full flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
          //style={{ maxWidth: 400 }}
        >
          <input
            className="responsive-placeholder bg-transparent border border-solid border-white rounded-12
                   px-5 py-3.5 mt-2 w-full"
            placeholder="Tweet URL"
            {...register('twitter', { required: true })}
          />
          {errors.twitter && (
            <p className="text-red justify-self-start mt-2 pl-2">
              {t('verifyProfileViaTwitter.twitterUrlErrorMsg')}
            </p>
          )}

          <button
            className="w-full md:max-w-270 mt-9 bg-blue mx-auto text-16 md:text-20 text-white font-semibold py-3 rounded-12"
            type="submit"
          >
            {t('verifyProfileViaTwitter.submit')}
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default ViaTwitter;
