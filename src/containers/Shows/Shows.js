import React, { Component } from "react";

import axios from '../../axios-wb-items';

import classes from './Shows.module.css'

import MediaItem from '../../components/MediaItem/MediaItem';
import Spinner from '../../components/UI/Spinner/Spinner';

class Shows extends Component {
  
  state = {
    shows: {},
    loading: true
  }

  componentDidMount() {
    axios.get('/tv-shows.json')
      .then(res => {
        this.setState({loading: false, shows: res.data})
      })
      .catch(err => {
        // this.setState({error: true})
      })
  }

  render() {
    let shows = <Spinner />
    
    if(!this.state.loading) {
      shows = []
      const allshows = this.state.shows
      for (let show in allshows) {
        // debugger
        shows.push(
          <MediaItem 
            type='shows'
            key={show}
            name={show}
            imgURL={allshows[show]['img-url']}
            genre={allshows[show]['genre']}
            rating={allshows[show]['rating']}
            releaseYear={allshows[show]['release-year']} />
        )
      }
    }

    return (
      <div className={classes.Shows}>
        {shows} 
      </div>
    );
  }
}

export default Shows;