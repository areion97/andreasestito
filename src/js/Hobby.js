import React from 'react';
import garden_microsoft from '../images/garden-microsoft.jpg';
import Image from './Image';
function Hobby() {
  return (
    <div className="container">
      <div style={{ width: '100%' }}>
        <div className="content">
          <table>
            <tr className="flexbox-column">
              <td>
                <div className="section-50">
                  <h1>Photography</h1>
                  <Image
                    className="flex-image"
                    src={garden_microsoft}
                    alt="Garden Microsoft"
                  />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Hobby;
