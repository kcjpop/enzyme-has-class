/* global document */
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home'

const render = Component =>
  // eslint-disable-next-line
  ReactDOM.render(<Component />, document.getElementById('js-app'));

render(Home);

if (module.hot) module.hot.accept('./Home', () => render(Home));
