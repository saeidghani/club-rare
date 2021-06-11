import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import dotsDropdown from '../../../assets/icons/dotsDropdown.svg';
import edit from '../../../assets/icons/edit.svg';
import tickBox from '../../../assets/icons/tickBox.svg';
import avatar from '../../../assets/images/avatar-2.png';
import layers from '../../../assets/icons/layers.svg';
import switchBox from '../../../assets/icons/switchBox.svg';
import Dropdown from '../../../components/UI/Dropdown';
import ReportModal from './ReportModal';
import RouteMap from '../../../routes/RouteMap';

function ProfileSummary({ categories, activeCategory, onSetCategories, wrapperClassName }) {
  const { t } = useTranslation();
  const [reportOpen, setReportOpen] = useState(false);

  const dropdownItems = [
    { key: 1, title: t('profile.summary.report.title'), onClick: () => setReportOpen(true) },
  ];

  return (
    <div className={wrapperClassName}>
      <ReportModal open={reportOpen} onCloseModal={() => setReportOpen(false)} />
      <div className="bg-white rounded-24 px-5 py-8 lightShadow">
        <div className="flex items-start justify-between mx-auto">
          <img className="sm:hidden" src={dotsDropdown} alt="dots dropdown" />
          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
            <div className="relative">
              <img className="rounded-full w-19 h-19" src={avatar} alt="avatar" />
              <img className="absolute bottom-0 right-0" src={tickBox} alt="tick box" />
            </div>
            <div className="text-18 font-semibold text-center mt-2">Emilie Butler</div>
          </div>
          <div className="flex">
            <div className="hidden sm:block">
              <Dropdown
                title={<img src={dotsDropdown} alt="dots dropdown" />}
                items={dropdownItems}
                displayChevronDown={false}
                menuButtonClass="justify-center px-4"
                menuItemsClass="top-9 right-4 w-36 rounded-40 shadow-lg"
                menuItemClass="bg-white rounded-40 px-2 py-2.5 text-red text-center justify-center"
                width="w-16"
              />
            </div>
            <Link to={RouteMap.profile.edit}>
              <img src={edit} alt="edit" />
            </Link>
          </div>
        </div>
        <p className="text-14 sm:text-16 text-blue text-center sm:text-left opacity-75 mt-2 sm:mt-4.5">
          {t('profile.summary.paragraph')}
        </p>
        <div className="flex justify-center sm:justify-start items-center space-x-4 mt-4 sm:mt-9">
          <div className="flex items-center space-x-2 linearGradient rounded-12 w-full sm:max-w-250 px-2 h-12">
            <div className="text-12 text-white flex-grow">0x4A34639...5wqdgyieyvqjva81</div>
            <img className="" src={layers} alt="layers" />
          </div>
          <img className="w-12 h-12" src={switchBox} alt="switchBox" />
        </div>
        <div
          className="sm:hidden flex justify-between border border-solid border-lightGray2
                      text-blue rounded-12 p-0.5 mt-7"
        >
          {categories.map((i) => (
            <div
              key={i.key}
              className={
                i.key === activeCategory
                  ? 'bg-blue text-white px-2 py-3 rounded-10'
                  : 'flex items-center px-3 py-3'
              }
              onClick={() => onSetCategories(i.key)}
            >
              {i.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileSummary;
