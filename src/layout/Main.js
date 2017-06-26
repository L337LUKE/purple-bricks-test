import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import Offer from '../containers/Offer';

const Main = () => (
  <main className="main">
      <Switch>
          <Route exact path='/' component={Offer}/>
      </Switch>
  </main>
);

export default Main;