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
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={wrapperClass}>
      <div className="flex justify-between items-center">
        <div className="text-18 text-blue font-semibold">{t('home.LiveAuctions')}</div>
        <Link to={RouteMap.liveAuctions.index}>
          <div className="flex items-center space-x-1">
            <div className="hidden md:block textGradient text-18 text-blue font-semibold">
              {t('home.LiveAuctions')}
            </div>
            <img src={arrow} alt="arrow" />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 mt-8 slick-slides-gap--lg c-slick-dots c-slick-dots-bottom--55">
        <Slider {...settings} style={{ maxHeight: 401 }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <BidCard key={i} headerClass="px-6 mt-6" contentClass="p-0" displayTime />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LiveAuctions;
