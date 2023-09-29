import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet'
import CV from './CV'
import Nav from './Nav';
import Home from './Home';
import Certificates from './Certificates';
import About from './About';
import Chat from './Chat'
import Footer from './Footer';
import Toast from './Toast';
import '../src/css/global.scss'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Helmet>
      <title>Andrea Sestito</title>
    </Helmet>
    <React.Fragment>
    <BrowserRouter>
        <Nav/>
        <Toaster 
         
         
         />
        <Routes>
          <Route path="/andreasestito" element={<Home />} />
          <Route path="/andreasestito/cv" element={<CV />} />
          <Route path="/andreasestito/certificates" element={<Certificates />} />
          <Route path="/andreasestito/about" element={<About />} />
        </Routes>
        <Footer style={{position:"fixed"}}/>
        <Chat />
      </BrowserRouter>
    </React.Fragment>
  </React.StrictMode>
);

