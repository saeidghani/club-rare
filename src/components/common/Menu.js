import React from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from '../UI/Dropdown';
import RouteMap from '../../routes/RouteMap';

function Menu() {
  const { t, i18n } = useTranslation();

  const title = (
    <div className="text-24 font-Ubuntu pb-1">
      {t('header.logo.part1')} <span className="font-bold">{t('header.logo.part2')}</span>
    </div>
  );

  const items = [
    {
      key: 1,
      title: (
        <div className="flex border border-solid border-white rounded-12 h-9">
          <div
            className={`px-5 rounded-12 flex items-center ${
              i18n.language === 'en' ? 'border-r border-solid border-white linearGradient' : ''
            }`}
            onClick={() => i18n.changeLanguage('en')}
          >
            English
          </div>
          <div
            className={`px-5 rounded-12 flex items-center ${
              i18n.language === 'kr' ? 'border-r border-solid border-white linearGradient' : ''
            }`}
            onClick={() => i18n.changeLanguage('kr')}
          >
            Korean
          </div>
        </div>
      ),
    },
    { key: 2, title: t('header.notifications'), href: RouteMap.notifications },
    { key: 3, title: t('header.liveAuctions'), href: RouteMap.liveAuctions },
    { key: 4, title: t('header.explore'), href: RouteMap.explore },
  ];

  return (
    <div className="flex justify-center w-56">
      <div className="relative z-50">
        <Dropdown
          menuButtonClass="justify-center pl-4 -mt-1"
          menuItemsClass="bg-white right-0 w-56 mt-10 rounded-md"
          title={title}
          items={items}
          displaySelected
        />
      </div>
    </div>
  );
}

export default Menu;
