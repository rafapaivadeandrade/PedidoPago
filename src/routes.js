import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../src/pages/Login';
import Landing from './pages/Landing';
import NewCategory from './pages/NewCategory';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/landing" component={Landing} />
      <Route path="/newCategory" component={NewCategory} />
    </BrowserRouter>
  );
}

export default Routes;
