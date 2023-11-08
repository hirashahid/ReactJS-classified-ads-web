import { PropsWithChildren } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { TranslationNamespaces } from 'constants/translationNamespaces';

interface Props extends PropsWithChildren {
  title: string;
}

export const ItemGroup = ({ children, title }: Props): JSX.Element => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);

  return (
    <div className="bg-gray-100 p-5">
      <div className="px-5">
        <div>
          <p className="text-red-500">{t('appTitle')}</p>
        </div>
        <div className="text-primary-300 flex flex-row justify-between items-center pt-5">
          <p className="text-2xl">{title}</p>
          <Link href={''} className="flex flex-row text-sm min-w-fit p-2 hover:opacity-80">
            {t('classified')}
            <ArrowRightIcon className="ml-2 w-6 h-6 text-primary-300" />
          </Link>
        </div>
      </div>
      <div className="justify-center grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">{children}</div>
    </div>
  );
};
