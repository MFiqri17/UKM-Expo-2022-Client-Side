import * as React from 'react';

import Button from '@/components/buttons/Button';

export default function HeroMerch() {
  return (
    <div className="bg-[url('/svg/merch_bg.svg')] bg-scroll  py-20 pl-20">
      <h1 className='font-letterMagic w-[486px] text-7xl leading-[109px]'>
        Official Merchandise
      </h1>
      <Button
        className='mt-14 rounded-[10px] border-none text-[#3C3C3B]'
        variant='light'
      >
        Light Variant
      </Button>
    </div>
  );
}
