import * as React from 'react';
import { useState } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CatalogCard from '@/components/merch/CatalogCard';
import CatalogArray from '@/components/merch/data/CatalogArray';

export default function Kaos({ Kaos }: { Kaos: string }) {
  const [catalogs] = useState(CatalogArray);
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        className='block md:hidden'
      >
        {catalogs.Kaos.map((item, index) => (
          <SwiperSlide key={index}>
            <CatalogCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <h4 className='mt-[47px] pb-[156px]'>{Kaos}</h4>
    </>
  );
}
