import React from 'react';
import './logo.css';

interface LogoProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'little' | 'medium' | 'big';
  label: string;
  onClick?: () => void;
}
export const Logo = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: LogoProps) => {
  const mode = primary ? 'storybook-logo--primary' : 'storybook-logo--secondary';
  return (
   <div className={['storybook-logo', `storybook-logo--${size}`, mode].join(' ')}>
  </div>
  );
};
