import * as React from 'react';
import { useState } from 'react';
import { A11y,Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CatalogArray from '@/components/merch/data/CatalogArray';

export default function SmallMerch({ SmallMerch }: { SmallMerch: string }) {
  const [catalogs] = useState(CatalogArray);
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        className='block md:hidden'
      >
        {catalogs['Small Merch'].map((item, index) => (
          <SwiperSlide key={index}>
            <h4>{item.id}</h4>
            <h4>{item.image}</h4>
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
          </SwiperSlide>
        ))}
      </Swiper>

      <h4 className='pb-[156px] pt-[47px]'>{SmallMerch}</h4>
    </>
  );
}
