import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Layout from '../../../layouts/MainLayout/MainLayout';
import twitter from '../../../assets/icons/twitterWhite.svg';
import avatar from '../../../assets/images/avatar-2.png';

function EditProfile() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const avatarFileRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onFileUpload = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  return (
    <Layout loading={loading}>
      <div className="px-10.5 md:px-0 grid grid-cols-1 md:grid-cols-3">
        <form className="md:col-start-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="md:mt-6.5 flex flex-col items-center">
            {preview && (
              <img
                className="w-full
              text-16 lg:text-18 font-semibold rounded-full bg-white bg-opacity-20 border border-solid border-white"
                style={{ height: 124, width: 124 }}
                src={preview || avatar}
                alt="avatar"
              />
            )}
            <div className="relative">
              <input
                className={`custom-file-input text-transparent cursor-pointer w-full text-16 lg:text-18 font-semibold
               rounded-full bg-gray bg-opacity-50 w-31 h-31
                        border border-solid border-white ${preview ? 'hidden' : 'block'}`}
                style={{ height: 124, width: 124 }}
                onChange={onFileUpload}
                type="file"
                accept="image/*"
                ref={avatarFileRef}
              />
              {!preview && (
                <div
                  className="absolute top-30 lg:top-8 left-3 z-30 text-18 font-semibold cursor-pointer mt-4"
                  style={{ color: '#377CF6' }}
                  onClick={() => avatarFileRef?.current?.click()}
                >
                  Add Picture
                </div>
              )}
            </div>
            {preview && (
              <div
                className="z-30 text-18 font-semibold cursor-pointer mt-4"
                style={{ color: '#377CF6' }}
                onClick={() => avatarFileRef?.current?.click()}
              >
                {t('editProfile.editPicture')}
              </div>
            )}
          </div>
          <div className="text-18 text-blue font-semibold mt-20 lg:mt-9 mb-5.5">
            {t('editProfile.name')}
          </div>
          <input
            className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
            placeholder="Emilie"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <p className="text-red justify-self-start mt-2 pl-2">
              {t('editProfile.pleaseEnterName')}
            </p>
          )}

          <div className="text-18 text-blue font-semibold mt-9 mb-5.5">
            {t('editProfile.customURl')}
          </div>
          <input
            className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
            placeholder={t('editProfile.customURlPlaceholder')}
            {...register('customURl', { required: true })}
          />
          {errors.customURl && (
            <p className="text-red justify-self-start mt-2 pl-2">
              {t('editProfile.pleaseEnterCustomURl')}
            </p>
          )}

          <div className="text-18 text-blue font-semibold mt-9 mb-5.5">{t('editProfile.bio')}</div>
          <input
            className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
            placeholder={t('editProfile.bioPlaceholder')}
            {...register('bio', { required: true })}
          />
          {errors.bio && (
            <p className="text-red justify-self-start mt-2 pl-2">
              {t('editProfile.pleaseEnterBio')}
            </p>
          )}

          <div className="text-18 text-blue font-semibold mt-9 mb-5.5">
            {t('editProfile.email')}
          </div>
          <input
            className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
            placeholder={t('editProfile.emailPlaceholder')}
            {...register('email', { required: true })}
          />
          {errors.email && (
            <p className="text-red justify-self-start mt-2 pl-2">
              {t('editProfile.pleaseEnterEmail')}
            </p>
          )}

          <div className="text-18 text-blue font-semibold mt-9">
            {t('editProfile.verifiedTwitter')}
          </div>
          <div className="inline-flex justify-center items-center space-x-3 mx-auto mt-9 bg-blue rounded-12 p-3">
            <img src={twitter} alt="twitter" />
            <div className="text-18 text-white">@emillieporsme</div>
          </div>

          <button
            className="w-full text-16 lg:text-14 text-white linearGradient font-bold rounded-12 py-4 lg:py-3.5 mt-17"
            type="submit"
          >
            {t('editProfile.updateProfile')}
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default EditProfile;
