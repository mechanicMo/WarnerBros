import React, { Component } from "react";

import axios from '../../axios-wb-items';

import classes from './Movies.module.css'

import MediaItem from '../../components/MediaItem/MediaItem';
import Spinner from '../../components/UI/Spinner/Spinner';

class Movies extends Component {
  
  state = {
    movies: {},
    loading: true
  }

  componentDidMount() {
    axios.get('/movies.json')
      .then(res => {
        this.setState({loading: false, movies: res.data})
      })
      .catch(err => {
        // this.setState({error: true})
      })
  }

  render() {
    let movies = <Spinner />
    
    if(!this.state.loading) {
      movies = []
      const allMovies = this.state.movies
      for (let movie in allMovies) {
        // debugger
        movies.push(
          <MediaItem 
            type='movies'
            key={movie}
            name={movie}
            imgURL={allMovies[movie]['img-url']}
            genre={allMovies[movie]['genre']}
            rating={allMovies[movie]['rating']}
            releaseYear={allMovies[movie]['release-year']} />
        )
      }
    }

    return (
      <div className={classes.Movies}>
        {movies} 
      </div>
    );
  }
}

export default Movies