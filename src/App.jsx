import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, AllBooks, OneBook, Page404 } from './container';
import NavBar from './components/navbar/NavBar';

const App = function App() {
  return (
    <div>
      <div>
        {' '}
        <NavBar />
      </div>
      <Routes>
        <Route path="/allbooks/:id" element={<OneBook />} />
        <Route path="/allbooks" element={<AllBooks />} />
        <Routes path="/addbook" />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
