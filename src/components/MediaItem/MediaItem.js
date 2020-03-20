import React from 'react';

import classes from './MediaItem.module.css';

const mediaitem = (props) => {
  return (
    <div className={classes.MediaItem}>
      <img src={require('../../assets/images/'+props.type+'/'+props.imgURL)} alt=""/>
      <p style={{
        margin: '20px 0 15px'
         }} >
          {props.type.includes('-') ? props.type.split('-').join(' & ') : props.type}
      </p>
      <p style={{
        marginBottom: '60px'
         }} >
          {props.name}
      </p>
    </div>
  );
}

export default mediaitem;