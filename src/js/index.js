import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet'
import CV from './CV'
import Nav from './Nav';
import Home from './Home';
import Certificates from './Certificates';
import About from './About';
import Chat from './Chat'
import Footer from './Footer';
import Hobby from './Hobby';
import '../css/global.scss'
import { Route, Routes, HashRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast"

const root = ReactDOM.createRoot(document.body);

root.render(
  <React.StrictMode>
    <Helmet>
      <title>Andrea Sestito</title>
    </Helmet>
    <React.Fragment>
    <HashRouter>
        <Nav/>
        <Toaster/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/about" element={<About />} />
          <Route path="/hobby" element={<Hobby />} />
        </Routes>
        <Footer />
        <Chat />
      </HashRouter>
    </React.Fragment>
  </React.StrictMode>
);

