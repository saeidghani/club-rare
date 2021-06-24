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
        className="relative bg-white bg-opacity-20 border border-solid border-white rounded-50
      py-4 xl:py-5 px-2 xs:px-2 xl:px-4 lightShadow"
        style={{ height: 282 }}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="text-20 lg:text-24 text-blue font-semibold mr-3">
              {t('home.topMembers.top')}
            </div>
            <div className="flex border border-solid border-white rounded-12 h-9">
              {memberTypes.map((i) => (
                <div
                  key={i.key}
                  className={`text-14 font-semibold rounded-12 flex items-center cursor-pointer flex justify-center ${
                    topMembersType === i.key
                      ? 'text-white border-r border-solid border-white linearGradient'
                      : 'text-blue'
                  }`}
                  style={{ width: 86 }}
                  onClick={() => setTopMembersType(i.key)}
                >
                  {i.title}
                </div>
              ))}
            </div>
          </div>
          <div
            className="z-10 grid grid-cols-1 c-slick-dots c-slick-dots-bottom--40
           px-0 xs:px-10 sm:px-32 md:px-48 lg:px-0 mt-4 xl:mt-4"
          >
            <Slider {...settings}>
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div
                    key={i}
                    className="grid grid-cols-2 gap-x-2.5 xs:gap-x-3.5 md:gap-x-2 xl:gap-x-4 gap-y-8.5"
                  >
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="">
                        <div className="flex justify-center mt-2">
                          <div className="relative -mr-4 lg:-mr-3.5 xl:-mr-4">
                            <img
                              className="border-r border-solid border-white rounded-full w-11.5 h-11.5 md:w-14 md:h-14 z-10"
                              src={avatar2}
                              alt=""
                            />
                            <div className="absolute -top-2 left-0 text-white">{i}.</div>
                          </div>
                          <div className="rounded-40 py-1.5 md:py-2 pl-4 pr-3 xs:px-5.5 md:px-4 lg:pl-3.5 lg:pr-3 xl:px-8 border border-solid border-white">
                            <div className="text-14 text-center text-blue">Emilie Butler</div>
                            <div className="text-12 text-center opacity-60">10.5ETH</div>
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
        <div className="blueBgShadow"></div>
      </div>
    </div>
  );
}

export default TopMembers;
