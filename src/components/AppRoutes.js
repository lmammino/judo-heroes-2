'use strict';

import React from 'react';
import { Router, hashHistory } from 'react-router';
import routes from '../Routes';

const AppRoutes = (props) => (
  <Router history={hashHistory}
    routes={routes}
    onUpdate={() => window.scrollTo(0, 0)}/>
);

export default AppRoutes;
