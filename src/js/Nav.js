import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

function Nav({ setDarkMode, darkMode }) {
  const menuBarHidden = { visibility: 'hidden', height: '9px' };
  const menuBarVisible = { visibility: 'visible', animation: 'fadeIn 1.5s' };

  const [menuStyle, setMenuStyle] = useState(menuBarHidden);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode))
    
  };

  return (
    <nav className="nav">
      <div className="menuIcon">
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
      <div style={menuStyle} className="dropdownMenu">
        <table className="menuList">
          <tr>
            <td>
              <Button
                className="navBtn"
                onClick={() => setMenuStyle(menuBarHidden)}
              >
                <Link className="navLink" to="/">
                  <h1 className="navH1">Home</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className="navLink" to="/cv">
                  <h1 className="navH1">Curriculum Vitae</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className="navLink" to="/certificates">
                  <h1 className="navH1">Certificates</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className="navLink" to="/hobby">
                  <h1 className="navH1">Hobby</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className="navLink" to="/about">
                  <h1 className="navH1">About</h1>
                </Link>
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  setDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Nav;
