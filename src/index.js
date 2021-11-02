// import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { ContextProvider } from './components/Context';
import App from './App';

const app = (
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

render(app, document.getElementById('root'));