import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.css';

const navitem = (props) => {
  return (
    <li className={classes.NavItem}>
      <NavLink 
        to={props.link} 
        activeClassName={classes.active} 
        exact={props.exact} >
          
        {props.children}
      </NavLink>
    </li>
  )
}

export default navitem;