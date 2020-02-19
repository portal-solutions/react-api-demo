/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import AppProviders from './contexts/AppContext';
import MainPage from './pages/MainPage';

const App = () => (
  <AppProviders>
    <MainContainer>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </HashRouter>
    </MainContainer>
  </AppProviders>
);

export default App;
