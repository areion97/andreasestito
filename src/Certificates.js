import fce_certificate from "./images/FCE.jpg"
import { Document, Page, pdfjs } from 'react-pdf';
import ibm_certificate from "./images/IBM_Certificate.jpg"
import './css/global.css';

function Certificates() {
 
  return (
  <div>
    <div class="content">
      <div className="section">
      <table>
        <tr>
          <td>
            <h1 class="p-title">
              First Certificate in English
            </h1>
            <img src={fce_certificate} className="responsive-image"></img>
          </td>
          <td>
            <h1 class="p-title">
              IBM Full Stack Software Developer
            </h1>
            <img src={ibm_certificate} className="responsive-image"></img>

          </td>
        </tr>
      </table>
      </div>
  
    </div>
  </div>
  );
}

export default Certificates;

