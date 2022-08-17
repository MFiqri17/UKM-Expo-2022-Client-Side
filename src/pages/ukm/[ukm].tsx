import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import { ukm } from '@/components/ukm/data/ukm';
import DetailSection from '@/components/ukm/detail/DetailSection';
import HeroUKM from '@/components/ukm/main/HeroUKM';

import { IUKMData } from '@/pages/ukm';

export default function UKMDetailPage(props: any) {
  const router = useRouter();
  const [UKM, setUKM] = React.useState<IUKMData>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // React.useEffect(() => {
  //   setIsLoading(true);
  //   const selectedukm = ukm.find(({ href }) => href === router.asPath);
  //   if (selectedukm) {
  //     setUKM(selectedukm);
  //   }
  //   setIsLoading(false);
  // }, [router.asPath]);
  return (
    <>
      <Layout>
        <Seo templateTitle={props && props.nama} />
        <main>
          <HeroUKM />
          <section
            className='bg-white py-10 px-4 sm:px-16 sm:py-20'
            id='main-section'
          >
            {isLoading ? (
              <div className='min-h-[30rem] w-full animate-pulse rounded-xl bg-gray-200'></div>
            ) : props ? (
              <DetailSection UKM={props} />
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

export async function getServerSideProps(ctx: any) {
  const { ukm: data } = ctx.params;
  const selectedukm = ukm.find(({ href }) => href === `/ukm/${data}`);
  // if (selectedukm?.deskripsi.split(' ')[0] === 'Lorem') {
  //   return {
  //     redirect: {
  //       destination: 'https://www.instagram.com/ukmexpo_its/',
  //     },
  //     props: {},
  //   };
  // }
  return {
    props: selectedukm,
  };
}
