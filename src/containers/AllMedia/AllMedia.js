import React, { Component } from "react";

import axios from '../../axios-wb-items';

import classes from './AllMedia.module.css'

import MediaItem from '../../components/MediaItem/MediaItem';
import Spinner from '../../components/UI/Spinner/Spinner';

class AllMedia extends Component {
  
  state = {
    allMedia: {},
    loading: true
  }

  componentDidMount() {
    axios.get('.json')
      .then(res => {
        this.setState({
          loading: false, 
          allMedia: {
            movies: {...res.data.movies}, 
            shows: {...res.data["tv-shows"]},
            gamesapps: {...res.data["games-apps"]}
          }
        })
      })
      .catch(err => {
        // this.setState({error: true})
      })
  }

  render() {
    let allMedia = <Spinner />
    
    if(!this.state.loading) {
      allMedia = []
      
      const stateMedia = this.state.allMedia

      for (let mediaType in stateMedia) {
        for (let media in stateMedia[mediaType]) {
          
          allMedia.push(
            <MediaItem 
              type={mediaType === "gamesapps" ? 'games-apps' : mediaType}
              key={media}
              name={media}
              imgURL={stateMedia[mediaType][media]['img-url']}
              genre={stateMedia[mediaType][media]['genre']}
              rating={stateMedia[mediaType][media]['rating']}
              releaseYear={stateMedia[mediaType][media]['release-year']} />
          )
        }
      }
    }

    return (
      <div className={classes.AllMedia}>
        {allMedia} 
      </div>
    );
  }
}

export default AllMedia;