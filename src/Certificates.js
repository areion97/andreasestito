import fce_certificate from "./images/FCE.jpg"
import ibm_certificate from "./images/IBM_Certificate.jpg"
import cs50_certificate from "./images/CS50x.png"

import './css/global.css';
import Footer from "./Footer";
function Certificates() {
 
  return (
  <div>
    <div class="content">
      <div className="section">
      <table>
        <tr>
          <td>
            <h1 className="title">
              First Certificate in English
            </h1>

            <img src={fce_certificate} alt="FCE Certificate" className="responsive-image"></img>
          </td>
          <td>
            <h1 className="title">
              IBM Full Stack Software Developer
            </h1>
            <img src={ibm_certificate} alt="ibmCertificate" className="responsive-image"></img>
            <h1 className="title">
              CS50x
            </h1>

            <img src={cs50_certificate} alt="cs50-certificate" className="responsive-image"></img>
          </td>
  
        </tr>
      </table>
      </div>
      <Footer/>

    </div>

  </div>
  );
}

export default Certificates;

