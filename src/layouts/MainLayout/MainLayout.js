import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Spinner from '../../components/common/Spinner';

function MainLayout({ children, mainClassName, loading, displaySidebar = true }) {
  return (
    <div>
      <Header />
      <div className="lg:flex">
        {displaySidebar && (
          <div className="sticky top-160 z-30 lg:pr-8 lg:pl-16 lg:pt-40">
            <Sidebar />
          </div>
        )}
        <main
          className={`w-full px-5 lg:pl-4 -mt-12 lg:mt-0 pb-9 lg:pt-10 ${mainClassName || ''} ${
            displaySidebar ? 'lg:pr-8' : ''
          }`}
        >
          {loading ? <Spinner /> : children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
