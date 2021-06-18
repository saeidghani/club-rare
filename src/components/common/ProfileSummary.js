import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import dotsDropdown from '../../assets/icons/dotsDropdown.svg';
import edit from '../../assets/icons/edit.svg';
import tickBox from '../../assets/icons/tickBox.svg';
import avatar from '../../assets/images/avatar-2.png';
import layers from '../../assets/icons/layers.svg';
import switchBox from '../../assets/icons/switchBox.svg';
import arrowBox from '../../assets/icons/arrowBox.svg';
import Dropdown from '../UI/Dropdown';
import ReportModal from '../../pages/Profile/ViewProfile/ReportModal';
import RouteMap from '../../routes/RouteMap';

function ProfileSummary({
  categories,
  activeCategory,
  onSetCategories,
  wrapperClassName,
  isUpvote,
}) {
  const { t } = useTranslation();
  const [reportOpen, setReportOpen] = useState(false);

  const dropdownItems = [
    { key: 1, title: t('profile.summary.report.title'), onClick: () => setReportOpen(true) },
  ];

  const DotsDropdown = ({ wrapperClass, menuItemsClass }) => (
    <div className={wrapperClass}>
      <Dropdown
        title={<img src={dotsDropdown} alt="dots dropdown" />}
        items={dropdownItems}
        displayChevronDown={false}
        menuButtonClass="justify-center px-4"
        menuItemsClass={`top-9 w-36 rounded-40 shadow-lg ${menuItemsClass}`}
        menuItemClass="bg-white rounded-40 px-2 py-2.5 text-red text-center justify-center"
        width="w-16"
      />
    </div>
  );

  const UpvoteContent = ({ wrapperClass }) => (
    <div className={wrapperClass}>
      <div className="flex items-center space-x-3">
        <img className="" src={arrowBox} alt="arrow box" />
        <div className="text-blue">{t('upvote.giveUpvote')}</div>
      </div>
    </div>
  );

  return (
    <div className={wrapperClassName}>
      <ReportModal open={reportOpen} onCloseModal={() => setReportOpen(false)} />
      <div className="bg-white rounded-24 px-5 py-8 lightShadow h-full">
        <div className="flex items-start justify-between mx-auto">
          <DotsDropdown wrapperClass="sm:hidden" menuItemsClass="left-0" />
          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
            <div className="relative">
              <img className="rounded-full w-19 h-19" src={avatar} alt="avatar" />
              <img className="absolute bottom-0 right-0" src={tickBox} alt="tick box" />
            </div>
            <div className="text-18 font-semibold text-center mt-2">Emilie Butler</div>
          </div>
          <div className="flex">
            <DotsDropdown wrapperClass="hidden sm:block" menuItemsClass="right-4" />
            <Link to={RouteMap.profile.edit}>
              <img src={edit} alt="edit" />
            </Link>
          </div>
        </div>
        <p className="text-14 sm:text-16 text-blue text-center sm:text-left opacity-75 mt-2 sm:mt-4.5">
          {t('profile.summary.paragraph')}
        </p>
        <div className="flex lg:flex-col xl:flex-row justify-center sm:justify-start lg:items-start xl:items-center mt-4 xl:mt-9">
          <div className="flex w-full sm:max-w-320">
            <div
              className="flex items-center space-x-2 linearGradient rounded-12
                            w-full px-2 h-12 mr-4"
            >
              <div className="text-12 text-white flex-grow">0x4A34639...5wqdgyieyvqjva81</div>
              <CopyToClipboard text="0x4A34639...5wqdgyieyvqjva81">
                <img className="cursor-pointer" src={layers} alt="layers" />
              </CopyToClipboard>
            </div>
            <img className="w-12 h-12" src={switchBox} alt="switch box" />
          </div>
          {isUpvote && (
            <UpvoteContent wrapperClass="hidden sm:block w-full ml-4 lg:ml-0 xl:ml-11 lg:mt-4 xl:mt-0" />
          )}
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
        {isUpvote && <UpvoteContent wrapperClass="block sm:hidden mt-7" />}
      </div>
    </div>
  );
}

export default ProfileSummary;
