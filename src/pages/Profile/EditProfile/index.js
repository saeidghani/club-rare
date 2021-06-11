import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Layout from '../../../layouts/MainLayout/MainLayout';
import avatar from '../../../assets/images/avatar-2.png';
import twitter from '../../../assets/icons/twitterWhite.svg';

function EditProfile() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [activeSaleModel, setActiveSaleModel] = useState('fixedPrice');
  const onSubmit = (data) => console.log(data);

  return (
    <Layout mainClassName="px-10.5 md:px-0 grid grid-cols-1 md:grid-cols-3">
      <form className="md:col-start-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6.5 flex flex-col items-center">
          <input
            className="custom-file-input text-transparent cursor-pointer w-full
              text-16 lg:text-18 font-semibold rounded-full bg-white bg-opacity-20 border border-solid border-white"
            style={{ height: 124, width: 124 }}
            type="file"
          />
          <div
            className="z-30 text-20 text-gray pointer-events-none mt-1"
            style={{ color: '#377CF6' }}
          >
            Edite picture
          </div>
        </div>
        <div className="text-18 text-blue mt-9 mb-5.5">Name</div>
        <input
          className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
          placeholder="Emilie"
          {...register('name', { required: true })}
        />
        {errors.name && <p className="text-red justify-self-start mt-2 pl-2">Please Enter Name</p>}

        <div className="text-18 text-blue mt-9 mb-5.5">Custom URl</div>
        <input
          className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
          placeholder="Title"
          {...register('customURl', { required: true })}
        />
        {errors.customURl && (
          <p className="text-red justify-self-start mt-2 pl-2">Please Enter Custom URl</p>
        )}

        <div className="text-18 text-blue mt-9 mb-5.5">Bio</div>
        <input
          className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
          placeholder="Description"
          {...register('bio', { required: true })}
        />
        {errors.bio && <p className="text-red justify-self-start mt-2 pl-2">Please Enter Bio</p>}

        <div className="text-18 text-blue mt-9 mb-5.5">Email</div>
        <input
          className="responsive-placeholder bg-transparent border-b border-solid border-white
                    w-full"
          placeholder="Size"
          {...register('email', { required: true })}
        />
        {errors.email && (
          <p className="text-red justify-self-start mt-2 pl-2">Please Enter Email</p>
        )}

        <div className="text-18 text-blue font-semibold mt-9">Verified Twitter</div>
        <div className="inline-flex justify-center items-center space-x-3 mx-auto mt-9 bg-blue rounded-12 p-3">
          <img src={twitter} alt="twitter" />
          <div className="text-18 text-white font-semibold">@emillieporsme</div>
        </div>

        <button
          className="w-full text-16 lg:text-14 text-white linearGradient font-bold rounded-12 py-4 lg:py-3.5 mt-17"
          type="submit"
        >
          Update Profile
        </button>
      </form>
    </Layout>
  );
}

export default EditProfile;
