import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './container';
import NavBar from './components/navbar/NavBar';

const App = function App() {
  return (
    <div>
      <div>
        {' '}
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
