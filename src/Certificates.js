import fce_certificate from "./images/FCE.jpg"
import ibm_certificate from "./images/IBM_Certificate.jpg"
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
            <h1 class="p-title">
              First Certificate in English
            </h1>
            <div className="divider"></div>

            <img src={fce_certificate} alt="FCE Certificate" className="responsive-image"></img>
          </td>
          <td>
            <h1 class="p-title">
              IBM Full Stack Software Developer
            </h1>
            <div className="divider"></div>

            <img src={ibm_certificate} alt="ibmCertificate" className="responsive-image"></img>

          </td>
        </tr>
      </table>
      </div>
  
    </div>
    <Footer/>

  </div>
  );
}

export default Certificates;

