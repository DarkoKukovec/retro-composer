import { css } from 'emotion';
import * as React from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR } from '../consts/colors';
import { InputContainer } from './InputContainer';

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const mainStyle = css`
  flex: 1;
  background: ${PRIMARY_COLOR};
  color: ${PRIMARY_TEXT_COLOR};
`;

export const App = () => (
  <div className={layoutStyle}>
    <Header />
    <main className={mainStyle}>
      <InputContainer />
    </main>
    <Footer />
  </div>
);
