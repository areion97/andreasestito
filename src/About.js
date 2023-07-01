import Footer from './Footer';

function About() {
  return (
    <div className="content" style={{height: "100%"}}>
      <div className="pappagallo-bg" style={{height: "100%"}}>
          <table>
            <tr>
              <td className="centered-1">

             </td>
             <td style={{verticalAlign: "middle"}}>
                <div className="section" style={{ float: "top" }}>
                  <h1>About</h1>   
                  <h3 style={{marginTop: "70px", color: "black", padding: "20px", backgroundColor: "rgba(218, 253, 200, 0.79)", borderRadius: "10px",  boxShadow: "black 0px 0px 5px"}}>
                    Focused on software optimization, evolution and improvement supporting development life cycle along with Test Automation tools.
                    Interested in software quality and correctness, detailing test development environment according to project requirements.
                    Open-minded towards modern frameworks and applications and constantly up to date in technological innovation. 
                  </h3>
                </div>
             </td>
            </tr>

          </table>

      </div>
      <Footer/>

    </div>

  );
}

export default About;
