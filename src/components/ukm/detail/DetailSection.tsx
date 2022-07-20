import Image from 'next/image';
import * as React from 'react';

import SectionTitle from '@/components/SectionTitle';
import FAQUKM from '@/components/ukm/detail/FAQUKM';
import PrestasiUKM from '@/components/ukm/detail/PrestasiUKM';

import { IUKMData } from '@/pages/ukm';

interface IDetailUKMProps {
  UKM: IUKMData;
}

export default function DetailUKM({ UKM }: IDetailUKMProps) {
  const { nama, deskripsi, contacts, faq, prestasi } = UKM;
  return (
    <div className=''>
      <SectionTitle title='UKM Kami' />
      <div className='mb-32 px-5 sm:mb-36'>
        <div className='flex min-h-[30rem] w-full flex-col rounded-xl bg-clightorange shadow-xl sm:flex-row'>
          <div className='min-h-[15rem] basis-1/2 rounded-t-xl bg-cblack sm:min-h-0 sm:rounded-l-xl sm:rounded-r-none'></div>
          <div className='flex basis-1/2 flex-col justify-end px-4 sm:px-10'>
            <div className='flex grow flex-col justify-center gap-y-5 py-6'>
              <h1 className='font-semibold'>{nama}</h1>
              <p>{deskripsi}</p>
            </div>
            <div>
              <h4>Hubungi Kami</h4>
              <div className='mb-5 mt-2 flex gap-x-4'>
                {contacts.map(({ contact, href }, i) => (
                  <div key={i}>
                    <a href={href} target='_blank' rel='noreferrer'>
                      <Image
                        src={`/images/socials/green-${contact}.svg`}
                        alt='Socials'
                        width={30}
                        height={30}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-20 flex h-[11rem] justify-center sm:mb-28 sm:h-[19rem] md:h-[31rem]'>
        <iframe
          className='aspect-video'
          src='https://www.youtube.com/embed/BYba9Laa3lo'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <div className='mb-20'>
        <PrestasiUKM prestasi={prestasi} />
      </div>
      <div className='mb-20'>
        <FAQUKM faq={faq} />
      </div>
    </div>
  );
}
