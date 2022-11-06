import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './App';
import Form from './Form';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/*' element={<App />}></Route>
      <Route exact path='/form' component={<Form />}></Route>
    </Routes>
  );
}

export default Main;