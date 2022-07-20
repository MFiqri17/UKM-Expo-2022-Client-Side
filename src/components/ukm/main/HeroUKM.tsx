import Image from 'next/image';
import * as React from 'react';

export default function HeroUKM() {
  return (
    <div className='flex h-[563px] flex-col justify-between bg-gradient-to-b from-cgreen/50 to-clightorange sm:h-[480px] sm:flex-row sm:items-end  '>
      <div className='flex h-full flex-col items-center justify-center gap-y-16 sm:pl-16'>
        <h1 className='font-magic text-7xl text-cblack'>UKM</h1>
        <a
          href='#main-section'
          className='rounded-xl bg-clightorange px-5 py-3 font-semibold text-cblack shadow transition-all hover:-translate-y-1 hover:shadow-lg active:animate-wiggle active:shadow'
        >
          Lihat lebih lanjut
        </a>
      </div>
      <div>
        <Image
          src='/images/ukm-page-header.svg'
          alt='Header'
          width={684}
          height={363}
        />
      </div>
    </div>
  );
}
