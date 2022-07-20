import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import SectionTitle from '@/components/SectionTitle';
import CardCarousel from '@/components/ukm/CardCarousel';

import { IUKMListData } from '@/pages/ukm';

interface IListUKMProps {
  UKMList: IUKMListData[];
  selectedBidang: string;
}

function UKMCard({ nama, logo, href }: IUKMListData) {
  return (
    <Link href={href}>
      <div className='btn flex cursor-pointer flex-col items-center justify-center gap-y-4 rounded-2xl bg-clightorange p-4'>
        <Image src={logo} alt='UKM Logo' width={135} height={135} />
        <h4 className='text-center text-cblack'>{nama}</h4>
      </div>
    </Link>
  );
}

export default function ListUKM({ UKMList, selectedBidang }: IListUKMProps) {
  return (
    <div className='mb-14' id='listukm'>
      <SectionTitle title={selectedBidang} />

      <div className='hidden flex-wrap justify-center gap-5 sm:flex'>
        {UKMList.map(({ nama, logo, href }, i) => (
          <Link key={i} href={href}>
            <div className='btn flex max-w-[23%] grow basis-[23%] cursor-pointer flex-col items-center justify-center gap-y-4 rounded-2xl bg-clightorange p-4'>
              <Image src={logo} alt='UKM Logo' width={135} height={135} />
              <h4 className='text-cblack'>{nama}</h4>
            </div>
          </Link>
        ))}
      </div>
      <div className='sm:hidden'>
        <CardCarousel<IUKMListData>
          data={UKMList}
          maxSlidesPerView={2}
          Card={UKMCard}
        />
      </div>
    </div>
  );
}
