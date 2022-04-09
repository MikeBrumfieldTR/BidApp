import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ArtDetail from './ArtDetail';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Art Bid"
  }, [])
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/art/:id" element={<ArtDetail></ArtDetail>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
