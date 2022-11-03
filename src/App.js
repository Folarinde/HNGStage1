import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Homepage from './Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
