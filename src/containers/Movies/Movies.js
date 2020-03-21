import React, { Component } from "react";

import axios from '../../axios-wb-items';

import classes from './Movies.module.css'

import MediaItem from '../../components/MediaItem/MediaItem';
import Spinner from '../../components/UI/Spinner/Spinner';
import FilterBar from '../../components/FilterBar/FilterBar';

class Movies extends Component {
  
  state = {
    movies: {},
    loading: true,
    filtering: false,
    sortType: 'Popularity',
    sortTypeOptions: ['Popularity', 'Alphabetically'],
    releaseYear: 'ALL',
    releaseYearOptions: ['ALL'],
    genre: 'ALL',
    genreOptions: ['ALL'],
    rating: 'ALL',
    ratingOptions: ['ALL']
  }

  componentDidMount() {
    axios.get('/movies.json')
      .then(res => {
        let genreOps = this.state.genreOptions;
        let ratingOps = this.state.ratingOptions;
        let releaseOps = this.state.releaseYearOptions;

        for(let movie in res.data) {
          let genres = res.data[movie].genre.split(', ')
          genreOps.push(...genres)
          ratingOps.push(res.data[movie].rating)
          releaseOps.push(res.data[movie]['release-year'])
        }

        let uniqueGenres = [...new Set(genreOps)]
        let uniqueRatings = [...new Set(ratingOps)]
        let uniqueReleases = [...new Set(releaseOps)]

        uniqueReleases.sort((a, b) => (a > b) ? -1 : 1)
        uniqueGenres.sort((a, b) => (a > b) ? 1 : -1)
        uniqueRatings.sort((a, b) => (a > b) ? 1 : -1)

        this.setState({
          loading: false, 
          movies: res.data, 
          genreOptions: uniqueGenres, 
          ratingOptions: uniqueRatings, 
          releaseYearOptions: uniqueReleases
        })
      })
      .catch(err => {
        // this.setState({error: true})
      })
  }

  toggleFilter = () => {
    this.setState({filtering: !this.state.filtering})
  }

  changeSortType = (event) => {
    if(this.state.sortType !== event.target.innerText) {
      this.setState({sortType: event.target.innerText})
    }
  }

  changeFilters = (event) => {
    debugger
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
            score={allMovies[movie]['score']}
            imgURL={allMovies[movie]['img-url']}
            genre={allMovies[movie]['genre']}
            rating={allMovies[movie]['rating']}
            releaseYear={allMovies[movie]['release-year']} />
        )
      }
      // debugger
      if(this.state.sortType === 'Popularity') {
        movies.sort((a, b) => (a.props.score > b.props.score) ? -1 : 1)
      } else if(this.state.sortType === 'Alphabetically') {
        movies.sort((a, b) => (a.props['img-url'] > b.props['img-url']) ? -1 : 1)
      }
    }

    return (
      <div className={classes.Movies}>
        <FilterBar 
          toggleFilter={this.toggleFilter} 
          filtering={this.state.filtering} 
          sortType={this.state.sortType}
          changeSortType={this.changeSortType}
          sortTypeOptions={this.state.sortTypeOptions}
          releaseYear={this.state.releaseYear}
          releaseYearOptions={this.state.releaseYearOptions}
          genre={this.state.genre}
          genreOptions={this.state.genreOptions}
          rating={this.state.rating}
          ratingOptions={this.state.ratingOptions} />
        {movies} 
      </div>
    );
  }
}

export default Movies;