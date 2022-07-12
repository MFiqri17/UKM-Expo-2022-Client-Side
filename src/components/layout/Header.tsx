import Image from 'next/image';
import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/event', label: 'EVENT' },
  { href: '/ukm', label: 'UKM' },
  { href: '/merch', label: 'MERCH' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white py-2 shadow-md'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='hover:text-gray-600'>
          <Image
            src='images/logo/ukm-expo.svg'
            alt='UKM EXPO Logo'
            className='object-fit max-h-12'
          />
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-12'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnderlineLink href={href} className='text-[#62B497] '>
                  {label}
                </UnderlineLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
