'use client';

import { Dropdown } from 'flowbite-react';
import useTranslation from 'next-translate/useTranslation';

import { TranslationNamespaces } from 'constants/translationNamespaces';

export const SelectCity = (): JSX.Element => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);

  return (
    <Dropdown outline color="transparent" label="Select Your City">
      <Dropdown.Item>{t('lahore')}</Dropdown.Item>
      <Dropdown.Item>{t('islamabad')}</Dropdown.Item>
      <Dropdown.Item>{t('karachi')}</Dropdown.Item>
    </Dropdown>
  );
};
