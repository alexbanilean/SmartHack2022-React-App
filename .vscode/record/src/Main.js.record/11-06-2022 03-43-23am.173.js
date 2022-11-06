import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Form from './Form';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;