import React, { useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import ProfileSummary from '../../components/common/ProfileSummary';
import CategoriesFilter from '../../components/common/CategoriesFilter';
import { useTranslation } from 'react-i18next';

function Upvote() {
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

  return (
    <MainLayout mainClassName="" loading={loading} displayStickySidebar>
      <div className="flex flex-col space-y-9 sm:space-y-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-6 lg:gap-12">
          <ProfileSummary
            isUpvote
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
        <div className="flex justify-center items-center pt-16">
          <div className="text-blue opacity-70">Emilie butler collection is empty.</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Upvote;