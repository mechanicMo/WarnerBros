import React from 'react';

import classes from './FilterBar.module.css';

import Aux from '../../hoc/Aux/Aux';
import Dropdown from '../Dropdown/Dropdown';

const filterbar = (props) => {
  return (
    <Aux>
      <div className={classes.FilterBar}>
        <span onClick={props.toggleFilter}>Filter <i className="arrow down"></i></span>
        {/* <span>Sorted By: {props.sortType} <i className="arrow down"></i></span> */}
        <Dropdown 
          changeSortType={props.changeSortType} 
          sortType={props.sortType}
          dropdownOptions={props.sortTypeOptions} > Sorted By: </Dropdown>
      </div>
      <div className={props.filtering ? classes.FilterOpen : classes.FilterClosed}>
      <Dropdown 
        changeFilters={props.changeFilters}
        sortType={props.releaseYear} 
        dropdownOptions={props.releaseYearOptions}
          > Release Year: </Dropdown>
      <Dropdown 
        changeFilters={props.changeFilters}
        sortType={props.genre}
        dropdownOptions={props.genreOptions}
          > Genre: </Dropdown>
      <Dropdown 
        changeFilters={props.changeFilters}
        sortType={props.rating}
        dropdownOptions={props.ratingOptions}
          > Rating: </Dropdown>
      </div>
    </Aux>
  );
}

export default filterbar;