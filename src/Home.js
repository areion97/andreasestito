import profile from "../src/images/profile.jpg"
import Footer from './Footer';
function Home() {
  return (
    <>
        <div className="content">
          <div className="flexbox-column">
            <div className="section">
              <img alt="me" style={{ border: "4px solid rgb(140,0,0)"}} src={profile} width="250" height="333.33"></img>
            </div>
            <div className="section-50">

              <h1>Introduction</h1>   
              <h3>
                My name is Andrea and I am from Parma, Italy. I created this website to introduce what are my main hobbies and passions.<br/><br/>
              </h3>
            </div>
      
          </div>
        <Footer style={{position:"fixed"}}/>
     
      </div>
    </>

  );
}

export default Home;
