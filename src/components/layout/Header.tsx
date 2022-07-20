import { Dialog, Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/event', label: 'EVENT' },
  { href: '/ukm', label: 'UKM' },
  { href: '/ComingSoon', label: 'MERCH' },
];

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);
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
            <li>
              <Popover className='relative'>
                <Popover.Button className='btn btn-gradient rounded-md py-2 px-3 font-bold'>
                  BUY TICKET
                </Popover.Button>
                <Transition
                  as={React.Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'
                >
                  <Popover.Panel className='absolute z-10 mt-3 transform px-4 sm:px-0'>
                    <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                      <div className='relative flex flex-col gap-y-2 bg-white p-3'>
                        <Link href='/Register'>
                          <p className='cursor-pointer font-semibold'>
                            Buy Now
                          </p>
                        </Link>
                        <Link href='/check-ticket'>
                          <p className='cursor-pointer font-semibold'>
                            Check My Ticket
                          </p>
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </li>
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
                        <li
                          className='flex items-center gap-x-3'
                          onClick={() => setIsDropdownOpen((prev) => !prev)}
                        >
                          <h1 className='text-3xl text-clightorange'>
                            BUY TICKET
                          </h1>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={2}
                            className='h-9 w-9 pb-2 text-clightorange'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M19 9l-7 7-7-7'
                            />
                          </svg>
                        </li>
                        {isDropdownOpen && (
                          <li>
                            <Link href='/Register'>
                              <h1 className='text-3xl text-clightorange'>
                                Buy Now
                              </h1>
                            </Link>
                            <Link href='/check-ticket'>
                              <h1 className='text-3xl text-clightorange'>
                                Check My Ticket
                              </h1>
                            </Link>
                          </li>
                        )}
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
