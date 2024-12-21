import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { CgMenu } from 'react-icons/cg';

function Nav() {
  const menuBarHidden = { visibility: 'hidden', height: '30px' };
  const menuBarVisible = { visibility: 'visible', animation: 'fadeIn 1.5s' };

  const [menuStyle, setMenuStyle] = useState(menuBarHidden);

  useEffect(() => {
    //window.scrollTo(0, 0);
  }, [menuStyle]);

  return (
    <nav className="nav">
      <div className="menu-icon">
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
      </div>
      <div style={menuStyle} className="dropdown-menu">
        <table className="menu-list">
          <tr>
            <td>
              <Button
                className="nav-btn"
                onClick={() => setMenuStyle(menuBarHidden)}
              >
                <Link className="nav-link" to="/">
                  <h1>Home</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className="nav-link" to="/cv">
                  <h1>Curriculum Vitae</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className="nav-link" to="/certificates">
                  <h1>Certificates</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className="nav-link" to="/hobby">
                  <h1>Hobby</h1>
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={() => setMenuStyle(menuBarHidden)}>
                <Link className="nav-link" to="/about">
                  <h1>About</h1>
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
