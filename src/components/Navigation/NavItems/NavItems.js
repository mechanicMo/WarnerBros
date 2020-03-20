import React from 'react';

import NavItem from './NavItem/NavItem';

import classes from './NavItems.module.css';

const navitems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link='/' exact >All</NavItem>
      <NavItem link='/movies' >Movies</NavItem>
      <NavItem link='/tv-shows' >TV Shows</NavItem>
      <NavItem link='/games-apps' >Games & Apps</NavItem>
      <NavItem link='/blog' >Blog</NavItem>
      <NavItem link='/other' >Other</NavItem>
    </ul>
  )
}

export default navitems;