import fce_certificate from "./images/FCE.jpg"
import ibm_certificate from "./images/IBM_Certificate.jpg"
import cs50_certificate from "./images/edX CS50x.png"
import jmeter_intro from "./images/jmeter-intro.jpg"
import jmeter_pro from "./images/jmeter-pro.jpg"
import gcloud_fundamentals from "./images/gcloud-fundamentals.jpg"
import aws_fundamentals from "./images/aws-fundamentals.jpg"
import linux from "./images/linux-for-developers.jpg"
import opensource from "./images/linux-opensource.jpg"


function Certificates() {
 
  return (
  <div>
    <div className="content">
      <div className="section">
        <table>
          <tr className="flexbox-column">
            <td>
              <img src={cs50_certificate} alt="cs50-certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <img src={ibm_certificate} alt="ibmCertificate" className="responsive-image"></img>
              <br />
            </td>
           
          </tr>
          <tr className="flexbox-column">
            <td>
              <img src={gcloud_fundamentals} alt="gcloud-certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <img src={aws_fundamentals} alt="aws-certificate" className="responsive-image"></img>
              <br />
            </td>
          </tr>
          <tr className="flexbox-column">
            <td>
              <img src={linux} alt="linux-certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <img src={opensource} alt="opensource-certificate" className="responsive-image"></img>
              <br />
            </td>
          </tr>
          <tr className="flexbox-column">
            <td>
              <img src={fce_certificate} alt="FCE Certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <img src={jmeter_intro} alt="jmeter-intro-certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <img src={jmeter_pro} alt="jmeter-pro-certificate" className="responsive-image"></img>
              <br />
            </td>
          </tr>
        </table>
      </div>

    </div>

  </div>
  );
}

export default Certificates;

