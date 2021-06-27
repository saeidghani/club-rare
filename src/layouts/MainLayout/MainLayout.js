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
    <div className="">
      <Header />
      <div className="lg:flex">
        <div className={`lg:pt-40 ${displaySidebar ? 'lg:pl-16 lg:pr-8' : ''}`}>
          <Sidebar
            displaySidebar={displaySidebar}
            displayStickySidebar={displayStickySidebar}
            loading={loading}
          />
        </div>
        <main
          className={`w-full px-5 lg:pl-4 pb-40 lg:pb-4 pt-7 lg:pt-10 ${mainClassName || ''} ${
            displaySidebar ? 'lg:pr-8 xl:pr-11' : ''
          }`}
        >
          {loading ? (
            <div className="mt-20">
              <Spinner />
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
