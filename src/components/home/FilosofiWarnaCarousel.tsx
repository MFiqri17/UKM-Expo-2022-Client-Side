import Image from 'next/image';
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
      className='mySwiper mb-24'
    >
      <div className='absolute right-0 z-50 -translate-y-44'>
        <Image
          src='/images/lotus-1.svg'
          alt='lotus-flower'
          width={200}
          height={135}
        />
      </div>
      <div className='absolute left-0 z-50 -translate-y-44'>
        <Image
          src='/images/lotus-2.svg'
          alt='lotus-flower'
          width={200}
          height={135}
        />
      </div>
      <SwiperSlide>
        <div className='mx-24 mt-24 mb-12 flex flex-1 space-x-48 rounded-xl bg-ccream p-24'>
          <div className='flex  basis-1/4 items-center'>
            <Image
              src='/images/merah-muda.svg'
              alt='Logo Merah Muda'
              width={260}
              height={260}
              className='w-full'
            />
          </div>
          <div className='basis-1/2'>
            <h3 className='mb-4 bg-gradient-to-r from-[#FAD0B6] to-[#EE7F80] bg-clip-text text-start text-7xl text-transparent'>
              Merah Muda
            </h3>
            <p className='text-3xl leading-snug'>
              Melambangkan keindahan yang menjadi representasi dari UKM bidang
              seni
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mx-24 mt-24 flex flex-1 space-x-48 rounded-xl bg-ccream p-24'>
          <div className='flex  basis-1/4 items-center'>
            <Image
              src='/images/jingga.svg'
              alt='Logo Merah Muda'
              width={260}
              height={260}
              className='w-full'
            />
          </div>
          <div className='basis-1/2'>
            <h3 className='mb-4 bg-gradient-to-r from-[#F18E3E] to-[#FCCC81] bg-clip-text pb-4 text-start text-7xl text-transparent'>
              Jingga
            </h3>
            <p className='text-3xl'>
              Melambangkan antusiasme dan semangat yang menjadi representasi
              dari UKM bidang olahraga
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mx-24 mt-24 flex flex-1 space-x-48 rounded-xl bg-ccream p-24'>
          <div className='flex  basis-1/4 items-center'>
            <Image
              src='/images/hijau.svg'
              alt='Logo Merah Muda'
              width={260}
              height={260}
              className='w-full'
            />
          </div>
          <div className='basis-1/2'>
            <h3 className='mb-4 bg-gradient-to-r from-[#62B497] to-[#CDDD91] bg-clip-text pb-4 text-start text-7xl text-transparent'>
              Hijau
            </h3>
            <p className='text-3xl leading-snug'>
              Seperti alam yang divergen yang menjadi representasi dari UKM
              bidang khusus
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mx-24 mt-24 flex flex-1 space-x-48 rounded-xl bg-ccream p-24'>
          <div className='flex  basis-1/4 items-center'>
            <Image
              src='/images/ungu.svg'
              alt='Logo Merah Muda'
              width={260}
              height={260}
              className='w-full'
            />
          </div>
          <div className='basis-1/2 '>
            <h3 className='mb-4 bg-gradient-to-r from-[#FAD0B6] to-[#EE7F80] bg-clip-text pb-4 text-start text-7xl text-transparent'>
              Ungu
            </h3>
            <p className='text-3xl leading-snug'>
              Melambangkan spiritual dan kebijaksanaan yang menjadi representasi
              dari UKM bidang bela diri
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
