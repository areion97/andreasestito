import profile from "../src/images/profile.jpg"
import Footer from './Footer';

function Home() {
  return (
    <div>
      <div class="content" style={{height: "100%"}}>
          <table>
            <tr>
              <td className="centered-1">
                <img alt="me" style={{ border: "4px solid rgb(140,0,0)", marginTop:"50px", marginLeft: "30px"}} src={profile} width="250" height="333.33"></img>
             </td>
             <td style={{verticalAlign: "middle"}}>
                <div class="section" style={{ float: "top" }}>
                  <h1>About</h1>   
                  <h3>
                    Focused on software optimization, evolution and improvement supporting development life cycle along with Test Automation tools.
                    Interested in software quality and correctness, detailing test development environment according to project requirements.
                    Open-minded towards modern frameworks and applications and constantly up to date in technological innovation. 
                  </h3>
                </div>
             </td>
            </tr>

          </table>
          <Footer style={{position: "absolute"}}/>

      </div>

    </div>

  );
}

export default Home;
