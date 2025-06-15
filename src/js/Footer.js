import React from 'react';
import instagram_logo from '../images/instagram_logo.png';
import linkedin_logo from '../images/linkedin-logo.png';
import facebook_logo from '../images/fb-logo.png';
import github_logo from '../images/github-mark.svg';

import PropTypes from 'prop-types';

function Footer(props) {
  return (
    <footer style={props.style}>
      <table>
        <tr className="flexbox-row">
          <td>
            <a href="https://www.facebook.com/sestitoandre/">
              <img
                src={facebook_logo}
                alt="fb"
                style={{ backgroundColor: 'none' }}
                width="40px"
                height="40px"
              ></img>
            </a>
          </td>
          <td>
            <a href="https://www.instagram.com/sestitoandres/">
              <img
                src={instagram_logo}
                alt="instagram"
                style={{ backgroundColor: 'none' }}
                width="40px"
                height="40px"
              ></img>
            </a>
          </td>
          <td>
            <a href="https://github.com/areion97">
              <img
                src={github_logo}
                alt="github"
                style={{ backgroundColor: 'none' }}
                width="40px"
                height="40px"
              ></img>
            </a>
          </td>
          <td>
            <a href="https://www.linkedin.com/in/andreasestito/">
              <img
                src={linkedin_logo}
                alt="linkedin"
                style={{ backgroundColor: 'none' }}
                width="40px"
                height="40px"
              ></img>
            </a>
          </td>
        </tr>
      </table>
    </footer>
  );
}
Footer.propTypes = {
  style: PropTypes.object,
};

export default Footer;
