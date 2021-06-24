import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BidCard from './BidCard';
import Dropdown from '../UI/Dropdown';
import filter from '../../assets/icons/filter.svg';

function Explore({ wrapperClass, exploreItems }) {
  const { t } = useTranslation();
  const [activeSort, setActiveSort] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState({});

  const filterItems = [
    { key: 1, title: 'All', onClick: () => {} },
    { key: 2, title: 'Handbags', onClick: () => {} },
    { key: 3, title: 'Watches', onClick: () => {} },
    { key: 4, title: 'Jewellery', onClick: () => {} },
    { key: 5, title: 'Art', onClick: () => {} },
    { key: 6, title: 'Food', onClick: () => {} },
  ];

  useEffect(() => {
    setSelectedFilter(filterItems[0]);
  }, []);

  const sortItems = [
    { key: 1, title: t('home.explore.filterItems.MostRecent'), onClick: () => {} },
    { key: 2, title: t('home.explore.filterItems.Cheapest'), onClick: () => {} },
    { key: 3, title: t('home.explore.filterItems.HighestPrice'), onClick: () => {} },
    { key: 4, title: t('home.explore.filterItems.Sold'), onClick: () => {} },
  ];

  return (
    <div className={wrapperClass}>
      <div className="flex justify-between items-center">
        <div className="text-18 lg:text-24 text-blue font-semibold mr-4 lg:mr-5 xl:mr-8.5">
          {t('home.explore.title')}
        </div>
        <div className="hidden md:flex justify-between w-full max-w-600 lg:max-w-850 mr-4">
          {filterItems.map((i) => (
            <div
              key={i.key}
              className={`text-center rounded-12 p-2 border border-solid border-white cursor-pointer bg-white bg-opacity-20 ${
                activeSort === i.key ? 'text-white linearGradient' : 'text-blue'
              } ${i.key === 1 ? 'text-16 w-19' : 'text-14 w-24 lg:w-26 xl:w-32'}`}
              onClick={() => setActiveSort(i.key)}
            >
              {i.title}
            </div>
          ))}
        </div>
        <div className="flex items-center ml-auto">
          <div className="md:hidden">
            <Dropdown
              items={filterItems}
              selected={selectedFilter}
              onSelect={(i) => setSelectedFilter(i)}
              menuButtonClass="linearGradient -mt-2 px-2 py-1 rounded-10 justify-between text-white z-30
                             border border-solid border-white rounded-12"
              menuItemsClass="bg-lightGray3 w-32 pt-4 pb-3 pl-2 rounded-b-10 top-5 border border-solid border-white"
              menuItemClass="text-12 text-white py-1.5"
              unselectedItemClass="text-white"
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
              items={sortItems}
              menuButtonWrapperClass="-top-2"
              menuButtonClass="rounded-10 justify-between text-white"
              menuItemsClass="bg-white rounded-32 w-36 mt-2 py-5 -left-26 top-8"
              menuItemClass="text-16 text-gray font-semibold justify-center py-2"
              selectedItemClass="text-blue"
              width="w-12"
              displayChevronDown={false}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-9 gap-x-8 md:gap-x-12 mt-15">
        {exploreItems.map((i) => (
          <div key={i.key}>
            <BidCard id={i.key} src={i.src} contentClass="lightShadow p-6" timer={i.timer} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
