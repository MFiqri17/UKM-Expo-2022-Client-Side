import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

type ArrowDownButtonProps = {
  href: string;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'div'>;

export default function ArrowDownButton({
  className,
  iconClassName,
  href,
}: ArrowDownButtonProps) {
  return (
    <a className={clsxm(className)} href={href}>
      <AiOutlineArrowDown
        className={clsxm(
          'rounded-full border-4 border-white text-white opacity-75',
          'animate-bounce transition-all duration-75 hover:opacity-100',
          iconClassName
        )}
        size={64}
      />
    </a>
  );
}
