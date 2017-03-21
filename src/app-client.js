/* global window document */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';

const AppClient = () => (
  <Router>
    <App />
  </Router>
);

window.onload = () => {
  render(<AppClient />, document.getElementById('main'));
};
