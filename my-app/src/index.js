import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeGrid from './home-grid'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpotifyMatched from './Spotify-Matched';
import MyLife from './MyLife';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="spotifymatched" element={<SpotifyMatched />}></Route>
        <Route path="portfolio" element={<HomeGrid/>}></Route>
        <Route path="/" element={<HomeGrid/>}></Route>
        <Route path="mylife" element={<MyLife/>}></Route>
      </Routes>
    </Router>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
