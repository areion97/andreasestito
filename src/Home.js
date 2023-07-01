import profile from "../src/images/profile.jpg"
import Footer from './Footer';

function Home() {
  return (
    <div style={{height: "100%"}}>
      <div class="content" style={{height: "100%"}}>
          <table>
  
            <tr>
              <td className="centered-1">
                <img alt="me" style={{ border: "4px solid rgb(140,0,0)", marginTop:"50px", marginLeft: "30px"}} src={profile} width="250" height="333.33"></img>
             </td>
             <td style={{verticalAlign: "middle"}}>
                <div class="section" style={{ float: "top" }}>

                  <h1>Introduction</h1>   
                  <h3>
                    My name is Andrea and I am from Parma, Italy. I created this website to introduce what are my main hobbies and passions.<br/><br/>
                    
                  </h3>
                </div>
             </td>
            </tr>

          </table>

      </div>
      <Footer style={{position: "absolute", top: "100%", marginTop: "50px"}}/>

    </div>

  );
}

export default Home;
