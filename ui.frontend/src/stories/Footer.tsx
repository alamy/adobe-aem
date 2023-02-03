import React  from 'react';
import './footer.css';

interface FooterProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  seconds?: string;
  textoFotter?: string;
  onClick?: () => void;
}

export const Footer = ({
  primary = false,
  backgroundColor,
  label,
  seconds,
  textoFotter,
  ...props
}: FooterProps) => {
  const mode = primary ? 'storybook-footer--desktop' : 'storybook-footer--mobil';
  return (
    <>
    <section className={['storybook-footer', mode].join(' ')}>
                <div className="descripitionFooter">
                    <p>{textoFotter}</p>
                </div>
                <div className="timeout">
                    <ul>
                        <li id="application">
                            <p>Application<br/> refresh in</p>
                        </li>
                        <li>
                            <h1>{seconds}</h1>
                            <p>seconds</p>
                        </li>
                    </ul>
                </div>
                <div className="desktop">
                    <div className="logout">Acessar<br/> Busca</div>
                    <div className="search">Logout</div>
                </div>
                <div className="mobil">
                    <div className="search">Logout</div>
                    <div className="logout">Acessar Busca</div>
                </div>
            </section>
        </>
  );
};
