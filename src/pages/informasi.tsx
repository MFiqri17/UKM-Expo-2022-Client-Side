import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/SectionTitle';
import Seo from '@/components/Seo';

export default function InformationPage() {
  return (
    <>
      <Layout>
        <Seo templateTitle='Informasi' />
        <main>
          <section className='bg-white py-10 px-4 sm:py-20 sm:px-16'>
            <SectionTitle title='Informasi' />
            <div className='mb-20 rounded-2xl bg-clightorange px-2 py-8 shadow sm:px-10'>
              <h1 className='mb-8 text-center font-semibold'>
                Tata Cara Pendaftaran Peserta
              </h1>
              <ul className='list-disc space-y-4 px-10 font-semibold'>
                <li>
                  Peserta mendapatkan informasi Registrasi UKM EXPO ITS 2021
                  melalui media sosial UKM EXPO maupun broadcast dari grup maba.
                </li>
                <li>Peserta dapat mengunjungi website UKM EXPO.</li>
                <li>Peserta dapat membuka laman EVENT pada website.</li>
                <li>
                  Peserta dapat mengakses jadwal ELABORASI tiap UKM di website.
                </li>
                <li>
                  Registrasi dilakukan dengan menekan button “Play” pada laman
                  EVENT dan mengisi link registrasi ELABORASI sesuai UKM yang
                  dipilih.
                </li>
                <li>
                  Peserta mendapatkan konfirmasi registrasi melalui email.
                </li>
                <li>
                  Peserta mendapatkan link Zoom ELABORASI melalui email yang
                  telah diisikan.
                </li>
              </ul>
              <div className='my-7 border-t-2 border-cgreen' />
              <div className='px-4'>
                <h3 className='mb-4'>Catatan</h3>
                <ul className='list-disc space-y-4 px-10 font-semibold'>
                  <li>
                    Registrasi dapat dilakukan sebelum hari elaborasi yang
                    dipilih dimulai.
                  </li>
                  <li>
                    Link Zoom akan dikirimkan melalui email maksimal 1 jam
                    sebelum ELABORASI dimulai.
                  </li>
                </ul>
                <div className='my-5 text-center'>
                  <Link href='/event'>
                    <button className='btn btn-gradient mx-auto'>
                      Halaman Event
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='mb-16 rounded-2xl bg-clightorange px-2 py-8 shadow sm:px-10'>
              <h1 className='mb-8 text-center font-semibold'>
                Tata Cara Pendaftaran UKM
              </h1>
              <ul className='list-disc space-y-4 px-10 font-semibold'>
                <li>Peserta dapat mengunjungi website UKM EXPO.</li>
                <li>Peserta dapat membuka laman UKM pada website.</li>
                <li>
                  Peserta diarahkan untuk memilih opsi salah satu dari 4 bidang
                  UKM kemudian memilih salah satu UKM dari bidang UKM tersebut
                  sesuai yang diminati.
                </li>
                <li>
                  Pendaftaran dilakukan dengan menekan button “Mendaftar” dan
                  mengisi link pendaftaran UKM yang dipilih.
                </li>
              </ul>
              <div className='my-7 border-t-2 border-cgreen' />
              <div className='px-4'>
                <h3 className='mb-4'>Catatan</h3>
                <ul className='list-disc space-y-4 px-10 font-semibold'>
                  <li>
                    Informasi lebih lanjut bisa menghubungi Contact Person yang
                    tertera dari tiap UKM.
                  </li>
                  <li>Batas pengisian tanggal 3 September 2021.</li>
                </ul>
                <div className='my-5 text-center'>
                  <Link href='/ukm'>
                    <button className='btn btn-gradient mx-auto'>
                      Halaman UKM
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
