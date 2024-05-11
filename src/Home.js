import profile from "../src/images/me.jpg"
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;

    document.body.appendChild(script);
  },[]);
  return (
    
    <>
        <div className="content">
          <div className="flexbox-column">
            <div className="section" style={{boxShadow: "0px 0px 15px 0px", marginTop: "50px"}}>
              <img alt="me" src={profile} width="250" height="333.33"></img>
            </div>
            <div className="section-50">

              <h1>Introduction</h1>   
              <h3>
                My name is Andrea and I am from Parma, Italy. I created this website to introduce what are my main hobbies and passions.<br/><br/>
              </h3>
              <div class="badge-base LI-profile-badge" data-locale="it_IT" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="andreasestito" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://it.linkedin.com/in/andreasestito?trk=profile-badge"><p></p></a></div>
   
            </div>

          </div>
     
      </div>
    </>

  );
}

export default Home;
