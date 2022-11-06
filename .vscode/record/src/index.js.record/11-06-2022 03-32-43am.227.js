import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Form from './Form';
import './index.css';

ReactDOM.render((
    <BrowserRouter>
        <App />
        <Form />    
    </BrowserRouter>
    ), document.getElementById('root'));