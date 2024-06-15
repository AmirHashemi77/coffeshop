import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
AOS.init({
    once:true
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <AuthContextProvider>
      <App />   
     </AuthContextProvider>
  </BrowserRouter>

);