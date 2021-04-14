import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Products from './pages/products.js';
import productsInformation from './components/productsInformation/productsInformation';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Products} exact />
      <Route path='/product' component={productsInformation} exact />
      <Route component={() => <div>Page 404!</div>} />
    </Switch>
  );
};

export default Routes;
