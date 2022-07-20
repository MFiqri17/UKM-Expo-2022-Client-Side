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
                How to Participate in UKM EXPO 2022
              </h1>
              <h3>Do&apos;s</h3>
              <ul className='list-disc space-y-4 px-10 font-semibold'>
                <li>
                  Mahasiswa Baru kampus ITS Angkatan 2022 yang selanjutnya
                  disebut Peserta wajib sudah memiliki riwayat vaksinasi min. 2
                  kali
                </li>
                <li>
                  Penyelenggaraan UKM EXPO 2022 Hari ke-1 dan ke-2 yakni Kamis -
                  Jumat (25 - 26 Agustus 2022), acara hanya diperuntukkan bagi
                  internal KM ITS, terutama Mahasiswa Baru kampus ITS Angkatan
                  2022
                </li>
                <li>
                  Peserta wajib melakukan registrasi dengan mengisi lengkap form
                  yang telah disediakan oleh panitia Peserta wajib mengenakan
                  masker dan membawa hand sanitizer sendiri
                </li>
                <li>
                  Peserta wajib mengenakan pakaian standar kuliah sopan rapi dan
                  bersepatu
                </li>
                <li>
                  Peserta bebas berkeliling area UKM EXPO 2022 dengan tetap
                  menjaga protokol kebersihan dan kesehatan yang diterapkan
                </li>
                <li>
                  Peserta bertanggungjawab untuk keamanan seluruh barang
                  pribadinya
                </li>
                <li>
                  Penyelenggaraan UKM EXPO 2022 Hari ke-3 yakni Sabtu (27
                  Agustus 2022), acara diperuntukkan bagi internal dan eksternal
                  KM ITS (Masyarakat umum)
                </li>
                <li>
                  Pengunjung UKM EXPO 2022 Hari ke-3 wajib melakukan pembelian
                  tiket masuk secara daring melalui situs UKM EXPO 2022 pada
                  fitur buy ticket maupun membeli secara OTS saat Hari ke-1 dan
                  ke-2 yakni Kamis - Jumat (25 - 26 Agustus 2022)
                </li>
              </ul>
              <div className='my-7 border-t-2 border-cgreen' />
              <h3>Dont&apos;s</h3>
              <ul className='list-disc space-y-4 px-10 font-semibold'>
                <li>
                  Peserta dilarang menimbulkan kericuhan saat berada di area UKM
                  EXPO 2022
                </li>
                <li>
                  Peserta dilarang membawa makanan dan/atau minuman dari luar
                </li>
                <li>
                  Dilarang keras membawa/memakai rokok/vape, narkoba, zat
                  terlarang, dan minuman beralkohol/miras
                </li>
                <li>
                  Dilarang keras membawa senjata api, benda tajam, dan benda
                  mudah terbakar
                </li>
              </ul>
              {/* <div className='px-4'>
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
              </div> */}
            </div>
            <div className='mb-16 rounded-2xl bg-clightorange px-2 py-8 shadow sm:px-10'>
              <h1 className='mb-8 text-center font-semibold'>
                How to Register and Joining UKM
              </h1>
              <ul className='list-disc space-y-4 px-10 font-semibold'>
                <li>
                  Peserta wajib hadir dan berpartisipasi saat UKM EXPO 2022
                  diselenggarakan
                </li>
                <li>
                  Peserta wajib melakukan registrasi dengan mengisi lengkap form
                  yang telah disediakan oleh panitia saat Hari ke-1 dan Hari
                  ke-2
                </li>
                <li>
                  Registrasi Hari ke-1 dan ke-2 dilakukan dengan stempel sebagai
                  tiket masuk area
                </li>
                <li>
                  Setelah memasuki area UKM EXPO 2022, peserta berkeliling dan
                  menikmati hiburan yang disuguhkan
                </li>
                <li>
                  Peserta bebas mendaftar UKM melalui pengisian identitas dan
                  pendataan serupa melalui form yang disediakan oleh
                  masing-masing UKM
                </li>
                <li>
                  Peserta menunggu pemberitahuan dan pengarahan lebih lanjut
                  oleh masing-masing UKM yang telah didaftar
                </li>
              </ul>
              {/* <div className='my-7 border-t-2 border-cgreen' />
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
              </div> */}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
