import React, { useState, useEffect } from 'react';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import ProfileSummary from './ProfileSummary';
import BidCard from '../../../components/common/BidCard';
import { Arrow } from '../../../components/common/Icons';
import { useTranslation } from 'react-i18next';

function Profile() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const categories = [
    { key: 1, title: t('profile.categories.created') },
    { key: 2, title: t('profile.categories.onSale') },
    { key: 3, title: t('profile.categories.collectibles') },
  ];

  const CategoriesCard = () => (
    <div
      className="hidden sm:block col-span-1 md:col-span-4 lightShadow w-full h-full flex flex-col space-y-5
                    border border-solid border-white rounded-50 py-10 px-10 md:px-5 xl:p-10 mt-8 md:mt-0"
    >
      {categories.map((i) => (
        <div
          key={i.key}
          className={`px-5 py-2 rounded-12 flex items-center justify-between ${
            i.key === activeCategory
              ? 'bg-blue text-white'
              : 'flex items-center border border-solid border-white'
          }`}
          onClick={() => setActiveCategory(i.key)}
        >
          <div className="text-22">{i.title}</div>
          <Arrow stroke={i.key === activeCategory ? '#fff' : '#000'} />
        </div>
      ))}
    </div>
  );

  return (
    <MainLayout loading={loading} displayStickySidebar>
      <div className="flex flex-col space-y-9 sm:space-y-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-6 lg:gap-12">
          <ProfileSummary
            wrapperClassName="col-span-1 md:col-span-8"
            categories={categories}
            activeCategory={activeCategory}
            onSetCategories={(catKey) => setActiveCategory(catKey)}
          />
          <CategoriesCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i}>
              <BidCard contentClass="lightShadow p-6" displayTime />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;
