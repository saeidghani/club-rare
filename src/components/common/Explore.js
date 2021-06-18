import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BidCard from './BidCard';
import Dropdown from '../UI/Dropdown';
import filter from '../../assets/icons/filter.svg';
import bag3 from '../../assets/images/products/bag-3.png';
import bag4 from '../../assets/images/products/bag-4.png';
import bag5 from '../../assets/images/products/bag-5.png';
import bag6 from '../../assets/images/products/bag-6.png';
import bag7 from '../../assets/images/products/bag-7.png';
import bag8 from '../../assets/images/products/bag-8.png';
import watch2 from '../../assets/images/products/watch-2.png';
import watch3 from '../../assets/images/products/watch-3.png';
import watch4 from '../../assets/images/products/watch-4.png';
import watch5 from '../../assets/images/products/watch-5.png';
import watch6 from '../../assets/images/products/watch-6.png';
import watch7 from '../../assets/images/products/watch-7.png';

function Explore({ wrapperClass }) {
  const { t } = useTranslation();
  const [activeSort, setActiveSort] = useState(1);

  const filterItems1 = [
    { key: 1, title: t('home.explore.sortItems.all'), onClick: () => {} },
    { key: 2, title: 'Handbags', onClick: () => {} },
    { key: 3, title: 'Watches', onClick: () => {} },
    { key: 4, title: 'Jewellery', onClick: () => {} },
    { key: 5, title: 'Art', onClick: () => {} },
    { key: 6, title: 'Food', onClick: () => {} },
  ];

  const filterItems2 = [
    { key: 1, title: 'Handbags', onClick: () => {} },
    { key: 2, title: 'Watches', onClick: () => {} },
    { key: 3, title: 'Jewellery', onClick: () => {} },
    { key: 4, title: 'Art', onClick: () => {} },
    { key: 5, title: 'Food', onClick: () => {} },
  ];

  const sortItems = [
    { key: 1, title: t('home.explore.filterItems.MostRecent'), onClick: () => {} },
    { key: 2, title: t('home.explore.filterItems.Cheapest'), onClick: () => {} },
    { key: 3, title: t('home.explore.filterItems.HighestPrice'), onClick: () => {} },
    { key: 4, title: t('home.explore.filterItems.Sold'), onClick: () => {} },
  ];

  const items = [
    { key: 1, src: bag3 },
    { key: 2, src: watch2 },
    { key: 3, src: bag4 },
    { key: 4, src: watch3 },
    { key: 5, src: bag5 },
    { key: 6, src: watch4 },
    { key: 7, src: watch5 },
    { key: 8, src: bag6 },
    { key: 9, src: watch6 },
    { key: 10, src: bag7 },
    { key: 11, src: watch7 },
    { key: 12, src: bag8 },
  ];

  return (
    <div className={wrapperClass}>
      <div className="flex justify-between items-center">
        <div className="text-18 lg:text-24 text-blue font-semibold mr-4 lg:mr-5 xl:mr-8.5">
          {t('home.explore.title')}
        </div>
        <div className="hidden md:flex justify-between w-full max-w-600 lg:max-w-850 mr-4">
          {filterItems1.map((i) => (
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
              title={<div className="py-0.5">{t('home.explore.sortItems.all')}</div>}
              items={filterItems2}
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
        {items.map((i) => (
          <div key={i.key}>
            <BidCard id={i.key} src={i.src} contentClass="lightShadow p-6" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
