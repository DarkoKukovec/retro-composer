import { injectGlobal } from 'emotion';
import * as React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers/App';
import { SECONDARY_TEXT_COLOR, SECONDARY_COLOR } from './consts/colors';

import * as serviceWorker from './serviceWorker';

injectGlobal`
  html, body {
    margin: 0;
    height: 100%;
    background: ${SECONDARY_COLOR};
  }

  #root {
    height: 100%;
    font-family: Quicksand, sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: ${SECONDARY_TEXT_COLOR};
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
