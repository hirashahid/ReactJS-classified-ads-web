'use client';

import { Navbar as FlowbiteNavbar } from 'flowbite-react';
import { NavbarToggle } from 'flowbite-react/lib/esm/components/Navbar/NavbarToggle';
import useTranslation from 'next-translate/useTranslation';

import { Button } from 'components/common/Button';
import { Navlinks } from 'components/Navlinks';
import { SelectCity } from 'components/SelectCity';
import { TranslationNamespaces } from 'constants/translationNamespaces';

import { SearchBar } from './SearchBar';

export const Header = (): JSX.Element => {
  const { t } = useTranslation(TranslationNamespaces.COMMON);

  return (
    <>
      <FlowbiteNavbar fluid className="bg-gray-200">
        <FlowbiteNavbar.Brand href="">
          <span className="text-black text-xl font-semibold dark:text-white">{t('appTitle')}</span>
        </FlowbiteNavbar.Brand>
        <FlowbiteNavbar.Collapse className="w-64">
          <SelectCity />
          <SearchBar />
          <Button>{t('postAdButton')}</Button>
        </FlowbiteNavbar.Collapse>
        <NavbarToggle />
      </FlowbiteNavbar>
      <Navlinks />
    </>
  );
};
