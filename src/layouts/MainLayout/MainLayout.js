import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Spinner from '../../components/common/Spinner';

function MainLayout({
  children,
  mainClassName,
  loading,
  displaySidebar = true,
  displayStickySidebar,
}) {
  return (
    <div>
      <Header />
      <div className="lg:flex">
        <div className={`sticky top-140 z-50 lg:pt-40 ${displaySidebar ? 'lg:pl-16 lg:pr-8' : ''}`}>
          <Sidebar displaySidebar={displaySidebar} displayStickySidebar={displayStickySidebar} />
        </div>
        <main
          className={`w-full px-5 lg:pl-4 pb-40 lg:pb-4 ${mainClassName || ''} ${
            displaySidebar ? 'lg:pr-12' : ''
          } ${displayStickySidebar ? '-mt-12 lg:mt-0 lg:pt-10' : 'lg:mt-0 lg:pt-10'}`}
        >
          {loading ? <Spinner /> : children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
