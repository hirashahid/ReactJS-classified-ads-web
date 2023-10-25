'use client';

import Link from 'next/link';

import { LoginModal } from './LoginModal';

const names = [
  'Mobile Phone',
  'Accessories',
  'Android',
  'IOS',
  'Handsfree',
  'Charger',
  'Cable',
  'EarPods',
  'Tripods',
  'Headset',
];

export const Navlinks = (): JSX.Element => {
  return (
    <div className="flex flex-row bg-primary-100">
      <div className="flex items-center md:ml-20 w-10/12 gap-x-6 overflow-x-auto">
        {names.map((name) => (
          // eslint-disable-next-line react/jsx-key
          <Link href={''} className="text-sm min-w-fit p-2">
            {name}
          </Link>
        ))}
      </div>
      <div className="flex-end mr-2 min-w-fit">
        <LoginModal />
      </div>
    </div>
  );
};
