'use client';
import classnames from 'classnames';
import { Button as FlowbiteButton, ButtonProps as FlowbiteButtonProps } from 'flowbite-react';

type Variant = 'primary' | 'secondary' | 'outline' | 'link';

type ButtonProps = FlowbiteButtonProps & {
  variant?: Variant;
};

export const BUTTON_VARIANTS = {
  primary:
    'bg-gradient-primary hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white px-4 disabled:pointer-events-none',
  secondary:
    'bg-primary-100 hover:bg-primary-200 focus:ring-2 focus:ring-primary-100 focus:ring-opacity-50 text-white px-4 disabled:pointer-events-none',
  outline:
    'text-primary-200 bg-transparent border border-primary-200 hover:bg-gray-200 focus:ring-2 focus:ring-transparent-500 focus:ring-opacity-50 hover:text-black  disabled:pointer-events-none',
  link: 'bg-transparent min-w-fit border-none focus:ring-0 hover:text-white disabled:pointer-events-none',
} as const;

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps): JSX.Element => (
  <FlowbiteButton {...props} className={classnames(BUTTON_VARIANTS[variant as Variant], className)} color={variant}>
    {children}
  </FlowbiteButton>
);
