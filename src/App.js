import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/Navbar';
import About from './components/About';
import Qoute from './components/Quote';

const App = () => (
  <div className="App ">
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/qoute" element={<Qoute />} />
      </Routes>
    </HashRouter>
  </div>
);

export default App;
