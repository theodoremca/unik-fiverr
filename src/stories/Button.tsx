import React, { PropsWithChildren } from 'react';
import './button.css';

export interface ButtonProps {
  colorMode?: 'primary' | 'secondary' | 'secondary-light';
  outline?: boolean;
  backgroundColor?: string;
  color?: string;
  gap?: number;
  border?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  colorMode = 'primary',
  outline = false,
  size = 'medium',
  backgroundColor,
  gap,
  color,
  border,
  label,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const colorE = `storybook-button--${colorMode}${outline ? '-outlined' : ''}`;
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, colorE].join(' ')}
      style={{ backgroundColor, border, color, gap: gap ?? 10 }}
      {...props}
    >
      {children}
      {label}
    </button>
  );
};
