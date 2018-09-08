import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
 
class App extends Component {

  state = {
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://images-na.ssl-images-amazon.com/images/I/71qDKzqJZrL._SL1101_.jpg"
          },
          {
            title: "Oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title: "StarWars",
            poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"
          },
          {
            title: "Trainspotting",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Trainspotting_ver2.jpg/250px-Trainspotting_ver2.jpg"
          }
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        { this.state.movies ? this._renderMovies() : 'Loading' }
      </div>
    );
  }
}

export default App;
