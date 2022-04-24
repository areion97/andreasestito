import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet'
import CV from './CV'
import Nav from './Nav';
import About from './About'
import Home from './Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Helmet>
      <title>Andrea Sestito</title>
    </Helmet>
    <React.Fragment>
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/andreasestito" element={<Home />} />
          <Route path="/andreasestito/cv" element={<CV />} />
          <Route path="/andreasestito/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
