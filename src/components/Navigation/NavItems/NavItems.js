import React from 'react';

import NavItem from './NavItem/NavItem';

import classes from './NavItems.module.css';

const navitems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link='/' exact >Burger Builder</NavItem>
      <NavItem link='/orders' >My Orders</NavItem>
    </ul>
  )
}

export default navitems;