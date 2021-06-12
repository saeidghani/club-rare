import React, { useState } from 'react';
import Slider from 'react-slick';
import avatar2 from '../../assets/images/avatar-2.png';
import { useTranslation } from 'react-i18next';

function TopMembers({ wrapperClass }) {
  const { t } = useTranslation();
  const [topMembersType, setTopMembersType] = useState(1);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const memberTypes = [
    { key: 1, title: t('home.topMembers.sellers') },
    { key: 2, title: t('home.topMembers.buyers') },
  ];

  return (
    <div className={wrapperClass}>
      <div
        className="flex flex-col items-center 
        border border-solid border-white rounded-50 py-4 xl:py-5 px-2 xs:px-2 xl:px-6 lightShadow"
        style={{ height: 282 }}
      >
        <div className="flex items-center">
          <div className="text-20 lg:text-24 font-semibold mr-3">{t('home.topMembers.top')}</div>
          <div className="flex border border-solid border-white rounded-12 h-9">
            {memberTypes.map((i) => (
              <div
                key={i.key}
                className={`text-14 font-semibold px-5 rounded-12 flex items-center cursor-pointer ${
                  topMembersType === i.key
                    ? 'text-white border-r border-solid border-white linearGradient'
                    : ''
                }`}
                onClick={() => setTopMembersType(i.key)}
              >
                {i.title}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 px-2 xs:px-14 sm:px-32 md:px-56 lg:px-0 c-slick-dots c-slick-dots-bottom--40 mt-4 xl:mt-6">
          <Slider {...settings} style={{ maxHeight: 400 }} className="">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div
                  key={i}
                  className="grid grid-cols-2 gap-x-2.5 xs:gap-x-3.5 md:gap-x-2 xl:gap-x-6 gap-y-8.5 mt-2"
                >
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className=""
                      //style={{ boxShadow: '30px 70px 120px rgba(27, 49, 66, 0.13)' }}
                    >
                      <div className="flex justify-center">
                        <div className="relative -mr-4">
                          <img
                            className="border-r border-solid border-white rounded-full w-11.5 h-11.5 md:w-12 md:h-12 z-10"
                            src={avatar2}
                            alt=""
                          />
                          <div className="absolute -top-3 left-0 text-white z-30">{i}.</div>
                        </div>
                        <div className="rounded-40 px-4.5 xs:px-5.5 py-1.5 md:py-2 md:px-4 xl:px-8 border border-solid border-white">
                          <div className="text-12 text-center text-blue">Emilie Butler</div>
                          <div className="text-10 text-center opacity-60">10.5ETH</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopMembers;
