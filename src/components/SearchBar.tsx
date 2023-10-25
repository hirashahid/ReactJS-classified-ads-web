'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { TextInput } from 'flowbite-react';

export const SearchBar = (): JSX.Element => {
  return (
    <div className="w-64">
      <TextInput
        placeholder="Search Mobile Phones, Handsfree and more ..."
        required
        rightIcon={() => <MagnifyingGlassIcon className="text-black h-5 w-5" />}
        type="search"
      />
    </div>
  );
};
