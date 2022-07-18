import { ukm } from '@/components/ukm/data/ukm';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import BidangUKM from '@/components/ukm/main/BidangUKM';
import HeroUKM from '@/components/ukm/main/HeroUKM';
import ListUKM from '@/components/ukm/main/ListUKM';

export interface IUKMData {
  nama: string;
  deskripsi: string;
  bidang: string;
  img: string;
  logo: string;
  href: string;
  contacts: {
    contact: string;
    href: string;
  }[];
  prestasi: {
    nama: string;
    deskripsi: string;
    img: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export type IUKMListData = Pick<IUKMData, 'nama' | 'logo' | 'href'>;

export default function UKMPage() {
  const [selectedBidang, setSelectedBidang] = React.useState<string>('Seni');
  const [UKMList, setUKMList] = React.useState<IUKMListData[]>([]);

  React.useEffect(() => {
    const list = ukm.filter(({ bidang }) => bidang === selectedBidang);
    setUKMList(
      list.map(({ nama, logo, href }) => ({
        nama: nama,
        logo: logo,
        href: href,
      }))
    );
  }, [selectedBidang]);

  return (
    <>
      <Layout>
        <Seo templateTitle='UKM' />
        <main>
          <HeroUKM />
          <section className='bg-white py-10 px-4 sm:px-16 sm:py-20'>
            <BidangUKM setSelectedBidang={setSelectedBidang} />
            <ListUKM UKMList={UKMList} selectedBidang={selectedBidang} />
          </section>
        </main>
      </Layout>
    </>
  );
}
