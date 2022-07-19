import * as React from 'react';
import { useState } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CatalogArray from '@/components/merch/data/CatalogArray';

export default function Totebag({ Totebag }: { Totebag: string }) {
  const [categories] = useState(CatalogArray);
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        className='block md:hidden'
      >
        {categories.Totebag.map((item, index) => (
          <SwiperSlide key={index}>
            <h4>{item.id}</h4>
            <h4>{item.image}</h4>
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
          </SwiperSlide>
        ))}
      </Swiper>

      <h4 className='mt-[47px] pb-[156px]'>{Totebag}</h4>
    </>
  );
}
