import React from 'react';
import { Arrow } from './Icons';

function CategoriesFilter({ categories, activeCategory, onSetCategories }) {
  return (
    <div
      className="hidden sm:block col-span-1 md:col-span-4 lightShadow w-full h-full
       border border-solid border-white rounded-50 px-10 md:px-5 xl:px-10 mt-8 md:mt-0"
    >
      <div className="flex flex-col justify-between h-full py-10">
        {categories.map((i) => (
          <div
            key={i.key}
            className={`px-5 py-3 rounded-12 flex items-center justify-between cursor-pointer ${
              i.key === activeCategory
                ? 'bg-blue text-white'
                : 'flex items-center border border-solid border-white'
            }`}
            onClick={() => onSetCategories(i.key)}
          >
            <div className="text-22">{i.title}</div>
            <Arrow stroke={i.key === activeCategory ? '#fff' : '#000'} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesFilter;
