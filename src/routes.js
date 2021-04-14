import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/home';
import ProductInformation from './pages/ProductInformation/productInformation'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/product' component={ProductInformation} exact />
      <Route component={() => <div>Page 404!</div>} />
    </Switch>
  );
};

export default Routes;
