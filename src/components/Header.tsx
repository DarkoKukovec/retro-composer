import { css } from 'emotion';
import * as React from 'react';

import logo from '../assets/logo.svg';

const headerStyle = css`
  height: 50px;
  box-shadow: 0 0 5px #000;
  padding: 7px 16px;
`;

const logoStyle = css`
  height: 50px;
`;

export const Header = () => (
  <header className={headerStyle}>
    <img className={logoStyle} src={logo} alt="Retro Composer" />
  </header>
);
