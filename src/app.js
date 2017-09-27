import React from 'react';
import { render } from 'react-dom';

import AppLayout from './views/appLayout/AppLayout';

function run() {
  const rootElement = document.getElementById('app');

  render(
    <AppLayout />,
    rootElement
  )
}

if (module.hot) {
  module.hot.accept('./views/appLayout/AppLayout.js', () => {
    setTimeout(run());
  })
}

run();
