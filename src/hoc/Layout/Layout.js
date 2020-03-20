import React from 'react';

import Aux from '../Aux/Aux';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import Sidebar from '../../components/Navigation/Sidebar/Sidebar';

import classes from './Layout.module.css';

const layout = (props) => {

  return (
    <Aux>
      {/* <Toolbar openSidebar={this.sideDrawerOpenedHandler} /> */}
      {/* <Sidebar  */}
        {/* isOpen={this.state.showSidebar}  */}
        {/* closeSidebar={this.sideDrawerClosedHandler} /> */}
      <main className={classes.Layout}>
        {this.props.children}
      </main>
    </Aux>
  )
}

export default layout;