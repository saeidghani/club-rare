import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import roundSquare from '../../assets/icons/roundSquare.svg';
import avatar from '../../assets/images/avatar-2.png';
import girl from '../../assets/images/girl.png';
import bell from '../../assets/icons/bell.svg';
import wallet from '../../assets/icons/wallet.svg';
import walletSm from '../../assets/icons/walletSm.svg';
import magnifier from '../../assets/icons/magnifier.svg';
import logo from '../../assets/icons/logo.svg';
import Menu from '../../components/common/Menu';
import { CryptoIcon2 } from '../../components/common/Icons';
import Dropdown from '../../components/UI/Dropdown';
import NotificationsModal from '../../components/common/NotificationsModal';
import RouteMap from '../../routes/RouteMap';
import MenuDrawer from '../../components/common/MenuDrawer';
import closeBox from '../../assets/icons/closeBox.svg';

function Header() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [walletDrawerOpen, setWalletDrawerOpen] = useState(false);
  const [searchInputOpen, setSearchInputOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState({});
  const [selectedWallet, setSelectedWallet] = useState({});
  const [selectedLang, setSelectedLang] = useState({});

  const languageOptions = [
    { key: 1, title: 'English', onClick: () => i18n.changeLanguage('en') },
    { key: 2, title: 'Korean', onClick: () => i18n.changeLanguage('kr') },
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

  const walletOptions = (isDrawer) =>
    useMemo(() => {
      const titleOption = {
        key: 1,
        title: (
          <div
            className={
              isDrawer
                ? 'text-18 text-blue font-semibold mt-20'
                : 'text-18 text-blue border-b border-solid border-gray pb-2 w-full -mt-1'
            }
          >
            {t('header.WalletBalance')}
          </div>
        ),
        onClick: () => {},
      };
      const mainOptionsItems = [
        { key: 2, title: 'Balance' },
        { key: 3, title: 'Bidding Balance' },
      ];
      const mainOptions = mainOptionsItems.map((i) => ({
        key: i.key,
        title: (
          <div className={`flex justify-between items-end w-full ${isDrawer ? 'mt-7' : 'px-4'}`}>
            <div className="flex items-center space-x-3">
              <CryptoIcon2 fill={i.key === 2 ? '#377CF6' : '#818D97'} />
              <div className="flex flex-col items-start">
                <div className="text-14 text-gray font-semibold">{i.title}</div>
                <div className="text-16 text-blue font-semibold">0 ETH</div>
              </div>
            </div>
            <div className="text-16 text-gray font-semibold text-right">$0.00</div>
          </div>
        ),
        onClick: () => {},
      }));
      const lastOption = {
        key: mainOptions.length + 2,
        title: (
          <button
            className={`text-14 text-blue font-bold border border-solid border-gray
                        py-3 px-6 rounded-12 w-full ${isDrawer ? 'mt-11' : 'mx-6.5'}`}
          >
            {t('header.DisconnectWallet')}
          </button>
        ),
        onClick: () => {},
      };
      return [titleOption, ...mainOptions, lastOption];
    }, []);

  useEffect(() => {
    setSelectedLang(i18n.language === 'en' ? languageOptions[0] : languageOptions[1]);
  }, []);

  const SearchInput = ({ wrapperClass }) => (
    <div className={`relative w-full ${wrapperClass}`}>
      <input
        className="bg-white bg-opacity-20 border border-solid border-white rounded-12
                   pl-12 pr-6 py-2 w-full"
        placeholder={t('header.search')}
      />
      <img className="absolute top-2.5 left-4" src={magnifier} alt="" />
    </div>
  );

  const WalletDropdown = ({ isWalletSm }) => (
    <div className="z-30">
      <Dropdown
        title={<img src={isWalletSm ? walletSm : wallet} alt="wallet" />}
        items={walletOptions()}
        displayChevronDown={false}
        width="w-12"
        selected={selectedWallet}
        onSelect={(i) => setSelectedWallet(i)}
        menuButtonClass="justify-center -mt-1"
        menuItemsClass="bg-white absolute focus:outline-none top-12 right-4 w-72 rounded-32 shadow-lg
              flex flex-col space-y-2.5 pt-4 pb-2"
        menuItemClass="group flex justify-center rounded-40 items-center py-1.5 text-18 text-center text-blue focus:outline-none"
      />
    </div>
  );

  const SMHeader = () => (
    <div
      className="grid grid-cols-3 items-center lightShadow px-4 xs:px-5 pt-15 pb-3
                      border border-solid border-white rounded-b-40"
    >
      <div
        className="cursor-pointer"
        style={{ height: 22 }}
        onClick={() => setSearchInputOpen(true)}
      >
        <img src={magnifier} alt="" />
      </div>
      <div className="-ml-10">
        <Menu />
      </div>
      <div
        className="justify-self-end flex items-center space-x-2 pt-1"
        onClick={() => setWalletDrawerOpen(true)}
      >
        <div className="text-12 font-semibold textGradient">0 ETH</div>
        <img src={wallet} alt="wallet" />
      </div>
    </div>
  );

  return (
    <header className="">
      <NotificationsModal
        open={notificationsOpen}
        onCloseModal={() => setNotificationsOpen(false)}
      />
      <MenuDrawer
        open={searchInputOpen}
        onClose={() => setSearchInputOpen(false)}
        wrapperClass="pt-15"
      >
        <div className="px-8">
          <div className="flex items-center">
            <SearchInput />
            <div className="cursor-pointer ml-2" onClick={() => setSearchInputOpen(false)}>
              <img src={closeBox} alt="" />
            </div>
          </div>
        </div>
      </MenuDrawer>
      <MenuDrawer
        open={walletDrawerOpen}
        onClose={() => setWalletDrawerOpen(false)}
        wrapperClass="pt-15"
        displayBgShadow={false}
      >
        <div className="flex flex-col p-10">
          {walletOptions(true)?.map((i) => (
            <div key={i.key} className="">
              {i.title}
            </div>
          ))}
        </div>
      </MenuDrawer>
      <div className="hidden lg:flex justify-between items-center pt-10 px-4 lg:pl-9 lg:pr-6 xl:pr-10">
        <div className="text-blue flex items-center justify-between w-full max-w-350">
          <Link to={RouteMap.home}>
            <img src={logo} alt="" />
          </Link>
          <Link to={RouteMap.explore}>
            <div
              className={`text-14 text-blue mx-2 ${
                pathname === RouteMap.explore ? 'font-bold' : ''
              }`}
            >
              {t('header.explore')}
            </div>
          </Link>
          <Link to={RouteMap.liveAuctions.index}>
            <div
              className={`text-14 text-blue ${
                pathname === RouteMap.liveAuctions.index ? 'font-bold' : ''
              }`}
            >
              {t('header.liveAuctions')}
            </div>
          </Link>
        </div>
        <div className="w-full lg:pl-4 xl:pr-24" style={{ maxWidth: 500 }}>
          <SearchInput wrapperClass="" />
        </div>
        <div className="flex items-center justify-between w-full" style={{ maxWidth: 300 }}>
          <Dropdown
            title={
              <div className="relative">
                <img className="" src={roundSquare} alt="round square" />
                <span className="absolute top-2 left-2 text-13 text-blue font-semibold">
                  {i18n.language.toUpperCase()}
                </span>
              </div>
            }
            items={languageOptions}
            displayChevronDown={false}
            width="w-18"
            selected={selectedLang}
            onSelect={(i) => setSelectedLang(i)}
            menuButtonClass="justify-center px-4 -mt-1"
            menuItemsClass="bg-white absolute focus:outline-none top-12 -left-9 w-36 rounded-32 shadow-lg pb-4"
            menuItemClass="group flex justify-center rounded-40 items-center w-full px-2 pt-4 text-20 font-semibold text-center text-gray focus:outline-none"
            selectedItemClass="text-blue"
          />
          <div className="z-30">
            <Dropdown
              title={
                <div className="relative">
                  <img className="" src={bell} alt="bell" />
                  <span className="absolute -top-1 -right-1 text-white text-11 bg-primary py px-1 rounded">
                    12
                  </span>
                </div>
              }
              items={notificationsOptions}
              displayChevronDown={false}
              width="w-18"
              selected={selectedNotification}
              onSelect={(i) => setSelectedNotification(i)}
              menuButtonClass="justify-center px-4 -mt-1"
              menuItemsClass="bg-white absolute focus:outline-none top-12 -left-26 w-72 rounded-32 shadow-lg
              flex flex-col space-y-2 pt-1 pb-2"
              menuItemClass="group flex justify-center rounded-40 items-center py-1.5 text-18 text-center text-blue focus:outline-none"
            />
          </div>
          <div className="flex items-center">
            <div className="text-18 font-semibold textGradient">0 ETH</div>
            <WalletDropdown />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <SMHeader />
      </div>
    </header>
  );
}

export default Header;
