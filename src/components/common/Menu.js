import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MenuDrawer from '../../components/common/MenuDrawer';
import RouteMap from '../../routes/RouteMap';
import arrowBasic from '../../assets/icons/arrowBasic.svg';
import logo from '../../assets/icons/logo.svg';
import Notifications from './Notifications';

function Menu() {
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const items = [
    {
      key: 1,
      title: (
        <div className="flex border border-solid border-white rounded-12" style={{ height: 38 }}>
          <div
            className={`px-4 h-full rounded-12 flex items-center ${
              i18n.language === 'en'
                ? 'text-white border-r border-solid border-white linearGradient'
                : ''
            }`}
            onClick={() => i18n.changeLanguage('en')}
          >
            English
          </div>
          <div
            className={`px-4 h-full rounded-12 flex items-center ${
              i18n.language === 'kr'
                ? 'text-white border-r border-solid border-white linearGradient'
                : ''
            }`}
            onClick={() => i18n.changeLanguage('kr')}
          >
            Korean
          </div>
        </div>
      ),
    },
    {
      key: 2,
      title: t('header.notifications'),
      onClick: () => {
        setMenuOpen(false);
        setNotificationsOpen(true);
      },
    },
    {
      key: 3,
      title: t('header.liveAuctions'),
      onClick: () => history.push(RouteMap.liveAuctions.index),
    },
    { key: 4, title: t('header.explore'), onClick: () => history.push(RouteMap.explore) },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex items-center space-x-1 cursor-pointer" onClick={() => setMenuOpen(true)}>
        <img src={logo} alt="logo" />
        <img className="" src={arrowBasic} alt="arrow" />
      </div>
      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} wrapperClass="pt-20">
        <div className="absolute top-32 flex flex-col items-center space-y-5 w-full z-10">
          {items.map((i) => (
            <div key={i.key} className="text-18 text-blue cursor-pointer" onClick={i.onClick}>
              {i.title}
            </div>
          ))}
        </div>
      </MenuDrawer>
      <MenuDrawer open={notificationsOpen} onClose={() => setNotificationsOpen(false)}>
        <Notifications onClose={() => setNotificationsOpen(false)} />
      </MenuDrawer>
    </div>
  );
}

export default Menu;
