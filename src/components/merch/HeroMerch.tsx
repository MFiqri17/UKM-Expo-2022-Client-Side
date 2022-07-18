import * as React from 'react';

import Button from '@/components/buttons/Button';

export default function HeroMerch() {
  return (
    <div className="bg-[url('/svg/merch_bg.svg')]  bg-cover bg-scroll bg-right  bg-no-repeat pb-[240px] pt-[50px]  text-center md:bg-center md:py-20 md:pl-20 md:text-left">
      <h1 className='hidden w-[486px] font-magic text-7xl leading-[109px] text-clightorange md:block'>
        Official Merchandise
      </h1>
      <h1 className='block font-magic text-7xl text-clightorange md:hidden'>
        Official Merch
      </h1>
      <Button
        className='mt-12 rounded-[10px] border-none px-[25px] py-[12px] text-[#3C3C3B] md:mt-14'
        variant='light'
      >
        Lihat lebih lanjut
      </Button>
    </div>
  );
}
