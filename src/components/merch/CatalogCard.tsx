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
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <h5>{price}</h5>
      <button></button>
    </div>
  );
}
