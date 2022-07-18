import Image from 'next/image';
import * as React from 'react';
import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import FilosofiBentukCarousel from '@/components/home/FilosofiBentukCarousel';
import FilosofiWarnaCarousel from '@/components/home/FilosofiWarnaCarousel';
import RetrospeksiCarousel from '@/components/home/RetrospeksiCarousel';
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
      <Seo templateTitle='Home' />
      <main>
        <section
          className='bg-white bg-cover object-cover'
          style={{
            backgroundImage: `url('/images/hero.svg')`,
            backgroundPosition: `center`,
          }}
        >
          <div className='layout flex min-h-screen flex-col items-center justify-start text-center'>
            <FireItOn className='w-2/3 md:w-1/3' />
            <ArrowDownButton className='translate-y-6' href='#ukm' />
          </div>
        </section>
        <section className='layout my-24 scroll-m-24' id='ukm'>
          <div className='relative mb-4 flex-col items-center justify-center text-center'>
            <Image
              src='/images/header-line.svg'
              alt='line'
              layout='fill'
              className='absolute left-0 right-0 mx-auto'
            />
            <h2>
              <span className='text-gradient text-2xl md:text-7xl'>
                Apa itu
              </span>
            </h2>
            <h2>
              <span className='text-gradient text-2xl md:text-7xl'>
                UKM EXPO?
              </span>
            </h2>
          </div>
          <div className='md:my-8 lg:mx-24'>
            <p className='text-center text-sm font-normal md:text-2xl'>
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
        <section className='relative mt-36 mb-24'>
          <div className='absolute bottom-12 h-40 w-40 -translate-x-8 md:-bottom-8 md:left-20 md:h-96 md:w-96 md:-translate-x-0'>
            <Image
              src='/images/leaf-bg.svg'
              alt='leaf background'
              layout='fill'
              className='lg:ml-24'
            />
          </div>
          <div className='mx-2 rounded-2xl bg-ccream px-4 py-8 md:px-24 md:py-16 lg:mx-24'>
            <p className='text-md  text-center font-normal md:text-2xl'>
              Untuk mahasiswa baru yang masih meraba-raba mengenai minat
              bakatnya diharapkan setelah mengikuti rangkaian kegiatan UKM Expo
              ini dapat mengenali minat bakatnya pada bidang apa.
            </p>
          </div>
        </section>
        <section>
          <ul className='text-md my-12 flex justify-around font-bold md:text-2xl'>
            <li>Seni</li>
            <li>Beladiri</li>
            <li>Olahraga</li>
            <li>Bidang Khusus</li>
          </ul>
        </section>
        <section className='mb-20 flex items-center justify-center text-xl font-medium'>
          <UnstyledLink
            href='#'
            className='rounded-xl bg-gradient-to-r from-cgreenb to-cgreen py-4 px-8 text-lg transition duration-300 hover:scale-105 md:text-2xl'
          >
            Cara mendaftar
          </UnstyledLink>
        </section>
        <section className='layout'>
          <div className='flex items-center space-x-4'>
            <div>
              <h2 className='text-gradient text-2xl md:text-7xl'>
                <span className=' text-gradient'>Filosofi</span>
              </h2>
              <h2 className='text-gradient text-2xl md:text-7xl'>
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
              <h2 className='text-gradient text-2xl md:text-7xl'>
                <span className=' text-gradient'>Filosofi</span>
              </h2>
              <h2 className='text-gradient text-2xl md:text-7xl'>
                <span className=' text-gradient'>Bentuk</span>
              </h2>
            </div>
            <div className=' h-0.5 w-1/5 rounded-xl bg-cgreen'></div>
          </div>
        </section>
        <section className='layout mb-24'>
          <FilosofiBentukCarousel />
        </section>
        <section className='layout'>
          <div className='relative flex-col items-center justify-center text-center'>
            <Image
              src='/images/header-line.svg'
              alt='line'
              layout='fill'
              className='absolute left-0 right-0 mx-auto'
            />
            <h2>
              <span className='text-gradient text-2xl md:text-7xl'>
                Retro Speksi
              </span>
            </h2>
            <h2>
              <span className='text-gradient text-2xl md:text-7xl'>
                2020 & 2021
              </span>
            </h2>
          </div>
          <RetrospeksiCarousel />
        </section>
      </main>
    </Layout>
  );
}