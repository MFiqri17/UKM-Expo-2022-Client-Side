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
      <div className='absolute right-0 z-50 -translate-y-24 md:-translate-y-44'>
        <div className='relative h-24 w-24  md:h-40 md:w-40'>
          <Image src='/images/lotus-1.svg' alt='lotus-flower' layout='fill' />
        </div>
      </div>
      <div className='absolute left-0 z-50 -translate-y-24 md:-translate-y-44'>
        <div className='relative h-24 w-24  md:h-40 md:w-40'>
          <Image src='/images/lotus-2.svg' alt='lotus-flower' layout='fill' />
        </div>
      </div>
      <SwiperSlide className='cursor-grab'>
        <div className=' m-1 mb-20 flex flex-1 flex-col space-x-0 rounded-xl bg-ccream p-4 md:m-24 md:flex-row md:space-x-48 md:p-24'>
          <div className='m-2 flex basis-1/4 items-center  justify-center md:mb-0'>
            <div className='relative h-24 w-24 text-center md:h-80 md:w-80'>
              <Image
                src='/images/merah-muda.svg'
                alt='Logo Merah Muda'
                layout='fill'
              />
            </div>
          </div>
          <div className='basis-1/2'>
            <h3 className='mb-4 bg-gradient-to-r from-[#FAD0B6] to-[#EE7F80] bg-clip-text pb-3 text-start text-xl text-transparent md:text-7xl'>
              Merah Muda
            </h3>
            <p className='text-sm leading-snug md:text-2xl'>
              Melambangkan keindahan yang menjadi representasi dari UKM bidang
              seni
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='cursor-grab'>
        <div className=' m-1 mb-20 flex flex-1 flex-col space-x-0 rounded-xl bg-ccream p-4 md:m-24 md:flex-row md:space-x-48 md:p-24'>
          <div className='m-2 flex basis-1/4 items-center  justify-center md:mb-0'>
            <div className='relative h-24 w-24 text-center md:h-80 md:w-80'>
              <Image
                src='/images/jingga.svg'
                alt='Logo Merah Muda'
                layout='fill'
              />
            </div>
          </div>
          <div className='basis-1/2'>
            <h3 className='mb-4 bg-gradient-to-r from-[#F18E3E] to-[#FCCC81] bg-clip-text pb-3 text-start text-xl text-transparent md:text-7xl'>
              Jingga
            </h3>
            <p className='text-sm leading-snug md:text-2xl'>
              Melambangkan antusiasme dan semangat yang menjadi representasi
              dari UKM bidang olahraga
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='cursor-grab'>
        <div className=' m-1 mb-20 flex flex-1 flex-col space-x-0 rounded-xl bg-ccream p-4 md:m-24 md:flex-row md:space-x-48 md:p-24'>
          <div className='m-2 flex basis-1/4 items-center  justify-center md:mb-0'>
            <div className='relative h-24 w-24 text-center md:h-80 md:w-80'>
              <Image
                src='/images/hijau.svg'
                alt='Logo Merah Muda'
                layout='fill'
              />
            </div>
          </div>
          <div className='basis-1/2'>
            <h3 className='mb-4 bg-gradient-to-r from-[#62B497] to-[#CDDD91] bg-clip-text pb-3 text-start text-xl text-transparent md:text-7xl'>
              Hijau
            </h3>
            <p className='text-sm leading-snug md:text-2xl'>
              Seperti alam yang divergen yang menjadi representasi dari UKM
              bidang khusus
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='cursor-grab'>
        <div className=' m-1 mb-20 flex flex-1 flex-col space-x-0 rounded-xl bg-ccream p-4 md:m-24 md:flex-row md:space-x-48 md:p-24'>
          <div className='m-2 flex basis-1/4 items-center  justify-center md:mb-0'>
            <div className='relative h-24 w-24 text-center md:h-80 md:w-80'>
              <Image
                src='/images/ungu.svg'
                alt='Logo Merah Muda'
                layout='fill'
              />
            </div>
          </div>
          <div className='basis-1/2 '>
            <h3 className='mb-4 bg-gradient-to-r from-[#A967A3] to-[#F4B2F5] bg-clip-text pb-3 text-start text-xl text-transparent md:text-7xl'>
              Ungu
            </h3>
            <p className='text-sm leading-snug md:text-2xl'>
              Melambangkan spiritual dan kebijaksanaan yang menjadi representasi
              dari UKM bidang bela diri
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
