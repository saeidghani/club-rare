import React, { useState, useEffect } from 'react';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import ProfileSummary from '../../../components/common/ProfileSummary';
import CategoriesFilter from '../../../components/common/CategoriesFilter';
import BidCard from '../../../components/common/BidCard';
import { useTranslation } from 'react-i18next';
import bag3 from '../../../assets/images/products/bag-3.png';
import watch2 from '../../../assets/images/products/watch-2.png';
import bag4 from '../../../assets/images/products/bag-4.png';

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

  const items = [
    { key: 1, src: bag3 },
    { key: 2, src: watch2 },
    { key: 3, src: bag4 },
  ];

  return (
    <MainLayout mainClassName="" loading={loading} displayStickySidebar>
      <div className="flex flex-col space-y-9 sm:space-y-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-6 lg:gap-12">
          <ProfileSummary
            wrapperClassName="col-span-1 md:col-span-8"
            categories={categories}
            activeCategory={activeCategory}
            onSetCategories={(catKey) => setActiveCategory(catKey)}
          />
          <CategoriesFilter
            categories={categories}
            activeCategory={activeCategory}
            onSetCategories={(catKey) => setActiveCategory(catKey)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12">
          {items.map((i) => (
            <div key={i.key}>
              <BidCard src={i.src} contentClass="lightShadow p-6" displayTime />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;
