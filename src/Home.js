import './css/global.css'
import profile from "../src/images/profile.jpg"
import instagram_logo from "../src/images/instagram_logo.png"
import linkedin_logo from "../src/images/linkedin-logo.png"
import facebook_logo from "../src/images/fb-logo.png"

function Home() {
  return (
    <div>
      <div class="content">
          <table>
            <tr>
              <td>
                <img alt="me" style={{ border: "4px solid rgb(140,0,0)", marginTop:"50px", marginLeft: "30px"}} src={profile} width="250" height="333.33"></img>
             </td>
             <td style={{verticalAlign: "middle"}}>
                <div class="section" style={{ float: "top", width: "80%"}}>
                  <h1>About</h1>   
                  <h3>
                    Focused on software optimization, evolution and improvement supporting development life cycle along with Test Automation tools.
                    Interested in software quality and correctness, detailing test development environment according to project requirements.
                    Open-minded towards modern frameworks and applications and constantly up to date in technological innovation. 
                  </h3>
                </div>
             </td>
            </tr>
            <tr>
              <td>
              <div class="section">
               
              </div>
              </td>
              <td>
              </td>
            </tr>
          </table>

      </div>
      <footer>
          <div style={{textAlign: "center", width: "100%"}}>
            <table>
              <tr>
                <td class="footer-icon">
                  <a href="https://www.facebook.com/sestitoandre/"><img  src={facebook_logo} alt="fb" style={{backgroundColor: "none"}} width="58px" height="58px"></img></a>
                </td>
                <td class="footer-icon">
                  <a href="https://www.linkedin.com/in/andreasestito/"><img src={linkedin_logo} alt="lnkding" style={{backgroundColor: "none"}} width="58px" height="58px"></img></a>
                </td>
                <td class="footer-icon">
                  <a href="https://www.instagram.com/sestitoandre/"><img src={instagram_logo} alt="igram" style={{backgroundColor: "none"}} width="58px" height="58px"></img></a>
                </td>
              </tr>
            </table>
          </div>
      </footer>

    </div>

  );
}

export default Home;
