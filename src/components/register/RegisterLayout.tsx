import * as React from 'react';

import RegisterFooter from '@/components/register/RegisterFooter';

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex min-h-screen items-center justify-center md:px-12 py-12 '>
        <div className='shadow-[ 0px_5px_50px_5px_rgba(0, 0, 0, 0.25)] relative flex w-screen flex-col rounded-xl bg-cwhite lg:w-[56em]'>
          <div className=''>
            <img src='svg/bg-register.svg' className='lg:w-[56em]' alt='' />
          </div>

          {children}

          <RegisterFooter />
        </div>
      </div>
    </>
  );
}
