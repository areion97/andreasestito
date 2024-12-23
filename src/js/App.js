import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import CV from './CV';
import Nav from './Nav';
import Home from './Home';
import Certificates from './Certificates';
import About from './About';
import Chat from './Chat';
import Footer from './Footer';
import Hobby from './Hobby';
import { Toaster } from 'react-hot-toast';
import '../css/global.scss';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Toaster />
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
  );
}

export default App;
