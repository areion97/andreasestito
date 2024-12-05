import fce_certificate from "./images/FCE.jpg"
import ibm_certificate from "./images/IBM_Certificate.jpg"
import cs50_certificate from "./images/edX CS50x.png"
import jmeter_intro from "./images/jmeter-intro.jpg"
import jmeter_pro from "./images/jmeter-pro.jpg"
import gcloud_fundamentals from "./images/gcloud-fundamentals.jpg"
import springcloud from "./images/SpringBoot and Spring Cloud.jpg"
import aws_fundamentals from "./images/aws-fundamentals.jpg"
import linux from "./images/linux-for-developers.jpg"
import opensource from "./images/linux-opensource.jpg"
import git_fundamentals from "./images/git-fundamentals.jpg"
import myes_advanced2 from "./images/myes-advanced2.jpg"
import myes_advanced3 from "./images/myes-advanced3.jpg"
import linux_fundation_git from "./images/linux-fundation-git.jpg"
import speex_b21 from "./images/speex-b21.jpg"
import kafka from "./images/Kafka.jpg"
import iot_arduino_basics from "./images/iot-arduino-basics.jpg"


function Certificates() {
 
  return (
  <div>
    <div className="content">
      <div className="section">
        <table>
          
          <tr className="flexbox-column">
            <h2 className="flex-header-col border-right">Computer science</h2>

            <td>
              <img src={cs50_certificate} alt="cs50-certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <br />
            </td>

          </tr>
          <tr className="flexbox-column">
            <h2 className="flex-header-col border-right">Technology stack</h2>

            <td>
              <img src={ibm_certificate} alt="ibmCertificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <br />
            </td>
          </tr>
          <tr className="flexbox-column">
            <h2 className="flex-header-col border-right">Cloud</h2>

            <td>
              <img src={gcloud_fundamentals} alt="gcloud-certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <img src={aws_fundamentals} alt="aws-certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <img src={springcloud} alt="spring boot and spring cloud certificate" className="responsive-image"></img>
              <br />
            </td>
          </tr>
          <tr className="flexbox-column">
            <h2 className="flex-header-col border-right">Open source</h2>

            <td>
              <tr>
                <td>
                  <img src={linux} alt="linux-certificate" className="responsive-image"></img>
                  <br />
                </td>
              </tr>

              <tr>
                <td>
                  <img src={opensource} alt="opensource-certificate" className="responsive-image"></img>
                  <br />
                </td>
              </tr>

            </td>

            <td>
                <tr className="flexbox-column">
                  <td>
                    <img src={linux_fundation_git} alt="git fundamentals from the linux fundation" className="responsive-image"/>
                      <br />
                  </td>
                </tr>
                <tr className="flexbox-column">

                  <td>
                    <img src={git_fundamentals} alt="git fundamentals" className="responsive-image"/>
                    <br />
                  </td>
                </tr>
            </td>

          </tr>
          <tr className="flexbox-column">
            <h2 className="flex-header-col border-right">Test automation</h2>

            <td>
              <img src={jmeter_intro} alt="jmeter-intro-certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <img src={jmeter_pro} alt="jmeter-pro-certificate" className="responsive-image"></img>
              <br />
            </td>
          </tr>
          <tr className="flexbox-column">
            <h2 className="flex-header-col border-right">Message broker</h2>
            <td>
              <img src={kafka} alt="kafka certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <br />
            </td>
          </tr>

          <tr className="flexbox-column">
            <h2 className="flex-header-col border-right">Internet of Things</h2>
            <td>
              <img src={iot_arduino_basics} alt="iot_arduino_basics" className="responsive-image"></img>
              <br />
            </td>
            <td>
            </td>
          </tr>
          <tr className="flexbox-column">
            <h2 className="flex-header-col border-right">Language</h2>

            <td>
              <img src={fce_certificate} alt="FCE Certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <img src={speex_b21} alt="Speex B2.1 Certificate" className="responsive-image"></img>
              <br />
            </td>
            <td>
              <tr clasName="flexbox-column">
                <td>
                  <img src={myes_advanced2} alt="MYES Advanced 2 Certificate" className="responsive-image"></img>
                  <br />
                </td>

              </tr>
              <tr>
                <td>
                  <img src={myes_advanced3} alt="MYES Advanced 3 Certificate" className="responsive-image"></img>
                  <br />
                </td>
              </tr>
            </td>
          </tr>

        </table>
      </div>

    </div>

  </div>
  );
}

export default Certificates;

