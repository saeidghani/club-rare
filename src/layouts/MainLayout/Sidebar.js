import React from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import home from '../../assets/icons/home.svg';
import homeColorful from '../../assets/icons/homeColorful.svg';
import user from '../../assets/icons/user.svg';
import userColorful from '../../assets/icons/userColorful.svg';
import create from '../../assets/icons/create.svg';
import createColorful from '../../assets/icons/createColorful.svg';
import RouteMap from '../../routes/RouteMap';

function Sidebar({ displaySidebar, displayStickySidebar }) {
  const { pathname, search } = useLocation();
  const { liveAuctionId } = useParams();
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
      relatedRoutes: [
        RouteMap.home,
        `${RouteMap.liveAuctions.view(liveAuctionId).split(':')[0]}${liveAuctionId}`,
      ],
    },
    {
      key: 2,
      title: t('sidebar.myItems.title'),
      alt: t('sidebar.myItems.alt'),
      icon: user,
      iconColorful: userColorful,
      href: RouteMap.profile.index,
      relatedRoutes: [RouteMap.profile.index, RouteMap.profile.edit, RouteMap.profile.upvote],
    },
    {
      key: 3,
      title: t('sidebar.create.title'),
      alt: t('sidebar.create.alt'),
      icon: create,
      iconColorful: createColorful,
      href: RouteMap.create,
      relatedRoutes: [RouteMap.create],
    },
  ];

  return (
    <aside className="relative">
      <div className={displaySidebar ? 'hidden lg:flex lg:flex-col lg:space-y-16' : 'hidden'}>
        {navItems?.map((n) => (
          <div className="relative cursor-pointer" key={n.key} onClick={() => history.push(n.href)}>
            <div
              className={`flex flex-col items-center text-center border border-solid border-transparent p-2 ${
                n.relatedRoutes.includes(pathname) ? 'border-white rounded-12' : ''
              }`}
            >
              <img src={n.relatedRoutes.includes(pathname) ? n.iconColorful : n.icon} alt={n.alt} />
              <div
                className={`text-18 font-semibold mt-4 ${
                  n.relatedRoutes.includes(pathname) ? 'text-white' : 'text-gray'
                }`}
              >
                {n.title}
              </div>
            </div>
            <div className={n.relatedRoutes.includes(pathname) ? 'radialGradient' : ''} />
          </div>
        ))}
      </div>
      <div className="">
        <div className="flex lg:hidden items-center justify-between p-5 border border-solid border-white rounded-t-40 bg-gray2">
          {[navItems[0], navItems[2], navItems[1]].map((n) => (
            <div className="" key={n.key} onClick={() => history.push(n.href)}>
              <img
                className=""
                src={n.relatedRoutes.includes(pathname) ? n.iconColorful : n.icon}
                alt={n.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
