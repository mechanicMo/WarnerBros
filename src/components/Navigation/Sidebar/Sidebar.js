import React from 'react';

import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

import classes from './Sidebar.module.css'

const sidebar = (props) => {

  let attachedClasses = [classes.Sidebar, classes.Close];
  
  if (props.isOpen) {
    attachedClasses = [classes.Sidebar, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.isOpen} clicked={props.closeSidebar} />

      <div className={attachedClasses.join(' ')}>
        
        <nav>
          <NavItems></NavItems>
        </nav>
      </div>
    </Aux>
  )
}

export default sidebar;