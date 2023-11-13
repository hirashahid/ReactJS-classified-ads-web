'use client';

import classnames from 'classnames';
import { Button as FlowbiteButton, ButtonProps as FlowbiteButtonProps } from 'flowbite-react';

type ButtonProps = FlowbiteButtonProps & {
  variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'iconLink' | 'textLink';
};

const BUTTON_VARIANTS = {
  primary:
    'bg-gradient-primary hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white px-4 disabled:pointer-events-none',
  secondary:
    'bg-primary-100 hover:bg-primary-200 focus:ring-2 focus:ring-primary-100 focus:ring-opacity-50 text-white px-4 disabled:pointer-events-none',
  outline:
    'text-primary-200 bg-transparent border border-primary-200 hover:bg-gray-200 focus:ring-2 focus:ring-transparent-500 focus:ring-opacity-50 hover:text-black  disabled:pointer-events-none',
  link: 'bg-transparent min-w-fit border-none focus:ring-0 hover:text-white disabled:pointer-events-none',
  iconLink:
    ' border min-w-fit focus:ring-0 hover:text-white disabled:pointer-events-none rounded-lg bg-white hover:bg-gray-200',
  textLink: 'text-sm  hover:underline border-none outline-none focus:',
} as const;

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps): JSX.Element => (
  <FlowbiteButton {...props} className={classnames(BUTTON_VARIANTS[variant], className)} color={variant}>
    {children}
  </FlowbiteButton>
);
