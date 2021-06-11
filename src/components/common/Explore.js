import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BidCard from './BidCard';
import Dropdown from '../UI/Dropdown';
import filter from '../../assets/icons/filter.svg';

function Explore({ wrapperClass }) {
  const { t } = useTranslation();
  const [activeSort, setActiveSort] = useState(1);

  const sortItems1 = [
    { key: 1, title: t('home.explore.sortItems.all'), onClick: () => {} },
    { key: 2, title: t('home.explore.sortItems.FanArt'), onClick: () => {} },
    { key: 3, title: t('home.explore.sortItems.Photography'), onClick: () => {} },
    { key: 4, title: t('home.explore.sortItems.FineArt'), onClick: () => {} },
    { key: 5, title: t('home.explore.sortItems.Food'), onClick: () => {} },
    { key: 6, title: t('home.explore.sortItems.Memes'), onClick: () => {} },
  ];

  const sortItems2 = [
    { key: 1, title: t('home.explore.sortItems.FanArt'), onClick: () => {} },
    { key: 2, title: t('home.explore.sortItems.Memes'), onClick: () => {} },
    { key: 3, title: t('home.explore.sortItems.FineArt'), onClick: () => {} },
    { key: 4, title: t('home.explore.sortItems.Food'), onClick: () => {} },
    { key: 5, title: t('home.explore.sortItems.Photography'), onClick: () => {} },
  ];

  const filterItems = [
    { key: 1, title: t('home.explore.filterItems.MostRecent'), onClick: () => {} },
    { key: 2, title: t('home.explore.filterItems.Cheapest'), onClick: () => {} },
    { key: 3, title: t('home.explore.filterItems.HighestPrice'), onClick: () => {} },
    { key: 4, title: t('home.explore.filterItems.Sold'), onClick: () => {} },
  ];

  return (
    <div className={wrapperClass}>
      <div className="flex justify-between items-center">
        <div className="text-18 text-blue font-semibold mr-4 lg:mr-6 xl:mr-8.5">
          {t('home.explore.title')}
        </div>
        <div className="hidden md:flex justify-between w-full max-w-600 lg:max-w-850 mr-6">
          {sortItems1.map((i) => (
            <div
              key={i.key}
              className={`text-14 text-center rounded-12 p-2 border border-solid border-white cursor-pointer ${
                activeSort === i.key ? 'text-white linearGradient' : 'text-blue'
              } ${i.key === 1 ? 'w-19' : 'w-24 lg:w-26 xl:w-32'}`}
              onClick={() => setActiveSort(i.key)}
            >
              {i.title}
            </div>
          ))}
        </div>
        <div className="flex items-center ml-auto">
          <div className="md:hidden">
            <Dropdown
              title={<div className="py-0.5">{t('home.explore.sortItems.all')}</div>}
              items={sortItems2}
              menuButtonClass="linearGradient -mt-2 px-2 py-1 rounded-10 justify-between text-white z-30
                             border border-solid border-white rounded-12"
              menuItemsClass="bg-lightGray3 w-32 pt-4 pb-3 pl-2 rounded-b-10 top-5 border border-solid border-white"
              menuItemClass="text-12 text-white"
              width="w-32"
              displaySelected
            />
          </div>
          <div className="ml-4 -mr-4 lg:mr-0 lg:ml-0">
            <Dropdown
              title={
                <img
                  className="border border-solid border-white rounded-12"
                  src={filter}
                  alt="filter"
                />
              }
              items={filterItems}
              menuButtonWrapperClass="-top-2"
              menuButtonClass="rounded-10 justify-between text-white"
              menuItemsClass="bg-white rounded-32 w-36 mt-2 py-5 -left-26 top-8"
              menuItemClass="text-14 text-gray font-semibold justify-center py-2"
              width="w-12"
              displayChevronDown={false}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-9 gap-x-8 md:gap-x-12 mt-15">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i}>
            <BidCard contentClass="lightShadow p-6" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
