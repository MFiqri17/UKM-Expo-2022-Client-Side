import { ukm } from '@/components/ukm/data/ukm';
import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import DetailSection from '@/components/ukm/detail/DetailSection';
import HeroUKM from '@/components/ukm/main/HeroUKM';

import { IUKMData } from '@/pages/ukm';

export default function UKMDetailPage() {
  const router = useRouter();
  const [UKM, setUKM] = React.useState<IUKMData>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    const selectedukm = ukm.find(({ href }) => href === router.asPath);
    if (selectedukm) {
      setUKM(selectedukm);
    }
    setIsLoading(false);
  }, [router.asPath]);
  return (
    <>
      <Layout>
        <Seo templateTitle={UKM && UKM.nama} />
        <main>
          <HeroUKM />
          <section className='bg-white py-10 px-4 sm:px-16 sm:py-20'>
            {isLoading ? (
              <div className='min-h-[30rem] w-full animate-pulse rounded-xl bg-gray-200'></div>
            ) : UKM ? (
              <DetailSection UKM={UKM} />
            ) : (
              <div className='h-[5rem]'>
                <h2 className='text-gradient mb-2 font-primary'>
                  UKM Not Found
                </h2>
                <UnderlineLink href='/ukm'>
                  &larr; Back To UKM Page
                </UnderlineLink>
              </div>
            )}
          </section>
        </main>
      </Layout>
    </>
  );
}
