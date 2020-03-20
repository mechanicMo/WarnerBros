import React, { Component } from "react";

import axios from '../../axios-wb-items';

import classes from './GamesApps.module.css'

import MediaItem from '../../components/MediaItem/MediaItem';
import Spinner from '../../components/UI/Spinner/Spinner';

class GamesApps extends Component {
  
  state = {
    gamesapps: {},
    loading: true
  }

  componentDidMount() {
    axios.get('/games-apps.json')
      .then(res => {
        this.setState({loading: false, gamesapps: res.data})
      })
      .catch(err => {
        // this.setState({error: true})
      })
  }

  render() {
    let gamesapps = <Spinner />
    
    if(!this.state.loading) {
      gamesapps = []
      const allgamesapps = this.state.gamesapps
      for (let gameapp in allgamesapps) {
        gamesapps.push(
          <MediaItem 
            type='games-apps'
            key={gameapp}
            name={gameapp}
            imgURL={allgamesapps[gameapp]['img-url']}
            // genre={allgamesapps[gameapp]['genre']}
            // rating={allgamesapps[gameapp]['rating']}
            // releaseYear={allgamesapps[gameapp]['release-year']} 
            />
        )
      }
    }

    return (
      <div className={classes.GamesApps}>
        {gamesapps} 
      </div>
    );
  }
}

export default GamesApps;