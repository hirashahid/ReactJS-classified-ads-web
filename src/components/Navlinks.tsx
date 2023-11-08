'use client';
import { useMemo } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { TranslationNamespaces } from 'constants/translationNamespaces';

import { LoginModal } from './LoginModal';

export const Navlinks = (): JSX.Element => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);
  const names = useMemo(
    () => [
      t('mobilePhone'),
      t('accessories'),
      t('android'),
      t('ios'),
      t('handsfree'),
      t('charger'),
      t('cable'),
      t('earpods'),
      t('tripods'),
      t('headset'),
    ],
    [t]
  );

  return (
    <div className="flex flex-row bg-primary-100">
      <div className="flex items-center md:ml-20 w-10/12 gap-x-6 overflow-x-auto">
        {names?.map((name) => (
          <Link href={''} className="text-sm min-w-fit p-2 hover:opacity-80" key={name}>
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
