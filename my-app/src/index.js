import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeGrid from './home-grid'
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SpotifyMatched from './Spotify-Matched';
import Phoenix from './Phoenix'
import MyLife from './MyLife';
import ISchool from './iSchool';
import GraphicTranslation from './GraphicTranslation'
import ArtGallery from './ArtGallery'
import PlaylistCovers from './PlaylistCovers'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Routes>
        <Route path="spotifymatched" element={<SpotifyMatched />}></Route>
        <Route path="ischool" element={<ISchool />}></Route>
        <Route path="portfolio" element={<HomeGrid/>}></Route>
        <Route path="/" element={<HomeGrid/>}></Route>
        <Route path="mylife" element={<MyLife/>}></Route>
        <Route path="playlist" element={<PlaylistCovers/>}></Route>
        <Route path="gallery" element={<ArtGallery/>}></Route>
        <Route path="translation" element={<GraphicTranslation/>}></Route>
        <Route path="phoenix" element={<Phoenix/>}></Route>
      </Routes>
    </HashRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
