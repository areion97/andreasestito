import fce_certificate from "./images/FCE.jpg"
import ibm_certificate from "./images/IBM_Certificate.jpg"
import cs50_certificate from "./images/edX CS50x.png"
function Certificates() {
 
  return (
  <div>
    <div className="content">
      <div className="section-90">
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
                CS50x: CS50's Introduction to Computer Science
              </h1>

              <img src={cs50_certificate} alt="cs50-certificate" className="responsive-image"></img>
            </td>
    
          </tr>
        </table>
      </div>

    </div>

  </div>
  );
}

export default Certificates;

