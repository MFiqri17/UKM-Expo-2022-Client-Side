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
        className='mySwiper mb-24 hidden md:block'
      >
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl  border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
      </Swiper>
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
        className='mySwiper mb-24 md:hidden'
      >
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl  border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
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
        className='mySwiper mb-24 hidden md:block'
      >
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl  border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
      </Swiper>
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
        className='mySwiper mb-24 md:hidden'
      >
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl  border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mb-8'>
          <div className='flex h-48 w-full justify-center rounded-xl border'>
            <Image
              src='/images/logo/ukm-expo.svg'
              alt='UKM EXPO Logo'
              className='object-fit'
              width='90%'
              height='90%'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
