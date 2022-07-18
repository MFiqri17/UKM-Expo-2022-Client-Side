import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo templateTitle='Event' />

      <main>
        <section
          className='flex flex-col bg-white bg-cover object-cover pt-16 md:flex-row'
          style={{
            backgroundImage: `url('/images/bg-event.svg')`,
            backgroundPosition: `center`,
          }}
        >
          <div className='ml-4 flex flex-1 flex-col items-center justify-center space-y-20 md:ml-24 md:items-start'>
            <h1 className='font-magic text-5xl md:text-7xl'>Event</h1>
            <div className='flex'>
              <UnstyledLink
                href='#'
                className='rounded-xl bg-ccream py-4 px-8 text-sm font-bold !transition duration-300 hover:scale-105'
              >
                Lihat lebih lanjut
              </UnstyledLink>
            </div>
          </div>
          <div className='relative w-full flex-1'>
            <div className='h-48 w-48 md:h-[28rem] md:w-[28rem]'>
              <Image
                src='/images/flowers-float-event.svg'
                alt='UKM EXPO Logo'
                className='object-fit'
                layout='fill'
              />
            </div>
          </div>
        </section>
        <section className='layout py-24'>
          <div className='relative flex-col items-center justify-center text-center'>
            <Image
              src='/images/header-line.svg'
              alt='line'
              layout='fill'
              className='absolute left-0 right-0 mx-auto'
            />
            <h2>
              <span className='text-gradient text-4xl md:text-7xl'>Jadwal</span>
            </h2>
            <h2>
              <span className='text-gradient text-4xl md:text-7xl'>
                Show Off UKM
              </span>
            </h2>
          </div>
        </section>
        <section className='layout mb-40 flex flex-col justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0'>
          <div className='flex flex-col rounded-3xl bg-ccream p-12' id='card'>
            <ul className='mb-8 flex-1 list-disc'>
              <dt className='mb-4 font-primary text-4xl font-bold'>
                25 Agustus
              </dt>
              <li className='font-primary text-xl font-medium'>PSM ITS</li>
              <li className='font-primary text-xl font-medium'>ITS MUN Club</li>
              <li className='font-primary text-xl font-medium'>
                Taekwondo ITS
              </li>
              <li className='font-primary text-xl font-medium'>
                PLH Siklus ITS
              </li>
              <li className='font-primary text-xl font-medium'>ITS Robotic</li>
              <li className='font-primary text-xl font-medium'>PSHT ITS</li>
              <li className='font-primary text-xl font-medium'>Bridge ITS</li>
              <li className='font-primary text-xl font-medium'>Rebana ITS</li>
              <li className='font-primary text-xl font-medium'>
                Perisai Diri ITS
              </li>
              <li className='font-primary text-xl font-medium'>
                Maritime Challenge
              </li>
              <li className='font-primary text-xl font-medium'>
                Tiyang Alit ITS
              </li>
              <li className='font-primary text-xl font-medium'>
                Karate-do ITS
              </li>
            </ul>
            <div className='flex justify-center'>
              <UnstyledLink
                href='/event/jadwal'
                className='rounded-xl bg-gradient-to-r from-cgreenb to-cgreen py-4 px-12 !transition !duration-300 hover:!scale-105'
              >
                Daftar
              </UnstyledLink>
            </div>
          </div>
          <div className='flex flex-col rounded-3xl bg-ccream p-12' id='card'>
            <ul className='mb-8  flex-1 list-disc'>
              <dt className='mb-4 font-primary text-4xl font-bold'>
                26 Agustus
              </dt>
              <li className='font-primary text-xl font-medium'>IFLS</li>
              <li className='font-primary text-xl font-medium'>
                ITS Flag Football
              </li>
              <li className='font-primary text-xl font-medium'>KSR PMI</li>
              <li className='font-primary text-xl font-medium'>
                Penalaran ITS
              </li>
              <li className='font-primary text-xl font-medium'>Musik ITS</li>
              <li className='font-primary text-xl font-medium'>Kendo ITS</li>
              <li className='font-primary text-xl font-medium'>Click ITS</li>
              <li className='font-primary text-xl font-medium'>
                Merpati Putih ITS
              </li>
              <li className='font-primary text-xl font-medium'>TDC ITS</li>
              <li className='font-primary text-xl font-medium'>UKTK ITS</li>
              <li className='font-primary text-xl font-medium'>Kempo ITS</li>
            </ul>
            <div className='flex justify-center'>
              <UnstyledLink
                href='/event/jadwal'
                className='rounded-xl bg-gradient-to-r from-cgreenb to-cgreen py-4 px-12 !transition !duration-300 hover:!scale-105'
              >
                Daftar
              </UnstyledLink>
            </div>
          </div>
        </section>
        <section className='layout pb-24'>
          <div className='relative flex-col items-center justify-center text-center'>
            <Image
              src='/images/header-line.svg'
              alt='line'
              layout='fill'
              className='absolute left-0 right-0 mx-auto'
            />
            <h2>
              <span className='text-gradient text-4xl md:text-7xl'>
                Rundown
              </span>
            </h2>
          </div>
        </section>
        <section>
          <div className='mb-12'>
            <div className='container lg:mx-auto'>
              <ol className='items-center justify-center md:flex'>
                <li className='relative mb-6 rounded-xl bg-ccream py-4 sm:mb-0'>
                  <time className='mb-2 block px-12 font-primary text-lg font-bold'>
                    Day 1
                  </time>
                  <div className='flex items-center justify-center overflow-hidden'>
                    <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cgreenb to-cgreen'></div>
                    <div className='absolute right-0 hidden h-2 w-1/2 bg-[#333333] sm:flex'></div>
                  </div>
                  <div className='mt-3 flex justify-center'>
                    <h3 className='font-primary text-lg font-normal '>
                      23 Agustus
                    </h3>
                  </div>
                </li>
                <li className='relative mb-6 sm:mb-0'>
                  <time className='mb-2 block px-12 font-primary text-lg  font-bold'>
                    Day 2
                  </time>
                  <div className='relative flex items-center'>
                    <div className='z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-cgreenb to-cgreen dark:bg-blue-900 dark:ring-gray-900'></div>
                    <div className='absolute hidden h-2 w-full bg-[#333333] sm:flex'></div>
                  </div>
                  <div className='mt-3 flex justify-center'>
                    <h3 className='font-primary text-lg  font-normal '>
                      24 Agustus
                    </h3>
                  </div>
                </li>
                <li className='relative mb-6 sm:mb-0'>
                  <time className='mb-2 block px-12 font-primary text-lg  font-bold'>
                    Day 3
                  </time>
                  <div className='relative flex items-center'>
                    <div className='z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-cgreenb to-cgreen dark:bg-blue-900 dark:ring-gray-900'></div>
                    <div className='absolute hidden h-2 w-full bg-[#333333] sm:flex'></div>
                  </div>
                  <div className='mt-3 flex justify-center'>
                    <h3 className='font-primary text-lg  font-normal '>
                      25 Agustus
                    </h3>
                  </div>
                </li>
                <li className='relative mb-6 sm:mb-0'>
                  <time className='mb-2 block px-12 font-primary text-lg  font-bold'>
                    Day 4
                  </time>
                  <div className='relative flex items-center'>
                    <div className='z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-cgreenb to-cgreen dark:bg-blue-900 dark:ring-gray-900'></div>
                    <div className='absolute hidden h-2 w-full bg-[#333333] sm:flex'></div>
                  </div>
                  <div className='mt-3 flex justify-center'>
                    <h3 className='font-primary text-lg  font-normal'>
                      26 Agustus{' '}
                    </h3>
                  </div>
                </li>
                <li className='relative mb-6 sm:mb-0'>
                  <time className='mb-2 block px-12 font-primary  text-lg font-bold'>
                    Day 5
                  </time>
                  <div className='relative flex items-center'>
                    <div className='z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-cgreenb to-cgreen dark:bg-blue-900 dark:ring-gray-900'></div>
                    <div className='absolute left-0 hidden h-2 w-1/2 bg-[#333333] sm:flex'></div>
                  </div>
                  <div className='mt-3 flex justify-center'>
                    <h3 className='font-primary text-lg  font-normal'>
                      27 Agustus
                    </h3>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section>
          <div className='layout grid grid-cols-1 gap-2 rounded-2xl bg-ccream px-4 py-16 font-primary font-semibold md:grid-cols-2'>
            <div className='grid grid-cols-3'>
              <div>
                <ol className='text-center'>
                  <li>15.10 - 15.30</li>
                  <li>15.30 - 15.33</li>
                  <li>15.33 - 15.40</li>
                  <li>15.40 - 15.45</li>
                  <li>15.45 - 15.50</li>
                  <li>15.50 - 15.55</li>
                  <li>15.55 - 16.03</li>
                  <li>16.03 - 16.13</li>
                  <li>16.13 - 16.33</li>
                  <li>16.33 - 16.43</li>
                  <li>16.43 - 16.48</li>
                  <li>16.48 - 17.08</li>
                  <li>17.08 - 17.31</li>
                </ol>
              </div>
              <div className='col-span-2'>
                <ol>
                  <li>Persiapan Panitia</li>
                  <li>Pembukaan oleh MC</li>
                  <li>Lagu kebangsaan Indonesia Raya dan Hymne ITS</li>
                  <li>Sambutan Ketua UKM EXPO 2021</li>
                  <li>Sambutan Ketua LMB ITS</li>
                  <li>Sambutan Presiden BEM ITS</li>
                  <li>Sambutan Pembina LMB ITS</li>
                  <li>Sambutan Pembina Rektor</li>
                  <li>Sambutan Menteri/Gubernur</li>
                  <li>Pemutaran Video Opening UKM EXPO ITS 2021</li>
                  <li>Jeda</li>
                  <li>Pemaparan oleh byU (Sponsor)</li>
                  <li>Pemaparan UKM ke-1 (Perisai Diri)</li>
                </ol>
              </div>
            </div>
            <div className='grid grid-cols-3'>
              <div>
                <ol className='text-center'>
                  <li>17.31 - 18.05</li>
                  <li>18.05 - 18.20</li>
                  <li>18.20 - 18.42</li>
                  <li>18.42 - 18.47</li>
                  <li>18.47 - 19.09</li>
                  <li>19.09 - 19.16</li>
                  <li>19.16 - 19.38</li>
                  <li>19.38 - 19.43</li>
                  <li>19.43 - 20.05</li>
                  <li>20.05 - 20.12</li>
                  <li>20.12 - 20.34</li>
                  <li>20.34 - 21.04</li>
                  <li>21.04 - 21.09</li>
                </ol>
              </div>
              <div className='col-span-2'>
                <ol>
                  <li>Isho (Maghrib)</li>
                  <li>Pengkondisian</li>
                  <li>Pemaparan UKM ke-2 (Basket)</li>
                  <li>Jeda</li>
                  <li>Pemaparan UKM ke-3 (Karate Do)</li>
                  <li>Games</li>
                  <li>Pemaparan UKM ke-4 (Softball)</li>
                  <li>Jeda</li>
                  <li>Pemaparan UKM ke-5 (LPM 1.0)</li>
                  <li>Games</li>
                  <li>Pemaparan UKM ke-6 (Musik ITS)</li>
                  <li>Deep Talk with UKM (BR)</li>
                  <li>Selesai</li>
                </ol>
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
