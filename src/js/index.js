import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PropTypes from 'prop-types';

import '../css/nav.module.css';
import '../css/global.css';
import '../css/home.module.css';
import '../css/nav.module-dark.css';
import '../css/global-dark.css';
import '../css/home.module-dark.css';

export const ThemeSelector = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve the initial state from localStorage
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const createLink = (cssName) => {
    const linkNav = document.createElement('link');
    linkNav.rel = 'stylesheet';
    linkNav.type = 'text/css';
    linkNav.href = darkMode
      ? `./andreasestito/static/css/${cssName}-dark.css`
      : `./andreasestito/static/css/${cssName}.css`;
    return linkNav;
  };

  useEffect(() => {
    const linkNav = createLink('nav.module');
    document.head.appendChild(linkNav);

    const linkGlobal = createLink('global');
    document.head.appendChild(linkGlobal);

    const linkHome = createLink('home.module');
    document.head.appendChild(linkHome);

    return () => {
      document.head.removeChild(linkNav);
      document.head.removeChild(linkGlobal);
      document.head.removeChild(linkHome);
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
