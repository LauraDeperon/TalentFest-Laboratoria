import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Products from './pages/products.js';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Products} exact />
      <Route component={() => <div>Page 404!</div>} />
    </Switch>
  );
};

export default Routes;
