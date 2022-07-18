import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import SectionTitle from '@/components/SectionTitle';

interface IFAQUKM {
  faq: {
    question: string;
    answer: string;
  }[];
}

export default function FAQUKM({ faq }: IFAQUKM) {
  return (
    <>
      <SectionTitle title='FAQ' />
      <div className='w-full rounded-2xl bg-clightorange px-10 py-8 shadow'>
        {faq.map(({ question, answer }, i) => (
          <Disclosure key={i} as='div' className='mb-4'>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={clsx(
                    'z-50 flex w-full items-center justify-between bg-[#EDE8DF] px-4 py-4 text-left font-bold text-cblack transition-transform focus:outline-none focus-visible:ring focus-visible:ring-cblack focus-visible:ring-opacity-75',
                    open ? 'rounded-t-lg' : 'rounded-lg'
                  )}
                >
                  <span className='pl-6 pr-5 md:pr-20'>{question}</span>
                  <div
                    className={clsx(
                      open ? 'rotate-180 transform' : 'rotate-0',
                      'h-8 w-8 text-cblack transition-transform'
                    )}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Transition
                  enter='transition duration-150 ease-out'
                  enterFrom='transform -translate-y-2 opacity-0'
                  enterTo='transform translate-y-0 opacity-100'
                  leave='transition duration-150 ease-out'
                  leaveFrom='transform translate-y-0 opacity-100'
                  leaveTo='transform -translate-y-2 opacity-0'
                >
                  <Disclosure.Panel className='rounded-b-lg bg-[#EDE8DF] pl-10 pr-20 pb-4 text-cblack'>
                    {answer}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </>
  );
}
