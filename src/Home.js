import './css/global.css'
import profile from "../src/images/profile.jpg"
import instagram_logo from "../src/images/instagram_logo.webp"
import linkedin_logo from "../src/images/linkedin-logo.png"
import facebook_logo from "../src/images/fb-logo.png"

function Home() {
  return (
      <div class="content">
          <img style={{boxShadow: "9px 8px 20px", marginTop:"50px", padding: "20px", marginLeft: "30px"}} src={profile} width="250vw" height="300vh"></img>
          <table>
            <tr>
              <td>
              <div class="section">
                <h1>About</h1>   
                <h3>
                  Focused on software optimization, evolution and improvement supporting development life cycle along with Test Automation tools.
                  Interested in software quality and correctness, detailing test development environment according to project requirements.
                  Open-minded towards modern frameworks and applications and constantly up to date in technological innovation. 
                </h3>
              </div>
              </td>
              <td>
              </td>
            </tr>
          </table>
          <footer>
              <div>
                <table>
                  <tr>
                    <td class="footer-icon">
                      <a href="https://www.facebook.com/sestitoandre/"><img  src={facebook_logo} width="58px" height="58px"></img></a>
                    </td>
                    <td class="footer-icon">
                      <a href="https://www.linkedin.com/in/andreasestito/"><img src={linkedin_logo} style={{backgroundColor: "white"}} width="58px" height="58px"></img></a>
                    </td>
                    <td class="footer-icon">
                      <a href="https://www.instagram.com/sestitoandre/"><img src={instagram_logo} width="58px" height="58px"></img></a>
                    </td>
                  </tr>
                </table>
              </div>
          </footer>
      </div>

  );
}

export default Home;
