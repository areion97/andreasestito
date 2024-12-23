import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import styles from '../css/nav.module.scss';

function Nav() {
  const menuBarHidden = { visibility: 'hidden', height: '9px' };
  const menuBarVisible = { visibility: 'visible', animation: 'fadeIn 1.5s' };

  const [menuStyle, setMenuStyle] = useState(menuBarHidden);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.body.className = newMode ? 'dark-mode' : '';
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [menuStyle, darkMode]);

  return (
    <nav className={styles.nav}>
      <div className={styles.menuIcon}>
        <Button
          style={{ color: 'white' }}
          onClick={() =>
            setMenuStyle(
              menuStyle.visibility === 'visible'
                ? menuBarHidden
                : menuBarVisible
            )
          }
        >
          <CgMenu style={{ width: '50px', height: '50px' }} />
        </Button>
        <Button style={{ color: 'white' }} onClick={toggleDarkMode}>
          {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </Button>
      </div>
      <div style={menuStyle} className={styles.dropdownMenu}>
        <table className={styles.menuList}>
          <tr>
            <td>
              <Button
                className={styles.navBtn}
                onClick={() => setMenuStyle(menuBarHidden)}
              >
                <Link className={styles.navLink} to="/">
                  <h1 className={styles.navH1}>Home</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className={styles.navLink} to="/cv">
                  <h1 className={styles.navH1}>Curriculum Vitae</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className={styles.navLink} to="/certificates">
                  <h1 className={styles.navH1}>Certificates</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className={styles.navLink} to="/hobby">
                  <h1 className={styles.navH1}>Hobby</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className={styles.navLink} to="/about">
                  <h1 className={styles.navH1}>About</h1>
                </Link>
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </nav>
  );
}

export default Nav;
