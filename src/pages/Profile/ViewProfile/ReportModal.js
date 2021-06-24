import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal from '../../../components/UI/Modal';
import closeBox from '../../../assets/icons/closeBox.svg';

function ReportModal({ open, onCloseModal }) {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('profile.summary.report.email.pleaseEnterValidEmail'))
      .required(t('profile.summary.report.email.emailIsRequired')),
    description: yup
      .string()
      .required(t('profile.summary.report.description.descriptionIsRequired')),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  const title = (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between text-26 font-bold pt-6 sm:pt-11 px-4 sm:px-11">
      <div className="self-start sm:self-center text-18 sm:text-26 font-semibold sm:font-bold">
        {t('profile.summary.report.submitAReport')}
      </div>
      <div className="self-end sm:self-center cursor-pointer" onClick={onCloseModal}>
        <img src={closeBox} alt="" />
      </div>
    </div>
  );

  const content = (
    <div className="px-4.5 sm:px-11 pb-6.5 mt-2.5 sm:mt-0">
      <p className="text-14 sm:text-20 sm:font-semibold">{t('profile.summary.report.text')}</p>
      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-blue text-16 sm:text-18 sm:font-semibold">
          {t('profile.summary.report.email.title')}
        </div>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="responsive-placeholder fadeBgWhite border-b border-solid border-fadeBlue
                   pr-6 py-2 mt-1 sm:mt-4 w-full"
          placeholder={t('profile.summary.report.email.placeholder')}
          {...register('email')}
        />
        <p className="text-red">{errors.email?.message}</p>

        <div className="text-blue text-16 sm:text-18 sm:font-semibold mt-5">
          {t('profile.summary.report.description.title')}
        </div>
        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="responsive-placeholder fadeBgWhite border-b border-solid border-fadeBlue pr-6 py-2 w-full mt-1 sm:mt-4"
          placeholder={t('profile.summary.report.description.placeholder')}
          {...register('description')}
        />
        {/* errors will return when field validation fails  */}
        <p className="text-red">{errors.description?.message}</p>

        <button
          className="mt-12 sm:mt-14 bg-blue w-full text-16 sm:text-20 text-white font-semibold py-3.5
                     rounded-t-10 rounded-b-30"
          type="submit"
        >
          {t('profile.summary.report.submit')}
        </button>
      </form>
    </div>
  );

  return (
    <Modal
      title={title}
      open={open}
      contentClass="mt-2 text-blue"
      containerClass="rounded-32"
      content={content}
      onCloseModal={onCloseModal}
    />
  );
}

export default ReportModal;
