import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Popular from './components/popular/popular';
import TvShows from './components/TVshows/tvshows';
import Home from './components/Home/home';
import MovieS from './components/Movies/movies';
import './App.css';


// later additions will be the login pages and inside those other will be shown if the user is avalible 

// api key
// 56713a8728331355dd7af2d9e61887a3

function App() {
  return (  
  <Router>
    <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/tvshows"} element={<TvShows />} />
      <Route path={"/popular"} element={<Popular />} />
      <Route path={"/movies"} element={<MovieS />} />
    </Routes>
  </Router>
  );
}

export default App;
