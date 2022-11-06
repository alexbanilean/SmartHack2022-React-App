import React from 'react';
import ReactDOM from 'react-dom';
import { MetaMaskProvider } from "metamask-react";

import App from './App'
import './index.css';

ReactDOM.render(
    <MetaMaskProvider><App /></MetaMaskProvider>, document.getElementById('root'));