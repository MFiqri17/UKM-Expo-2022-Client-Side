import * as React from 'react';

import Layout from '@/components/layout/Layout';
import BundlePack from '@/components/merch/BundlePack';
import Catalog from '@/components/merch/Catalog';
import HeroMerch from '@/components/merch/HeroMerch';
import Timer from '@/components/merch/Timer';

export default function Merch() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return (
    <Layout>
      <HeroMerch />
      <Timer expiryTimestamp={time} />
      <BundlePack />
      <Catalog />
    </Layout>
  );
}
