import React from 'react';
import './avatar.css';

interface AvatarProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'little' | 'medium' | 'big';
  label: string;
  onClick?: () => void;
}

export const Avatar = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: AvatarProps) => {
  const mode = primary ? 'storybook-avatar--primary' : 'storybook-avatar--secondary';
  return (
   <img src="https://avatars.githubusercontent.com/u/6362486?s=400&u=4c92fa590b3256f633405f5044bfa585d34d7160&v=4" alt="teste" className={['storybook-avatar', `storybook-avatar--${size}`, mode].join(' ')}/>
  );
};
