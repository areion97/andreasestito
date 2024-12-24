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
import PropTypes from 'prop-types';
function App({ darkMode, setDarkMode }) {
  return (
    <HashRouter>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
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
App.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default App;
