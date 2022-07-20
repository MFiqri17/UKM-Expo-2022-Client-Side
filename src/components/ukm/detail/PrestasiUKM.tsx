import Image from 'next/image';
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

function PrestasiCard({ nama, deskripsi, img }: IPrestasiCardProps) {
  return (
    <div className='flex h-[25rem] basis-1/4 flex-col rounded-2xl bg-clightorange shadow-sm'>
      <div className='relative h-1/2 overflow-clip rounded-t-2xl bg-cblack'>
        <Image src={img} layout='fill' alt='Bidang' objectFit='cover' />
      </div>
      <div className='min-h-1/2 flex flex-col items-center justify-center gap-y-2 p-4 px-5'>
        <h3 className='text-center'>{nama}</h3>
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
        {prestasi.length === 0 ? (
          <div className='text-cdark text-center font-semibold'>
            Hubungi UKM terkait untuk mendapatkan informasi lebih lanjut
          </div>
        ) : (
          <CardCarousel<IPrestasiCardProps>
            data={prestasi}
            maxSlidesPerView={2}
            Card={PrestasiCard}
          />
        )}
      </div>
    </>
  );
}
