import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/details:country" exact element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
