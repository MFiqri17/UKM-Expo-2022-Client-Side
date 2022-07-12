import { Tab } from '@headlessui/react';
import * as React from 'react';
import { useState } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function VerticalTabs() {
  const [categories] = useState({
    'Graha ITS Pack': [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    'Science Tower Pack': [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    'Manarul Ilmi Pack': [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
    'Linpus Pack': [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
    'Taman Alumni Pack': [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  const indexes = [1, 2, 3, 4, 5];
  return (
    <div>
      <Tab.Group>
        <div className='flex justify-between px-20'>
          <Tab.List className='flex flex-col space-y-12 '>
            {Object.keys(categories).map((category, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    'w-[305px] rounded-[20px] py-6  text-2xl font-semibold leading-5  text-[#3C3C3B]',
                    'focus:outline-none',
                    selected
                      ? 'bg-gradient-to-r from-[#62B497] to-[#CDDD91]'
                      : 'bg-[#FBF8F3] bg-gradient-to-r hover:from-[#62B497] hover:to-[#CDDD91]'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {indexes.map((number) => (
              <Tab.Panel key={number} className='h-full w-[867px] bg-[#FBF8F3]'>
                Content {number}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}
