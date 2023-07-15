import fce_certificate from "./images/FCE.jpg"
import ibm_certificate from "./images/IBM_Certificate.jpg"
import cs50_certificate from "./images/CS50x.png"
import Footer from "./Footer";
function Certificates() {
 
  return (
  <div>
    <div className="content">
      <div className="section-80">
        <table>
          <tr className="flexbox-column">
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

    </div>
    <Footer/>

  </div>
  );
}

export default Certificates;

