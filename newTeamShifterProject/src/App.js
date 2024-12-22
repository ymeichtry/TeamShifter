import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.js';
import EnterPlayers from './pages/EnterPlayers/EnterPlayers.js';
import ShiftOverview from './pages/ShiftOverview/ShiftOverview.js';
import './App.css';

import Header from './components/Header/Header.js';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/EnterPlayers" element={<EnterPlayers />} />
            <Route path="/ShiftOverview" element={<ShiftOverview />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
