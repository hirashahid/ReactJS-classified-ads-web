'use client';

import { HeartIcon } from '@heroicons/react/24/outline';
import { Card } from 'flowbite-react';
import Link from 'next/link';

import { Button } from 'components/common/Button';

export const ItemCard = (): JSX.Element => {
  return (
    <Card className="mx-3 min-w-fit bg-gray-300" imgAlt="..." imgSrc="/images/products/apple-watch.png">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>Apple Watch Series 7 GPS,</p>
          <p>Aluminium Case, Starlight Sport</p>
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          <p className="text-primary-200">5.0</p>
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-primary-200 dark:text-white">Rs. 80,000</span>
        <span>
          <Link href={''}>
            <HeartIcon className="w-5 h-5 text-primary-200" />
          </Link>
        </span>
      </div>
      <Button variant="outline">Add to cart</Button>
    </Card>
  );
};
