'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { TextInput } from 'flowbite-react';
import useTranslation from 'next-translate/useTranslation';

import { TranslationNamespaces } from 'constants/translationNamespaces';

export const SearchBar = (): JSX.Element => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);

  return (
    <div className="w-64">
      <TextInput
        placeholder={t('searchBarPlaceholder')}
        required
        rightIcon={() => <MagnifyingGlassIcon className="text-black h-5 w-5" />}
        type="search"
      />
    </div>
  );
};
