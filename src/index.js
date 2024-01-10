import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { NavBar } from "./NavBar/navBar.jsx";
import { Header } from "./header/header.jsx";
import { Novedades } from "./sliderNovedades/sliderNovedades";
import { App } from './app/App.jsx';
import { Footer } from './footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <div className='nav-container'>
        <NavBar />
      </div>
      <div className='header-container'>
        <Header />
      </div>
      <div className='slider-container'>
        <Novedades />
      </div>
      <div className="vista">
        <App />
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>

);



