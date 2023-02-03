import React from 'react';
import './campo.css';

interface CampoProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  type?: string;
  icon?: string;
  onClick?: () => void;
}

export const Campo = ({
  primary = false,
  backgroundColor,
  label,
  type,
  icon,
  ...props
}: CampoProps) => {
  const mode = primary ? 'storybook-input--user' : 'storybook-input--password';
  return (
    <>
    <div className={['storybook-input', mode].join(' ')}>
          <input 
              type={type} 
              name="user" 
              id="user"
              placeholder='Insira seu nome' 
              alt="Digite seu usuario aqui" title='Digite seu usuario aqui'
          />
          <label htmlFor="user">
            <span className="material-symbols-outlined">{icon}</span>
          </label>
      </div>
        </>
  );
};
