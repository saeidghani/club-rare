import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import roundSquare from '../../assets/icons/roundSquare.svg';
import avatar from '../../assets/images/avatar-2.png';
import girl from '../../assets/images/girl.png';
import bell from '../../assets/icons/bell.svg';
import wallet from '../../assets/icons/wallet.svg';
import magnifier from '../../assets/icons/magnifier.svg';
import Menu from '../../components/common/Menu';
import { CryptoIcon2 } from '../../components/common/Icons';
import Dropdown from '../../components/UI/Dropdown';
import NotificationsModal from '../../components/common/NotificationsModal';
import RouteMap from '../../routes/RouteMap';

function Header() {
  const { t, i18n } = useTranslation();

  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const languageOptions = [
    { key: 1, title: t('header.langOption1'), onClick: () => i18n.changeLanguage('en') },
    { key: 2, title: t('header.langOption2'), onClick: () => i18n.changeLanguage('kr') },
  ];

  const notificationsOptions = useMemo(() => {
    const titleOption = {
      key: 1,
      title: (
        <div className="text-18 border-b border-solid border-gray pb-2 w-full -mt-1">
          {t('header.notifications')}
        </div>
      ),
      onClick: () => {},
    };
    const mainOptions = [2, 3, 4, 5].map((i) => ({
      key: i,
      title: (
        <div className="flex justify-between items-center w-full px-4">
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10 rounded-full" src={avatar} alt="avatar" />
            <div className="flex flex-col items-start">
              <div className="text-14 font-semibold">Bigboyniftie</div>
              <div className="text-14">
                {t('header.offered')} <span className="font-bold">$600.00</span>
              </div>
            </div>
          </div>
          <img className="w-12 h-9.5 object-cover rounded-12" src={girl} alt="girl" />
        </div>
      ),
      onClick: () => {},
    }));
    const seeAllOption = {
      key: mainOptions.length + 2,
      title: (
        <div className="text-14 text-blue font-semibold border-b border-solid border-blue">
          {t('header.seeAll')}
        </div>
      ),
      onClick: () => setNotificationsOpen(true),
    };
    return [titleOption, ...mainOptions, seeAllOption];
  }, []);

  const walletOptions = useMemo(() => {
    const titleOption = {
      key: 1,
      title: (
        <div className="text-18 text-blue border-b border-solid border-gray pb-2 w-full -mt-1">
          {t('header.WalletBalance')}
        </div>
      ),
      onClick: () => {},
    };
    const mainOptions = [2, 3].map((i) => ({
      key: i,
      title: (
        <div className="flex justify-between items-end w-full px-4">
          <div className="flex items-center space-x-3">
            <CryptoIcon2 fill={i === 2 ? '#377CF6' : '#818D97'} />
            <div className="flex flex-col items-start">
              <div className="text-14 text-gray font-semibold">Balance</div>
              <div className="text-16 text-blue font-semibold">0 ETH</div>
            </div>
          </div>
          <div className="text-16 text-gray font-semibold text-right">$0.00</div>
        </div>
      ),
      onClick: () => {},
    }));
    const seeAllOption = {
      key: mainOptions.length + 2,
      title: (
        <div
          className="text-14 text-blue font-bold border border-solid border-gray
                        py-3 px-6 rounded-12 w-full mx-10"
        >
          {t('header.DisconnectWallet')}
        </div>
      ),
      onClick: () => {},
    };
    return [titleOption, ...mainOptions, seeAllOption];
  }, []);

  return (
    <header className="">
      <NotificationsModal
        open={notificationsOpen}
        onCloseModal={() => setNotificationsOpen(false)}
      />
      <div className="hidden lg:flex justify-between items-center pt-10 px-4 lg:px-8">
        <div className="flex items-center justify-between w-full max-w-350">
          <div className="text-18 lg:text-24 font-Ubuntu pb-1">
            {t('header.logo.part1')} <span className="font-bold">{t('header.logo.part2')}</span>
          </div>
          <Link to={RouteMap.explore}>
            <div className="text-14 mx-2">{t('header.explore')}</div>
          </Link>
          <Link to={RouteMap.liveAuctions.index}>
            <div className="text-14">{t('header.liveAuctions')}</div>
          </Link>
        </div>
        <div className="relative mx-4 w-full max-w-390">
          <input
            className="left-space-placeholder fadeBgWhite border border-solid border-white rounded-12
                   pl-12 pr-6 py-2 w-full"
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
            menuItemClass="group flex justify-center rounded-40 items-center w-full px-2 py-1.5 text-18 text-center text-blue focus:outline-none"
          />
          <div className="z-30">
            <Dropdown
              title={
                <div className="relative">
                  <img className="" src={bell} alt="bell" />
                  <span className="absolute -top-1 -right-1 text-11 bg-primary py px-1 rounded">
                    12
                  </span>
                </div>
              }
              items={notificationsOptions}
              displayChevronDown={false}
              width="w-18"
              menuButtonClass="justify-center px-4 -mt-1"
              menuItemsClass="bg-white absolute focus:outline-none top-12 right-4 w-72 rounded-10 shadow-lg
              flex flex-col space-y-4 pt-4 pb-2"
              menuItemClass="group flex justify-center rounded-40 items-center py-1.5 text-18 text-center text-blue focus:outline-none"
            />
          </div>
          <div className="flex items-center">
            <div className="text-18 font-semibold textGradient">0 ETH</div>
            <div className="z-30">
              <Dropdown
                title={<img className="" src={wallet} alt="wallet" />}
                items={walletOptions}
                displayChevronDown={false}
                width="w-18"
                menuButtonClass="justify-center px-4 -mt-1"
                menuItemsClass="bg-white absolute focus:outline-none top-12 right-4 w-72 rounded-10 shadow-lg
              flex flex-col space-y-4 pt-4 pb-2"
                menuItemClass="group flex justify-center rounded-40 items-center py-1.5 text-18 text-center text-blue focus:outline-none"
              />
            </div>
          </div>
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
