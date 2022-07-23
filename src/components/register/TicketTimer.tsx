import * as React from 'react';
import { useTimer } from 'react-timer-hook';

import Button from '@/components/buttons/Button';
import SectionTitle from '@/components/SectionTitle';
import Router, { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

export default function TicketTimer({
  expiryTimestamp,
}: {
  expiryTimestamp: Date;
}) {
  const router = useRouter();
  // const time = new Date();
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      toast.error('Waktu anda sudah habis, silahkan coba lagi!.');
      router.reload();
    },
  });
  return (
    <div className='mt-[135px] mb-20 text-center'>
      <Toaster position='top-center' />
      <div className='flex justify-center space-x-3'>
        <p className='rounded-[10px] bg-[#FBF8F3]  text-xl font-normal md:py-3  md:px-4 md:text-3xl'>
          <span className='block text-[32px] font-medium md:text-6xl'>
            {minutes}
          </span>{' '}
          Menit
        </p>
        <p className='rounded-[10px] bg-[#FBF8F3] text-xl font-normal md:py-3  md:px-4 md:text-3xl'>
          <span className='block text-[32px] font-medium md:text-6xl'>
            {seconds}
          </span>{' '}
          Detik
        </p>
      </div>
    </div>
  );
}
