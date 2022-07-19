import { Tab } from '@headlessui/react';
import * as React from 'react';
import { useState } from 'react';

import CatalogCard from '@/components/merch/CatalogCard';
import catalog from '@/components/merch/data/CatalogArray';
import MobileCatalog from '@/components/merch/mobile/MobileCatalog';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Catalog() {
  const [catalogs] = useState(catalog);
  return (
    <div className=' text-center'>
      <SectionTitle title='Catalog' />

      <div className='hidden md:block'>
        <Tab.Group>
          <Tab.List className='flex flex-wrap justify-center space-x-[21px]  '>
            {Object.keys(catalogs).map((catalog, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    'mb-[57px] w-[304px] rounded-[20px] py-6  text-2xl font-semibold leading-5  text-[#3C3C3B]',
                    'focus:outline-none',
                    selected
                      ? 'bg-gradient-to-r from-[#62B497] to-[#CDDD91]'
                      : 'bg-[#FBF8F3] bg-gradient-to-r hover:from-[#62B497] hover:to-[#CDDD91]'
                  )
                }
              >
                {catalog}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {Object.values(catalogs).map((items, index) => (
              <Tab.Panel
                className='flex flex-row justify-center space-x-[20px]'
                key={index}
              >
                {items.map((item) => (
                  <CatalogCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                  />
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <MobileCatalog />
    </div>
  );
}
