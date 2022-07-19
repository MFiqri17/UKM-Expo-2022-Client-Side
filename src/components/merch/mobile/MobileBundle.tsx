import * as React from 'react';
import { useState } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import BundleArray from '@/components/merch/data/BundleArray';

export default function MobileBundle() {
  const [categories] = useState(BundleArray);
  // const indexes = [1, 2, 3, 4, 5];
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        className='block md:hidden'
      >
        {Object.keys(categories).map((category, index) => (
          <SwiperSlide key={index}>
            <div className='h-[441px] w-[350px] '>content </div>
            <h4 className='pb-[156px]'>{category}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
