import React from 'react';

import classes from './Dropdown.module.css';

const dropdown = (props) => {
  const dropdownButtons = []
  props.dropdownOptions.map(op => {
    dropdownButtons.push(
      <button 
        className="dropdown-item" 
        type="button" 
        key={op}
        onClick={props.changeSortType} >
          {op}
      </button>
    )
  })

  return (
    <div className={classes.Dropdown} >
      <p>{props.children}</p>
      <div className="dropdown" style={{display: 'inline-block'}}>
        <button 
          className="btn dropdown-toggle" 
          style={{
            padding: '0 5px',
            verticalAlign: '0'
          }} 
          type="button" 
          id="dropdownMenu2" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false" >
          {props.sortType}
        </button>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
          {dropdownButtons}
        </div>
      </div>
    </div>
  );
}

export default dropdown;