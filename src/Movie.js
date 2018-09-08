import React, { Component } from 'react'; 
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>{ this.props.title }</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://steamcdn-a.akamaihd.net/steam/apps/416560/header.jpg?t=1504213621" />
        )
    }
}

export default Movie;