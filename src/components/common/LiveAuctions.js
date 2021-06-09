import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import arrow from '../../assets/icons/arrowColorful.svg';
import BidCard from './BidCard';
import RouteMap from '../../routes/RouteMap';

function LiveAuctions({ wrapperClass }) {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    variableWidth: true,
    className: 'center',
    centerMode: true,
  };

  return (
    <div className={wrapperClass}>
      <div className="flex justify-between items-center">
        <div className="text-18 text-blue font-semibold">{t('home.LiveAuctions')}</div>
        <Link to={RouteMap.liveAuctions}>
          <div className="flex items-center space-x-1">
            <div className="hidden md:block textGradient text-18 text-blue font-semibold">
              {t('home.LiveAuctions')}
            </div>
            <img src={arrow} alt="arrow" />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 mt-8 slick-slides-gap--24 c-slick-dots c-slick-dots-bottom--55 mx-7">
        <Slider {...settings} style={{ maxHeight: 400 }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <BidCard key={i} headerClass="px-6 mt-6" contentClass="p-0" />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LiveAuctions;
