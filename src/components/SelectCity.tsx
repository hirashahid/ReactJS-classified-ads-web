'use client';

import { Dropdown } from 'flowbite-react';

export const SelectCity = (): JSX.Element => {
  return (
    <Dropdown outline color="transparent" label="Select Your City">
      <Dropdown.Item>Islamabad</Dropdown.Item>
      <Dropdown.Item>Quetta</Dropdown.Item>
      <Dropdown.Item>Lahore</Dropdown.Item>
      <Dropdown.Item>Karachi</Dropdown.Item>
    </Dropdown>
  );
};
