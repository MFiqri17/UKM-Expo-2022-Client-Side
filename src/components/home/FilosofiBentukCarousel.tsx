import * as React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function FilosofiWarnaCarousel() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className='mySwiper'
    >
      <img
        src='images/lotus-4.svg'
        alt='lotus-flower'
        className='absolute right-0 z-50 -translate-y-48'
      />
      <img
        src='images/lotus-3.svg'
        alt='lotus-flower'
        className='absolute z-50 -translate-y-48'
      />
      <SwiperSlide>
        <div className='m-24 flex flex-1 space-x-48 rounded-xl bg-ccream p-24'>
          <div className='flex basis-1/4 items-center'>
            <img
              src='images/bola-api.svg'
              alt='Logo Merah Muda'
              className='w-full'
            />
          </div>
          <div className='basis-1/2'>
            <h3 className='mb-4 bg-gradient-to-r from-[#FAD0B6] to-[#EE7F80] bg-clip-text text-start text-xl text-transparent md:text-6xl'>
              Bola Api
            </h3>
            <p className='text-sm leading-snug md:text-2xl'>
              Memanifestasikan elemen api sebagai elemen utama dalam tema UKM
              EXPO 2022: Fire It On yang mengarah pada simbol energi yang
              berbentuk lebih halus, dapat dirasakan tetapi tidak dapat
              dipegang, seperti halnya semangat dan motivasi UKM 4 bidang dalam
              berkompetisi di tiap dimensinya
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='m-24 flex flex-1 space-x-48 rounded-xl bg-ccream p-24'>
          <div className='flex  basis-1/4 items-center'>
            <img
              src='images/burung-phoenix.svg'
              alt='Logo Merah Muda'
              className='w-full'
            />
          </div>
          <div className='basis-1/2'>
            <h3 className='mb-4 bg-gradient-to-r from-[#FAD0B6] to-[#EE7F80] bg-clip-text pb-3 text-start text-xl text-transparent md:text-6xl'>
              Burung Phoenix
            </h3>
            <p className='text-sm leading-snug md:text-2xl'>
              Merepresentasikan kebangkitan kemakmuran kegiatan UKM EXPO 2022
              dengan mengusung tema dan semangat baru melalui pengadaan kegiatan
              secara luring
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
