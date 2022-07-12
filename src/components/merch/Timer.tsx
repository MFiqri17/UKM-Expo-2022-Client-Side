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
      <h1 className='text-7xl '>Pre Order</h1>
      <h4 className='mt-8 mb-16 text-4xl'>Reguler registration ditutup</h4>

      <div className='flex justify-center space-x-5'>
        <p className='w-[108px] rounded-[10px] bg-[#FBF8F3] py-3 px-4 text-3xl'>
          <span className='block text-6xl'>{days}</span> Hari
        </p>
        <p className='w-[108px] rounded-[10px] bg-[#FBF8F3] py-3 px-4 text-3xl'>
          <span className='block text-6xl'>{hours}</span> Jam
        </p>
        <p className='w-[108px] rounded-[10px] bg-[#FBF8F3] py-3 px-4 text-3xl'>
          <span className='block text-6xl'>{minutes}</span> Menit
        </p>
        <p className='w-[108px] rounded-[10px] bg-[#FBF8F3] py-3 px-4 text-3xl'>
          <span className='block text-6xl'>{seconds}</span> Detik
        </p>
      </div>

      <Button
        className='mt-14 rounded-[10px] border-none text-[#3C3C3B]'
        variant='light'
      >
        Light Variant
      </Button>
    </div>
  );
}
