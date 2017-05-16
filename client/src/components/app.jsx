import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import '../common/template/dependencies.js';
import '../sass/custom.scss';

import Header from '../common/template/header';
import SideBar from '../common/template/sidebar';
import Footer from '../common/template/footer';

import BillingCycle from '../containers/billing-cycle';
import Dashboard from '../containers/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <SideBar />
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/bilingCycles" component={BillingCycle} />
              <Route path="*" component={Dashboard} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
