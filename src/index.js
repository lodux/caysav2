import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

import { RiduciContextProvider } from './context/riduci/RiduciContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <RiduciContextProvider>
       <App />
  </RiduciContextProvider>
 
  </BrowserRouter>
);

reportWebVitals();