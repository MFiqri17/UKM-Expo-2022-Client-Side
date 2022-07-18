import * as React from 'react';
import { A11y,Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Kaos from '@/components/merch/swipersMobile/Kaos';
import Keychain from '@/components/merch/swipersMobile/Keychain';
import SmallMerch from '@/components/merch/swipersMobile/SmallMerch';
import Totebag from '@/components/merch/swipersMobile/Totebag';

export default function MobileBundle() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        className='block md:hidden'
      >
        <SwiperSlide>
          <Kaos Kaos="Kaos" />
        </SwiperSlide>
        <SwiperSlide>
          <Totebag Totebag="Totebag" />
        </SwiperSlide>
        <SwiperSlide>
          <Keychain Keychain="KeyChain" />
        </SwiperSlide>
        <SwiperSlide>
          <SmallMerch SmallMerch="Small Merch" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
