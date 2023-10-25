'use client';

import { Navbar as FlowbiteNavbar } from 'flowbite-react';
import { NavbarToggle } from 'flowbite-react/lib/esm/components/Navbar/NavbarToggle';

import { Button } from 'components/common/Button';
import { Navlinks } from 'components/Navlinks';
import { SelectCity } from 'components/SelectCity';

import { SearchBar } from './SearchBar';

export const Navbar = (): JSX.Element => {
  return (
    <>
      <FlowbiteNavbar fluid className="bg-gray-300">
        <FlowbiteNavbar.Brand href="">
          <span className="text-black text-xl font-semibold dark:text-white">Classified Ads</span>
        </FlowbiteNavbar.Brand>
        <FlowbiteNavbar.Collapse className="w-64">
          <SelectCity />
          <SearchBar />
          <Button>+ Post an Ad</Button>
        </FlowbiteNavbar.Collapse>
        <NavbarToggle />
      </FlowbiteNavbar>
      <Navlinks />
    </>
  );
};
