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

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo templateTitle='Event' />

      <main>
        <section
          className='flex bg-white bg-cover object-cover pt-16'
          style={{
            backgroundImage: `url('/images/bg-event.svg')`,
            backgroundPosition: `center`,
          }}
        >
          <div className='ml-24 flex flex-1 flex-col justify-center space-y-20'>
            <h1 className='font-magic text-7xl'>Event</h1>
            <div className='flex'>
              <UnstyledLink
                href='#'
                className='rounded-xl bg-ccream py-4 px-8 font-bold !transition duration-300 hover:scale-105'
              >
                Lihat lebih lanjut
              </UnstyledLink>
            </div>
          </div>
          <div className='relative w-full flex-1'>
            <div className='h-[28rem] w-[28rem]'>
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
              <span className='text-gradient text-4xl md:text-7xl'>
                Event Kami
              </span>
            </h2>
          </div>
        </section>
        <section className='layout mb-40 flex flex-col space-y-16'>
          <div className='grid h-fit grid-cols-1 md:grid-cols-2'>
            <div className='w-full rounded-l-3xl bg-slate-700'></div>
            <div className='flex flex-col space-y-6 rounded-r-3xl bg-ccream px-8 py-24'>
              <h3>Opening</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                reiciendis dolorem placeat explicabo assumenda enim maiores
                nostrum voluptatem eum totam est aliquam, fuga facilis a commodi
                aut adipisci. Quas, maiores eligendi. Deleniti quod repellat
                nostrum numquam optio magni velit nihil ad voluptatibus,
                suscipit fugit eum.
              </p>
              <div className='flex'>
                <UnstyledLink
                  href='/event/jadwal'
                  className='rounded-xl bg-gradient-to-r from-cgreenb to-cgreen py-4 px-8 !transition !duration-300 hover:!scale-105'
                >
                  Jadwal Elaborasi
                </UnstyledLink>
              </div>
            </div>
          </div>
          <div className='grid h-fit grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col space-y-6 rounded-l-3xl bg-ccream px-8 py-24'>
              <h3>Main Event</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                reiciendis dolorem placeat explicabo assumenda enim maiores
                nostrum voluptatem eum totam est aliquam, fuga facilis a commodi
                aut adipisci. Quas, maiores eligendi. Deleniti quod repellat
                nostrum numquam optio magni velit nihil ad voluptatibus,
                suscipit fugit eum.
              </p>
              <div className='flex'>
                <UnstyledLink
                  href='#'
                  className='rounded-xl bg-gradient-to-r from-cgreenb to-cgreen py-4 px-8 !transition !duration-300 hover:!scale-105'
                >
                  Lihat Lebih Lanjut
                </UnstyledLink>
              </div>
            </div>
            <div className='w-full rounded-r-3xl bg-slate-700'></div>
          </div>
          <div className='grid h-fit grid-cols-1 md:grid-cols-2'>
            <div className='w-full rounded-l-3xl bg-slate-700'></div>
            <div className='flex flex-col space-y-6 rounded-r-3xl bg-ccream px-8 py-24'>
              <h3>Closing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                reiciendis dolorem placeat explicabo assumenda enim maiores
                nostrum voluptatem eum totam est aliquam, fuga facilis a commodi
                aut adipisci. Quas, maiores eligendi. Deleniti quod repellat
                nostrum numquam optio magni velit nihil ad voluptatibus,
                suscipit fugit eum.
              </p>
              <div className='flex'>
                <UnstyledLink
                  href='#'
                  className='rounded-xl bg-gradient-to-r from-cgreenb to-cgreen py-4 px-8 !transition !duration-300 hover:!scale-105'
                >
                  Lihat Lebih Lanjut
                </UnstyledLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
