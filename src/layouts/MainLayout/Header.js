import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import roundSquare from '../../assets/icons/roundSquare.svg';
import bell from '../../assets/icons/bell.svg';
import wallet from '../../assets/icons/wallet.svg';
import magnifier from '../../assets/icons/magnifier.svg';
import Menu from '../../components/common/Menu';
import Dropdown from '../../components/UI/Dropdown';

function Header() {
  const { pathname, search } = useLocation();
  const path = `${pathname}${search}`;
  const { t, i18n } = useTranslation();

  const languageOptions = [
    { key: 1, title: t('header.langOption1'), onClick: () => i18n.changeLanguage('en') },
    { key: 2, title: t('header.langOption2'), onClick: () => i18n.changeLanguage('kr') },
  ];

  return (
    <header className="">
      <div className="hidden lg:flex justify-between items-center pt-10 px-4 lg:px-8">
        <div className="flex items-center justify-between w-full max-w-350">
          <div className="text-18 lg:text-24 font-Ubuntu pb-1">
            {t('header.logo.part1')} <span className="font-bold">{t('header.logo.part2')}</span>
          </div>
          <div className="text-14 mx-2">{t('header.explore')}</div>
          <div className="text-14">{t('header.liveAuctions')}</div>
        </div>
        <div className="relative mx-4 w-full max-w-390">
          <input
            className="left-space-placeholder fadeBgWhite border border-solid border-white rounded-12
                   focus:outline-none pl-12 pr-6 py-2 w-full"
            placeholder={t('header.search')}
          />
          <img className="absolute top-2.5 left-4" src={magnifier} alt="" />
        </div>
        <div className="flex items-center justify-between w-full max-w-350">
          <Dropdown
            title={
              <div className="relative">
                <img className="" src={roundSquare} alt="round square" />
                <span className="absolute top-2 left-2 text-13 font-semibold">
                  {i18n.language.toUpperCase()}
                </span>
              </div>
            }
            items={languageOptions}
            displayChevronDown={false}
            width="w-18"
            menuButtonClass="justify-center px-4 -mt-1"
            menuItemsClass="bg-white absolute focus:outline-none top-12 right-4 w-22 rounded-10 shadow-lg"
            menuItemClass="group flex justify-center rounded-40 items-center w-full px-2 py-1.5 text-18 text-center text-red focus:outline-none"
          />
          <div className="relative">
            <img className="" src={bell} alt="round square" />
            <span className="absolute -top-1 -right-1 text-11 bg-primary py px-1 rounded">12</span>
          </div>
          <div className="text-18 font-semibold">0 ETH</div>
          <img className="" src={wallet} alt="round square" />
        </div>
      </div>
      <div
        className="lg:hidden flex items-center justify-between lightShadow px-5 pt-15 pb-3
                      border border-solid border-white rounded-b-40"
      >
        <img src={magnifier} alt="" />
        <Menu />
        <img className="" src={wallet} alt="round square" />
      </div>
    </header>
  );
}

export default Header;
