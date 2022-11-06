import React from 'react';
import ReactDOM from 'react-dom';
import { MetaMaskProvider } from "metamask-react";

import App from './App'
import './index.css';

ReactDOM.render(
<<<<<<< HEAD
    <MetaMaskProvider>
        <App />
    </MetaMaskProvider>
=======
    <React.StrictMode>
        <MetaMaskProvider>
            <App />
        </MetaMaskProvider>
    </React.StrictMode>
>>>>>>> 660a18291e115aeaf566559707de407624a21f53
    , document.getElementById('root'));