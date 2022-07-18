import * as React from 'react';
import Image from 'next/image';

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
      <div className='w-full'>
      <Image src={image} alt={title} layout="fill"/>
      </div>
      <h4>{title}</h4>
      <h5>{price}</h5>
      <button></button>
    </div>
  );
}
