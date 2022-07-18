import * as React from 'react';

import SectionTitle from '@/components/SectionTitle';
import CardCarousel from '@/components/ukm/CardCarousel';

interface IBidangUKMProps {
  setSelectedBidang: React.Dispatch<React.SetStateAction<string>>;
}

interface IBidangCardProps {
  bidang: string;
}

const BIDANG_UKM = [
  {
    bidang: 'Seni',
  },
  {
    bidang: 'Olahraga',
  },
  {
    bidang: 'Bela Diri',
  },
  {
    bidang: 'Bidang Khusus',
  },
];

function BidangCard({
  bidang,
  helperFunction,
}: IBidangCardProps & {
  helperFunction?: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className='flex h-[25rem] basis-1/4 flex-col rounded-2xl bg-clightorange shadow-sm'>
      <div className='h-1/2 rounded-t-2xl bg-cblack'></div>
      <div className='flex h-1/2 flex-col items-center justify-center gap-y-10'>
        <h2>{bidang}</h2>
        <a href='#listukm'>
          <button
            className='btn btn-gradient'
            onClick={() => {
              if (helperFunction) helperFunction(bidang);
            }}
          >
            Lihat lebih lanjut
          </button>
        </a>
      </div>
    </div>
  );
}

export default function BidangUKM({ setSelectedBidang }: IBidangUKMProps) {
  return (
    <div className='mb-14'>
      <SectionTitle title='UKM Kami' />
      <CardCarousel<
        IBidangCardProps,
        React.Dispatch<React.SetStateAction<string>>
      >
        data={BIDANG_UKM}
        maxSlidesPerView={4}
        Card={BidangCard}
        helperFunction={setSelectedBidang}
      />
    </div>
  );
}
