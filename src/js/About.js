import {useLayoutEffect, useState} from "react";
import pappagalloforMobile from "../images/pappagallo.jpg"
import pappagalloForDestkop from "../images/camicia.jpg"
function About() {
  const [isDesktop, setIsDesktop] = useState(false)

  useWindowSize();
  function useWindowSize() {
    const [size, ] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        if(window.innerWidth > 600) {
          setIsDesktop(true);
        }else {
          setIsDesktop(false);
        }
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  return (
    <div style={isDesktop ? {backgroundImage: `url(${pappagalloForDestkop})`,backgroundSize: "contain"} : {backgroundImage: `url(${pappagalloforMobile})`, backgroundSize: "cover"}}>
      <div className="content">
        <div className="section-50">
          <h1>About</h1>
          <h3 style={{ marginTop: "70px", color: "black", padding: "20px", backgroundColor: "rgba(218, 253, 200, 0.79)", borderRadius: "10px"}}>
            Focused on software optimization, evolution and improvement supporting development life cycle along with Test Automation tools.
            Interested in software quality and correctness, detailing test development environment according to project requirements.
            Open-minded towards modern frameworks and applications and constantly up to date in technological innovation. 
          </h3>
                       
        </div>

      </div>

    </div>

  );
}

export default About;
