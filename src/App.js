// src/App.js
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Hero />
      <About />
    </div>
  );
};

export default App;