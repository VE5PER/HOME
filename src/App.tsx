import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import GameOfLife from './GameOfLife';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <Link to="/game-of-life" className="App-link">
          Game of Life
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-of-life" element={<GameOfLife />} />
      </Routes>
    </Router>
  );
}

export default App;
