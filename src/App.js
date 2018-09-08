import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} />
        <Movie title={movieTitles[1]} />
        <Movie title={movieTitles[2]} />
        <Movie title={movieTitles[3]} />
      </div>
    );
  }
}

export default App;
