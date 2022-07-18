import Image from 'next/image';
import * as React from 'react';

const OA = [
  {
    href: 'https://www.instagram.com/ukmexpo_its/',
    label: 'ukmexpo_its',
    img: '/images/socials/instagram.svg',
  },
  {
    href: 'https://www.youtube.com/channel/UCRcX486rcfh6PrhcH80wVWw',
    label: 'UKM EXPO ITS',
    img: '/images/socials/youtube.svg',
  },
  {
    href: '#',
    label: 'yay7605b',
    img: '/images/socials/line.svg',
  },
];

export default function Footer() {
  return (
    <>
      <footer className='bottom-0 min-h-max space-y-16 bg-cgreen pt-10 pb-8 sm:pt-24'>
        <div className='flex flex-wrap items-center justify-center gap-x-24 gap-y-10 px-1 sm:px-0'>
          <div className='w-1/2 sm:w-auto'>
            <Image
              src='/images/logo/ukm-expo-white.svg'
              alt='UKM EXPO Logo'
              width={305}
              height={175}
            />
          </div>
          <div className='flex flex-wrap justify-center gap-y-10 gap-x-24'>
            <div className='space-y-6'>
              <h3 className='text-cwhite'>Official Account</h3>
              {OA.map(({ href, label, img }, i) => (
                <div key={i}>
                  <a
                    href={href}
                    className='flex items-center gap-x-2'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Image src={img} alt='OA Logo' width={37} height={37} />
                    <p className='text-white'>{label}</p>
                  </a>
                </div>
              ))}
            </div>
            <div>
              <h3 className='text-cwhite'>Sponsor</h3>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-y-4 px-4 sm:justify-between sm:px-20'>
          <p className='flex gap-x-2 text-cwhite'>
            <span>
              <Image
                src='/images/copyright.svg'
                alt='copyright'
                className='inline-block'
                width={20}
                height={20}
              />
            </span>
            UKM Expo 2022
          </p>
          <Image
            src='/images/footer-logos.svg'
            alt='UKM EXPO Logo'
            width={565}
            height={59}
          />
        </div>
      </footer>
    </>
  );
}
