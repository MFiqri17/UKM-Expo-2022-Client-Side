import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import SectionTitle from '@/components/SectionTitle';
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
                className='rounded-xl bg-clightorange py-4 px-8 text-sm font-bold !transition duration-300 hover:scale-105'
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
              <span className='text-gradient text-2xl md:text-7xl'>
                Event Kami
              </span>
            </h2>
          </div>
        </section>
        <section className='layout mb-40 flex flex-col space-y-16'>
          <div className='grid h-fit grid-cols-1 md:grid-cols-2'>
            <div className='relative w-full overflow-hidden rounded-l-3xl'>
              <Image
                src='/images/events/opening.png'
                alt='opening'
                layout='fill'
              />
            </div>
            <div className='flex flex-col space-y-6 rounded-r-3xl bg-clightorange px-8 py-24'>
              <h3>Opening</h3>
              <p>
                Opening adalah serangkaian acara di rangkaian UKM EXPO 2022 yang
                berupa simbolisasi pembukaan, sambutan, arak-arakan UKM, serta
                games yang diadakan di Hari ke-1 pada Kamis, 25 Agustus 2022.
                Bakal seru banget, wajib dateng pokoknya!
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
            <div className='flex flex-col space-y-6 rounded-l-3xl bg-clightorange px-8 py-24'>
              <h3>Main Event</h3>
              <p>
                Main event merupakan agenda lanjutan dari pembukaan yang berisi
                agenda-agenda utama dalam rangkaian UKM EXPO 2022.
                Penampilan-penampilan menakjubkan dari tiap UKM akan disuguhkan
                pada main event. Selain itu, akan ada stand UKM di sekeliling
                panggung sehingga teman-teman MABA dapat melakukan eksplorasi
                UKM on the spot. Jangan sampai terlewat, yaa!
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
            <div className='relative w-full overflow-hidden rounded-r-3xl'>
              <Image
                src='/images/events/main-event.png'
                alt='opening'
                layout='fill'
              />
            </div>
          </div>
          <div className='grid h-fit grid-cols-1 md:grid-cols-2'>
            <div className='relative w-full overflow-hidden rounded-l-3xl'>
              <Image
                src='/images/events/opening.png'
                alt='opening'
                layout='fill'
              />
            </div>
            <div className='flex flex-col space-y-6 rounded-r-3xl bg-clightorange px-8 py-24'>
              <h3>Closing</h3>
              <p>
                Closing adalah malam terakhir penyelenggaraan UKM EXPO 2022 yang
                akan diisi dengan pentas seni dan pertunjukkan minat bakat.
                Nantinya di closing ini akan ada penampilan drama musikal
                melankoli, penerbangan lampion, dan bahkan dihadiri guest star
                ternama. Rugi banget kalau ga dateng, tuh! Yuk beli tiket
                closing lewat (click here redirect ke buy now)
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
          <div>
            <SectionTitle title='Peraturan Umum' />
            <div className='rounded-2xl bg-clightorange px-2 py-8 shadow sm:px-10'>
              <ul className='space-y-1 text-lg font-semibold'>
                <li>
                  1. Peserta acara UKM EXPO 2022 ini merupakan mahasiswa baru
                  ITS angkatan 2022.
                </li>
                <li>
                  2. Selain mahasiswa baru ITS angkatan 2022 dilarang memasuki
                  kawasan acara, (wajib menunjukkan KTM/FRS online/My ITS dan
                  KTP)
                </li>
                <li>
                  3. Peserta wajib hadir di tempat 30 menit sebelum acara
                  Opening UKM EXPO dimulai.
                </li>
                <li>
                  4. Peserta wajib melakukan registrasi ke panitia sebelum acara
                  Opening UKM EXPO dimulai.
                </li>
                <li>
                  5. Peserta wajib menerapkan protokol kesehatan yang berlaku
                  selama berada di lokasi acara.
                </li>
                <li>
                  6. Peserta diharuskan memakai pakaian standar kuliah bebas
                  sopan dan rapi.
                </li>
                <li>
                  7. Peserta diharapkan mengikuti seluruh rangkaian acara dari
                  awal hingga acara selesai.
                </li>
                <li>
                  8. Peserta diharapkan untuk menjaga barang bawaan sendiri.
                </li>
                <li>
                  9. Peserta diharapkan untuk mematuhi segala tata tertib yang
                  berlaku selama berada di lokasi acara.
                </li>
                <li>
                  10. Segala bentuk kehilangan barang bawaan berada di luar
                  tanggung jawab panitia.
                </li>
                <li>
                  11. Peserta bersedia menerima sanksi atas setiap pelanggaran
                  yang dilakukan.
                </li>
                <li>
                  12. Peserta wajib mematuhi seluruh SOP yang telah dibuat oleh
                  panitia.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <SectionTitle title='Tata Tertib Peserta' />
            <div className='rounded-2xl bg-clightorange px-2 py-8 shadow sm:px-10'>
              <ul className='space-y-1 text-lg font-semibold'>
                <li>
                  1. Peserta dilarang membawa senjata tajam dan/atau bahan
                  peledak.
                </li>
                <li>
                  2. Peserta dilarang membawa obat-obatan terlarang, gas
                  beracun, dan benda-benda lainnya yang bisa membahayakan orang
                  lain.
                </li>
                <li>
                  3. Peserta dilarang mengucapkan atau bertindak sesuatu yang
                  mengandung SARA dan menyinggung orang lain.
                </li>
                <li>4. Peserta dilarang membawa hewan peliharaan.</li>
                <li>
                  5. Peserta dilarang membawa makanan dan minuman dari luar.
                </li>
                <li>
                  6. Peserta dilarang merokok termasuk penggunaan rokok elektrik
                  (vape atau sejenisnya)
                </li>
                <li>7. Peserta dilarang membuang sampah sembarangan.</li>
                <li>
                  8. Peserta dilarang menimbulkan kericuhan atau kegaduhan.
                </li>
                <li>
                  9. Peserta dilarang merusak fasilitas yang ada di kawasan
                  acara dan sekitarnya.
                </li>
                <li>
                  10. Hal-hal yang belum diatur dalam peraturan akan diatur
                  kemudian sesuai dengan keputusan panitia
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
