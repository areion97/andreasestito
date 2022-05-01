import './css/global.css'
import profile from "../src/images/profile.jpg"
function Home() {
  return (
      <div class="content">
          <img src={profile} width="250vw" height="300vh"></img>

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

      </div>
  );
}

export default Home;
