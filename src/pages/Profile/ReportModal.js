import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal from '../../components/UI/Modal';
import closeBox from '../../assets/icons/closeBox.svg';

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
    <div className="flex items-center justify-between text-26 font-bold pt-11 px-11">
      <div className="text-26 font-bold">{t('profile.summary.report.submitAReport')}</div>
      <div className="cursor-pointer" onClick={onCloseModal}>
        <img src={closeBox} alt="" />
      </div>
    </div>
  );

  const content = (
    <div className="px-11 pb-6.5">
      <p className="text-20 font-semibold">{t('profile.summary.report.text')}</p>
      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-blue text-18 font-semibold">
          {t('profile.summary.report.email.title')}
        </div>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="fadeBgWhite border-b border-solid border-fadeBlue
                   focus:outline-none pr-6 py-2 mt-4 w-full"
          placeholder={t('profile.summary.report.email.placeholder')}
          {...register('email')}
        />
        <p className="text-red">{errors.email?.message}</p>

        <div className="text-blue text-18 font-semibold mt-5">
          {t('profile.summary.report.description.title')}
        </div>
        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="fadeBgWhite border-b border-solid border-fadeBlue
                   focus:outline-none pr-6 py-2 w-full mt-4"
          placeholder={t('profile.summary.report.description.placeholder')}
          {...register('description')}
        />
        {/* errors will return when field validation fails  */}
        <p className="text-red">{errors.description?.message}</p>

        <button
          className="mt-14 bg-blue w-full text-20 text-white font-semibold py-3.5
                     rounded-t-10 rounded-b-30"
          type="submit"
        >
          {t('profile.summary.report.submit')}
        </button>
      </form>
    </div>
  );

  return <Modal title={title} open={open} width="" content={content} onCloseModal={onCloseModal} />;
}

export default ReportModal;
