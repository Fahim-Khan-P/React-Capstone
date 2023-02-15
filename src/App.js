import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Country from './components/Country';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar>Most Views</Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
