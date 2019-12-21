import { css } from 'emotion';
import * as React from 'react';

import { SECONDARY_TEXT_COLOR } from '../consts/colors';

const footerStyle = css`
  font-size: 12px;
  text-align: center;
  box-shadow: 0 0 5px #000;
  padding: 2px 0 4px;
`;

const linkStyle = css`
  color: ${SECONDARY_TEXT_COLOR};
  font-weight: 600;
  text-decoration: none;
`;

export const Footer = () => (
  <div className={footerStyle}>
    Made with{' '}
    <span role="img" aria-label="love">
      ❤️
    </span>{' '}
    by{' '}
    <a className={linkStyle} rel="noopener noreferrer" target="_blank" href="https://twitter.com/DarkoKukovec">
      @DarkoKukovec
    </a>
  </div>
);
