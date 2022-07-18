import { Tab } from '@headlessui/react';
import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image'

import BundleArray from '@/components/merch/data/BundleArray';
import MobileBundle from '@/components/merch/mobile/MobileBundle';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function BundlePack() {
  const [categories] = useState(BundleArray);
  const indexes = [1, 2, 3, 4, 5];
  return (
    <div className='mt-60 text-center'>
      <div className='mb-[9.75rem] flex flex-row justify-center space-x-[10px] md:space-x-[30px]'>
        <Image src='svg/Line.svg' className='w-[3.75rem] md:w-fit' alt='' layout="fill" />
        <h1 className=' bg-gradient-to-r from-cblack	 via-cgreen to-cgreenb bg-clip-text font-magic text-4xl text-transparent md:text-7xl'>
          Bundle Pack
        </h1>
        <Image src='svg/Line.svg' className='w-[3.75rem] md:w-fit' alt='' layout='fill'/>
      </div>
      <div className='hidden md:block'>
        <Tab.Group>
          <div className='flex justify-between px-20'>
            <Tab.List className='flex flex-col space-y-12 '>
              {Object.keys(categories).map((category, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      'w-[305px] rounded-[20px] py-6  text-2xl font-semibold leading-5  text-[#3C3C3B]',
                      'focus:outline-none',
                      selected
                        ? 'bg-gradient-to-r from-[#62B497] to-[#CDDD91]'
                        : 'bg-[#FBF8F3] bg-gradient-to-r hover:from-[#62B497] hover:to-[#CDDD91]'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              {indexes.map((number) => (
                <Tab.Panel
                  key={number}
                  className='h-full w-[867px] bg-[#FBF8F3]'
                >
                  Content {number}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
      <MobileBundle />
    </div>
  );
}
