import * as React from 'react';
import { useTimer } from 'react-timer-hook';

import Button from '@/components/buttons/Button';

export default function Timer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  // const time = new Date();
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
  });
  return (
    <div className='mt-[135px] text-center'>
      <div className='flex flex-row justify-center space-x-[10px] md:space-x-[30px]'>
        <img src='svg/Line.svg' className='w-[60px] md:w-fit' alt='' />
        <h1 className='bg-gradient-to-r from-cblack	 via-cgreen to-cgreenb bg-clip-text font-magic text-4xl text-transparent md:text-7xl'>
          Pre Order
        </h1>
        <img src='svg/Line.svg' className='w-[60px] md:w-fit' alt='' />
      </div>
      <h4 className='mt-8 mb-16 text-2xl font-medium md:text-4xl'>
        Reguler registration ditutup
      </h4>

      <div className='flex justify-center space-x-5'>
        <p className='rounded-[10px] bg-[#FBF8F3] text-3xl font-normal md:w-[108px] md:py-3 md:px-4'>
          <span className='block text-[32px] font-medium md:text-6xl'>
            {days}
          </span>{' '}
          Hari
        </p>
        <p className='rounded-[10px] bg-[#FBF8F3] text-3xl font-normal md:w-[108px] md:py-3 md:px-4'>
          <span className='block text-[32px] font-medium md:text-6xl'>
            {hours}
          </span>{' '}
          Jam
        </p>
        <p className='rounded-[10px] bg-[#FBF8F3] text-3xl font-normal md:w-[108px] md:py-3 md:px-4'>
          <span className='block text-[32px] font-medium md:text-6xl'>
            {minutes}
          </span>{' '}
          Menit
        </p>
        <p className='rounded-[10px] bg-[#FBF8F3] text-3xl font-normal md:w-[108px] md:py-3 md:px-4'>
          <span className='block text-[32px] font-medium md:text-6xl'>
            {seconds}
          </span>{' '}
          Detik
        </p>
      </div>

      <Button className='mt-14 rounded-[10px] border-none bg-gradient-to-r from-[#62B497] to-[#CDDD91] px-[38px] py-[13px] text-base text-[#3C3C3B]'>
        Beli Sekarang
      </Button>
    </div>
  );
}
