import React from 'react';
import { Routes, Route } from 'react-router-dom';


import App from './App';
import Form from './Form';

const Main = () => {
  return (
      <Routes>
        <Route exact path={__dirname} ' +''/*' element={<App />} />
        <Route exact path='/form' element={<Form />} />
      </Routes>
  );
}

export default Main;