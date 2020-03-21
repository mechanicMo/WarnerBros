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
        changeSortType={(event) => props.changeFilters(event, 'releaseYear')}
        sortType={props.releaseYear} 
        dropdownOptions={props.releaseYearOptions}
          > Release Year: </Dropdown>
      <Dropdown 
        changeSortType={(event) => props.changeFilters(event, 'genre')}
        sortType={props.genre}
        dropdownOptions={props.genreOptions}
          > Genre: </Dropdown>
      <Dropdown 
        changeSortType={(event) => props.changeFilters(event, 'rating')}
        sortType={props.rating}
        dropdownOptions={props.ratingOptions}
          > Rating: </Dropdown>
      </div>
    </Aux>
  );
}

export default filterbar;