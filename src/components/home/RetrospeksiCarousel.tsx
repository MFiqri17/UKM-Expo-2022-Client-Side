import Image from 'next/image';
import * as React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function RetrospeksiCarousel() {
  return (
    <div className='text-center'>
      {/* 2020 */}
      <h2 className='mt-24 mb-12'>
        <span className='text-gradient font-primary text-4xl font-extrabold md:text-7xl'>
          2020
        </span>
      </h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className='mySwiper mb-24 hidden cursor-grab md:block'
      >
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl  border'>
            <Image
              src='/images/retro/retro5.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro4.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro3.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro2.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* mobile display */}
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
        className='mySwiper mb-24 cursor-grab md:hidden'
      >
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl  border'>
            <Image
              src='/images/retro/retro5.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro4.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro3.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro2.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* 2021 */}
      <h2 className='mt-24 mb-12'>
        <span className='text-gradient font-primary text-4xl font-extrabold md:text-7xl'>
          2021
        </span>
      </h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className='mySwiper mb-24 hidden cursor-grab md:block'
      >
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl  border'>
            <Image
              src='/images/retro/retro1.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro2.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro3.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro4.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* mobile display */}
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
        className='mySwiper mb-24 cursor-grab md:hidden'
      >
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl  border'>
            <Image
              src='/images/retro/retro1.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='relative flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro2.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro3.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/retro/retro4.png'
              alt='UKM EXPO Logo'
              className='object-cover'
              layout='fill'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
