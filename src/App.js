import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Movies from './containers/Movies/Movies';
import Shows from './containers/Shows/Shows';
import GamesApps from './containers/GamesApps/GamesApps';
import AllMedia from './containers/AllMedia/AllMedia';

import classes from './App.module.css';


class App extends Component {
  render () {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path='/movies' component={Movies} />
            <Route path='/tv-shows' component={Shows} />
            <Route path='/games-apps' component={GamesApps} />
            <Route path='/blog' render={() => {
              return <h1 style={{textAlign: 'center'}}>BLOG PAGE COMING SOON</h1>
            }} />
            <Route path='/other' render={() => {
              return <h1 style={{textAlign: 'center'}}>OTHER PAGE COMING SOON</h1>
            }} />
            <Route path='/' component={AllMedia} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;