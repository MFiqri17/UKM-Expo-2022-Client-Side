import Image from 'next/image';
import * as React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import FilosofiBentukCarousel from '@/components/home/FilosofiBentukCarousel';
import FilosofiWarnaCarousel from '@/components/home/FilosofiWarnaCarousel';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import FireItOn from '@/assets/svg/FireItOn';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section
          className='bg-white object-cover'
          style={{
            backgroundImage: `url('images/hero.svg')`,
            backgroundPosition: `center`,
          }}
        >
          <div className='layout flex min-h-screen flex-col items-center justify-start text-center'>
            <FireItOn />
            <ArrowDownButton className='translate-y-6' href='#ukm' />
          </div>
        </section>
        <section className='layout' id='ukm'>
          <div className='relative flex-col items-center justify-center text-center'>
            <Image
              src='images/header-line.svg'
              alt='line'
              className='absolute left-0 right-0 mx-auto'
            />
            <h2>
              <span className=' text-gradient'> Apa itu</span>
            </h2>
            <h2>
              <span className=' text-gradient'>UKM EXPO?</span>
            </h2>
          </div>
          <div className='my-8 mx-24'>
            <p className='text-center text-2xl font-normal'>
              Suatu rangkaian kegiatan untuk memperkenalkan Unit Kegiatan
              Mahasiswa (UKM) kepada para mahasiswa baru. Dalam UKM Expo,
              mahasiswa baru memiliki kesempatan untuk bertanya mengenai seluk
              beluk dan berbagai aktivitas UKM yang mereka minati. UKM Expo ini
              diharapkan bisa menjadi sarana untuk menunjukkan eksistensi UKM
              yang ada di ITS sebagai wadah pengembangan diri bersama melalui
              minat dan bakat yang sama.
            </p>
          </div>
        </section>
        <section className='relative'>
          <Image
            src='images/leaf-bg.svg'
            alt='leaf background'
            className='ml-24'
          />
          <p className='absolute top-20 -z-[1] mx-24 rounded-2xl bg-ccream px-24 py-16 text-center text-2xl font-normal'>
            Untuk mahasiswa baru yang masih meraba-raba mengenai minat bakatnya
            diharapkan setelah mengikuti rangkaian kegiatan UKM Expo ini dapat
            mengenali minat bakatnya pada bidang apa.
          </p>
        </section>
        <section>
          <ul className='my-12 flex justify-around text-2xl'>
            <li>Seni</li>
            <li>Beladiri</li>
            <li>Olahraga</li>
            <li>Bidang Khusus</li>
          </ul>
        </section>
        <section className='flex items-center justify-center text-xl font-medium'>
          <UnstyledLink
            href='#'
            className='duratio-300 rounded-xl bg-gradient-to-r from-clime to-cgreen py-4 px-8 transition hover:scale-105'
          >
            Cara mendaftar
          </UnstyledLink>
        </section>
        <section className='layout'>
          <div className='flex items-center space-x-4'>
            <div>
              <h2 className='text-6xl'>
                <span className=' text-gradient'>Filosofi</span>
              </h2>
              <h2 className='text-6xl'>
                <span className=' text-gradient'>Warna</span>
              </h2>
            </div>
            <div className=' h-0.5 w-1/5 rounded-xl bg-cgreen'></div>
          </div>
        </section>
        <section className='layout'>
          <FilosofiWarnaCarousel />
        </section>
        <section className='layout'>
          <div className='flex items-center space-x-4'>
            <div>
              <h2 className='text-6xl'>
                <span className=' text-gradient'>Filosofi</span>
              </h2>
              <h2 className='text-6xl'>
                <span className=' text-gradient'>Bentuk</span>
              </h2>
            </div>
            <div className=' h-0.5 w-1/5 rounded-xl bg-cgreen'></div>
          </div>
        </section>
        <section className='layout'>
          <FilosofiBentukCarousel />
        </section>
      </main>
    </Layout>
  );
}
