import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Movies from './containers/Movies/Movies';
import Shows from './containers/Shows/Shows';

import classes from './App.module.css';
// import AllMedia from './containers/AllMedia/AllMedia';

class App extends Component {
  render () {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path='/movies' component={Movies} />
            <Route path='/tv-shows' component={Shows} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;