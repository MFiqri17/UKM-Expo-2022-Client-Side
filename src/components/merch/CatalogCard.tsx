import Image from 'next/image';
import * as React from 'react';

export default function CatalogCard({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: string;
}) {
  return (
    <div className='w-[413px] rounded-[20px] bg-[#FBF8F3] object-cover'>
      <Image
        src={image}
        alt={title}
        layout='responsive'
        width={413}
        height={255}
      />

      <h4>{title}</h4>
      <h5>{price}</h5>
      <button></button>
    </div>
  );
}
