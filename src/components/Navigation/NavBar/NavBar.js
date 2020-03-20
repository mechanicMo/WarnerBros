import React from 'react';

import NavItems from '../NavItems/NavItems';

import classes from './NavBar.module.css';

const navbar = (props) => {
  return (
    <header className={classes.Navbar}>
      <div onClick={props.openSidebar}>MENU</div>

      <nav>
        <NavItems />
      </nav>
    </header>
  )
}

export default navbar;