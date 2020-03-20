import React from 'react';

import NavItems from '../NavItems/NavItems';

import classes from './NavBar.module.css';

const navbar = (props) => {
  let sidebarIconClasses = [classes.SidebarIcon]
  
  if (props.sideBarOpened) {
    sidebarIconClasses = [classes.SidebarIcon, classes.Change]
  }

  return (
    <header className={classes.NavBar}>
      <h1>SEARCH RESULTS</h1>

      <nav>
        <NavItems />
      </nav>

      <div className={sidebarIconClasses.join(' ')} onClick={props.openSidebar}>
        <div className={classes.Bar1}></div>
        <div className={classes.Bar2}></div>
        <div className={classes.Bar3}></div>
      </div>
    </header>
  )
}

export default navbar;