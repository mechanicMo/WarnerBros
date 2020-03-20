import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';

import classes from './Layout.module.css';

class Layout extends Component {

  state = {
    showSidebar: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSidebar: false})
  }

  sideDrawerOpenedHandler = () => {
    this.setState({showSidebar: true})
  }

  render() {
    return (
      <Aux>
        <NavBar openSidebar={this.sideDrawerOpenedHandler} sideBarOpened={this.state.showSidebar}/>
        <Sidebar 
          isOpen={this.state.showSidebar} 
          closeSidebar={this.sideDrawerClosedHandler} />
        <main className={classes.Layout}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;