import profile from "../src/images/profile.jpg"
import Footer from './Footer';

function Home() {
  return (
    <div style={{height: "100%"}}>
      <div className="content" style={{height: "100%"}}>
        <div className="flexbox-column">
          <img alt="me" style={{ border: "4px solid rgb(140,0,0)", marginTop:"50px"}} src={profile} width="250" height="333.33"></img>

          <div className="section">

            <h1>Introduction</h1>   
            <h3>
              My name is Andrea and I am from Parma, Italy. I created this website to introduce what are my main hobbies and passions.<br/><br/>
            </h3>
          </div>
     
        </div>
      </div>
      <Footer/>

    </div>

  );
}

export default Home;
