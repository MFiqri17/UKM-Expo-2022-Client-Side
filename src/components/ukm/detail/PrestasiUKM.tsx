import * as React from 'react';

import SectionTitle from '@/components/SectionTitle';
import CardCarousel from '@/components/ukm/CardCarousel';

interface IPrestasiCardProps {
  nama: string;
  deskripsi: string;
  img: string;
}

interface IPrestasiUKMProps {
  prestasi: IPrestasiCardProps[];
}

function PrestasiCard({ nama, deskripsi }: IPrestasiCardProps) {
  return (
    <div className='flex h-[25rem] basis-1/4 flex-col rounded-2xl bg-clightorange shadow-sm'>
      <div className='h-1/2 rounded-t-2xl bg-cblack'></div>
      <div className='min-h-1/2 flex flex-col items-center justify-center gap-y-2 px-5'>
        <h2>{nama}</h2>
        <p>{deskripsi}</p>
      </div>
    </div>
  );
}

export default function PrestasiUKM({ prestasi }: IPrestasiUKMProps) {
  return (
    <>
      <SectionTitle title='Prestasi' />
      <div className='px-10 sm:px-20'>
        <CardCarousel<IPrestasiCardProps>
          data={prestasi}
          maxSlidesPerView={2}
          Card={PrestasiCard}
        />
      </div>
    </>
  );
}
