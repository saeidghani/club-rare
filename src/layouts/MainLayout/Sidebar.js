import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import home from '../../assets/icons/home.svg';
import homeColorful from '../../assets/icons/homeColorful.svg';
import user from '../../assets/icons/user.svg';
import userColorful from '../../assets/icons/userColorful.svg';
import create from '../../assets/icons/create.svg';
import createColorful from '../../assets/icons/createColorful.svg';
import RouteMap from '../../routes/RouteMap';

function Sidebar() {
  const { pathname, search } = useLocation();
  const history = useHistory();
  const { t } = useTranslation();

  const navItems = [
    {
      key: 1,
      title: t('sidebar.home.title'),
      alt: t('sidebar.home.alt'),
      icon: home,
      iconColorful: homeColorful,
      href: RouteMap.home,
    },
    {
      key: 2,
      title: t('sidebar.create.title'),
      alt: t('sidebar.create.alt'),
      icon: create,
      iconColorful: createColorful,
      href: RouteMap.create,
    },
    {
      key: 3,
      title: t('sidebar.myItems.title'),
      alt: t('sidebar.myItems.alt'),
      icon: user,
      iconColorful: userColorful,
      href: RouteMap.profile.index,
    },
  ];

  return (
    <aside className="">
      <div className="hidden lg:flex lg:flex-col lg:space-y-16">
        {navItems?.map((n) => (
          <div className="relative cursor-pointer" key={n.key} onClick={() => history.push(n.href)}>
            <div
              className={`flex flex-col items-center text-center ${
                n.href === pathname ? 'p-2 border border-solid border-white rounded-12' : ''
              }`}
            >
              <img src={n.href === pathname ? n.iconColorful : n.icon} alt={n.alt} />
              <div
                className={`text-18 font-semibold mt-4 ${
                  n.href === pathname ? 'text-white' : 'text-gray'
                }`}
              >
                {n.title}
              </div>
            </div>
            <div className={n.href === pathname ? 'radialGradient' : ''} />
          </div>
        ))}
      </div>
      <div
        className="lg:hidden flex items-center justify-between p-5
                      border border-solid border-white rounded-t-40 bg-gray2"
      >
        {navItems.map((n) => (
          <div className="" key={n.key} onClick={() => history.push(n.href)}>
            <img className="" src={n.href === pathname ? n.iconColorful : n.icon} alt={n.alt} />
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
