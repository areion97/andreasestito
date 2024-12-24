import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PropTypes from 'prop-types';

export const ThemeSelector = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve the initial state from localStorage
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    const linkNav = document.createElement('link');
    linkNav.rel = 'stylesheet';
    linkNav.type = 'text/css';
    linkNav.href = darkMode
      ? './andreasestito/static/css/nav.module-dark.css'
      : './andreasestito/static/css/nav.module.css';
    document.head.appendChild(linkNav);

    const linkGlobal = document.createElement('link');
    linkGlobal.rel = 'stylesheet';
    linkGlobal.type = 'text/css';
    linkGlobal.href = darkMode
      ? './andreasestito/static/css/global-dark.css'
      : './andreasestito/static/css/global.css';
    document.head.appendChild(linkGlobal);

    return () => {
      document.head.removeChild(linkNav);
      document.head.removeChild(linkGlobal);
    };
  }, [darkMode]);

  return <>{children(darkMode, setDarkMode)}</>;
};

ThemeSelector.propTypes = {
  children: PropTypes.func.isRequired,
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeSelector>
      {(darkMode, setDarkMode) => (
        <App darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
    </ThemeSelector>
  </React.StrictMode>
);
