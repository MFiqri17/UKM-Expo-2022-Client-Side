import * as React from 'react';
import { useState } from 'react';
import { A11y,Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import catalog from '@/components/merch/data/CatalogArray';

export default function Kaos({ Kaos }: { Kaos: string }) {
  const [catalogs] = useState(catalog);
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        className='block md:hidden'
      >
        {catalogs.Kaos.map((item, index) => (
          <SwiperSlide key={index}>
            <h4>{item.id}</h4>
            <h4>{item.image}</h4>
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
          </SwiperSlide>
        ))}
      </Swiper>

      <h4 className='pb-[156px] pt-[47px]'>{Kaos}</h4>
    </>
  );
}
