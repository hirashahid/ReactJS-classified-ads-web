'use client';

import { HeartIcon } from '@heroicons/react/24/outline';
import { Card } from 'flowbite-react';
import Link from 'next/link';

import { Button } from 'components/common/Button';

export const ItemCard = (): JSX.Element => {
  return (
    <Card
      className="m-5 bg-gray-200 overflow-hidden"
      imgAlt="..."
      imgSrc="https://s3-alpha-sig.figma.com/img/a79e/ac0e/47e323d26c041e1992d5256e579d51a7?Expires=1699228800&Signature=k4Bu9HKSUdaP6QYetuBMkceYPXR2tqkOB0Ute1k2yYHraPCfsqdrWqA5XpTBqCO3GfXNYTswBJIwb4bsWQX7XlNZuYFADx2~iC5LHLk60cTyFeVlUSJrFJWgwEL4nwJkN~9gTJQNSZ3ZIUNg8zLbQJ-TrdX8dXdLZFF5RcJyZOwWgMA9CeURyOrWkjG1toD5LjR1gji034EL8Fwjqp1yS0iUsSZ6m2klyX5NCbBgmZw53hmvyERU3lwcRdrxsBxKSPR5tvaN3bmru3R-5J~3r~cmr3ZboQzmly43CfJjVIoarvdLMXN2a2pnooTZqw-h6m5fHqx3mD4VGTCPVsn0xw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    >
      <a href="#">
        <h5 className="text-primary-300 dark:text-white">
          <p className="text-xl">iPhone 8 Good Condition PTA Approved Dabba Charger sath</p>
          <p className="text-bold text-gray-400">Bhatta Chowk</p>
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <span className=" rounded bg-cyan-100 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          <p className="text-primary-200">5.0</p>
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-primary-200 dark:text-white">Qeemat: Bs ek muskurahat!</span>
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
