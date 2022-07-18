import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/event', label: 'EVENT' },
  { href: '/ukm', label: 'UKM' },
  { href: '/Merch', label: 'MERCH' },
];

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState<boolean>(false);
  return (
    <header className='sticky top-0 z-50 bg-clightorange py-2 px-2 shadow-md sm:px-4'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='mt-2 hover:text-gray-600'>
          <Image
            src='/images/logo/ukm-expo.svg'
            alt='UKM EXPO Logo'
            className='object-fit'
            width='90%'
            height='90%'
          />
        </UnstyledLink>
        <nav>
          {/* Desktop View */}
          <ul className='hidden items-center justify-between space-x-11 sm:flex'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnderlineLink href={href} className='text-cgreen '>
                  {label}
                </UnderlineLink>
              </li>
            ))}
          </ul>
          {/* Mobile View */}
          <button className={clsx(!isNavbarOpen && 'hidden')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-cgreen'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <button
            className={clsx('z-30 md:hidden', isNavbarOpen && 'hidden')}
            onClick={() => setIsNavbarOpen(true)}
          >
            <Image
              src='/images/navbar-expand.svg'
              alt='Navbar Expand'
              width={38}
              height={38}
            />
          </button>
          <Transition appear show={isNavbarOpen} as={React.Fragment}>
            <Dialog
              as='div'
              className='relative z-10'
              onClose={() => setIsNavbarOpen(!isNavbarOpen)}
            >
              <Transition.Child
                as={React.Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-cgreen bg-opacity-75' />
              </Transition.Child>

              <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                  <Transition.Child
                    as={React.Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <Dialog.Panel className='transform transition-all'>
                      <ul className='flex flex-col gap-14'>
                        {links.map(({ href, label }) => (
                          <li key={`${href}${label}`}>
                            <UnderlineLink href={href}>
                              <h1 className='text-3xl text-clightorange'>
                                {label}
                              </h1>
                            </UnderlineLink>
                          </li>
                        ))}
                      </ul>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </nav>
      </div>
    </header>
  );
}
