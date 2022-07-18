import * as React from 'react';

interface ISectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: ISectionTitleProps) {
  return (
    <>
      <div className='relative flex items-center gap-x-4 py-10 px-3 sm:gap-x-8 sm:px-20'>
        <div className='flex-grow border-t-2 border-cgreen'></div>
        <div className='z-10 mx-auto max-w-fit flex-shrink text-center text-4xl sm:text-7xl'>
          <span className='text-gradient'>{title}</span>
        </div>
        <div className='flex-grow border-t-2 border-cgreen'></div>
      </div>
    </>
  );
}
