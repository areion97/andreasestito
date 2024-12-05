import logo_polimi from "./images/polimi.png"
import logo_nttdata from "./images/nttdata.png"
import logo_ulivi from "./images/ulivi.jpg"
import logo_dedalus from "./images/logo-dedalus.png"
import { Timeline, Divider} from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import tesina from "./images/tesina.jpg"
import retilogiche from "./images/retilogiche.jpg"
import tesina_superiori from "./files/Tesina Andrea Sestito.pdf"
import curriculum_english from "./files/Curriculum Andrea Sestito 5 - English.pdf"
import progetto_vhdl from "./files/Progetto Reti Logiche.pdf"

import { useEffect, useState, useLayoutEffect} from "react"
function CV() {
    const [timelineMode, setTimelineMode] = useState("left")
    const [isDesktop, setIsDesktop] = useState(false)

    useWindowSize();
    function useWindowSize() {
        const [size, ] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            if(window.innerWidth > 600) {
                setTimelineMode("alternate");
                setIsDesktop(true);
            }else {
                setTimelineMode("left");
                setIsDesktop(false);
            }
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
      }
      
    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
    
        document.body.appendChild(script);
    },[]);

    const poliItems = 
    [
        { 
            children:
            <div>
                <h2 className="title">Ranking Dijkstra shortest path</h2>                   
                <h3 className="paragraph">
                <i>The project was developed for Bachelor's Thesis for the course of Algorithms and Principles of Computer Science.</i><br/><br/>
                    The focus of the project was to return the first k graphs given n in input ordering them by shortest path to reach every node starting from an initial node.
                    Code needed to be strongly optimized in terms of memory and computational complexity.
                </h3>
                <a style={{textDecoration: "underline"}} target="_blank" rel="noreferrer" className="nav-submenu" href="https://github.com/areion97/ProgettoAPI"><h3><b>Source Code</b></h3></a>
            </div>,
        
        },
            
        { children: 
            <div>
                <h2 className="title">A VHDL solution for transferring addresses in microprocessors buses</h2>
                <h3 className="paragraph">
                    <i>The project was developed for Bachelor's Thesis for the course of Logical Networks.</i><br/><br/>
                    The aim of the project was to develop a VHDL entity which implemented working-zone encoding.¹
                    As IDE to support code editing and run simulations I used Vivado Design Suite: Behavioural and Post Sythesis Functional were successfully accomplished on top of FPGA xc7a200tfbg484-1.
                    <br/><br/>
                    ¹Working-zone methodology is used in modern microprocessors to reduce power consumption when sending adresses through buses.
                </h3>
                <img src={retilogiche} alt="Tesi Reti Logiche" className="responsive-image"></img>


                <a style={{textDecoration: "underline"}} target="_blank" rel="noreferrer" className="nav-submenu" href={progetto_vhdl}><h3><b>Download PDF</b></h3></a>
                <a style={{textDecoration: "underline"}} target="_blank" rel="noreferrer" className="nav-submenu" href="https://github.com/areion97/progettoRetiLogiche"><h3><b>Source Code</b></h3></a>
            </div> 
        },
        
        { children: 
            
            <div> 
                <h2 className="title">Adrenaline: online multiplayer</h2>
                <h3 className="paragraph">
                    <i>The project was developed for Bachelor's Thesis for the course of Software Engineering.</i><br/><br/>
                    It is a first prototype of multiplayer game inspired by the board game Adrenaline written in Java.
                    OOP paradigms are fully exploited in order to give to the project a solid structure; furthermore its architecture composed by MVC, State and Strategy design patterns enhances project mantainability and evolvability.
                </h3>
                <a style={{textDecoration: "underline"}} target="_blank" rel="noreferrer" className="nav-submenu" href="https://github.com/areion97/ing-sw-2019"><h3><b>Source Code</b></h3></a>
            </div>
        }
       
    ];

    const uliviItems = [
        {
            children:
            <div>
                <img src={tesina} alt="Tesina Superiori" className="responsive-image"></img>

                <a style={{textDecoration: "underline"}} target="_blank" rel="noreferrer" className="nav-submenu" href={tesina_superiori}><h3><b>Download PDF</b></h3></a>
            </div>
        }
    ];
    const dedalusItems = [
        {
        children:
            <div>
                <h2 className="title">Product Development Specialist</h2>
                <h3 className="paragraph">
                As Product Development Specialist I take care of the product analysis, development and evolution.
                I have the possibility to face new technologies: recently I've put my hands on Apache Kafka and integrated very smoothly into the project.
                I obtained a complete overview of the product in a short time, thanks to mutual adaptation skills I can easily manage more tasks at a time, 
                in this way I keep myself motivated and at the same time I can improve focus area based on priorities. 
                I always keep updated for courses that might enhance my development journey towards a well structured solution. Once delivered the product I usually ask for feedback in order
                to have a constant alignment in terms of satisfaction of the client and the team.
                </h3>            
            </div>,
        dot: <LoadingOutlined />
        }
    ];

    const nttItems = [
        {
            children:
            <div>
                <h2 className="title">Software Developer Engineer</h2>
                <h3 className="paragraph">
                I gained experience in the payments area by developing versatile software solutions that meet the requirements of different customers.
                Problem solving and resoluteness ability has also increased over time by dealing with various problems present on the production environment which needed to be solved in a short time.
                Meanwhile I had to face with long term activities which increased work planning skills: as result, the entire overview of development and integration to the end user was tracked and ready to be delivered.
                </h3>
            </div>
        },
        {
            children:
            <div>
                <h2 className="title">Software Developer Engineer in Test</h2>
                <h3 className="paragraph">
                <b>Permanent contract</b>
                <br/><br/>
                I developed a test automation for REST APIs incrementing project maintainability and reliability; I was focusing on software scalability according to client requirements.

                During this period I got better knowledge of my role by leading both automation testing and application development.
                I have put hands on a React App improving user experience and design.
                For handling the multitude of tasks I have used JIRA which helped me a lot planning and managing activities.
                </h3>
            </div>
        },
        {
            children:
            <div>
                <h2 className="title">Software Developer Engineer</h2>
                <h3 className="paragraph">
                    <b>Apprenticeship</b><br/><br/>
                    I've worked in team where I learnt basics of Git and Agile methodology actively contributing to test coverage structuring a complete Test automation suite:
                    architecture as-is enables functional testing as well as performance testing.

                </h3>
            </div>
        },
        {
            children:
            <div>
                <h2 className="title">Software Developer Engineer</h2>
                <h3 className="paragraph">
                <b>Internship</b><br/><br/>
                    I've been studying web application fundamentals from its structure to life-cycle.
                    Later on I developed a Web App covering architectural aspects such as deploying on a Servlet Container, setting up Apache Web Server and installing SSL certificate enabling HTTPS protocol.
                </h3>
            </div>
        }
    ];



  return (
  <div>
    <div className="content">

    <table>
        <tbody>
        <tr className="flexbox-column">
            <td style={isDesktop ? {borderRight: "2px solid rgba(5, 5, 5, 0.06)"} : {}}>
                <div className="section-90">

                    <h1>Education</h1>
                    <img alt="" src={logo_polimi} width="250" height="190"></img>
                    <h2 className="title-centered">
                        Bachelor's Degree in Engineering of Computing Systems
                    </h2>
                    <br />
                    <Timeline mode={timelineMode} items={poliItems} />
                    <Divider />
                    <img alt="" src={logo_ulivi} className="image" width="250" height="250"></img>
                    <h2 className="title-centered">
                        Scientific Diploma
                    </h2>
                    <br />
                    <Timeline mode={timelineMode} items={uliviItems} />

                </div>

            </td>
            <td>
                <div className="section-90">
                    <h1 >Experience</h1>
                    <img alt="dedalus" src={logo_dedalus} className="image" width="300" height="110"></img>
                    <br/>
                    <Timeline mode={timelineMode} items={dedalusItems} />
                    <img alt="nttdata" src={logo_nttdata} className="image" width="250" height="250"></img>
                    <br/>
                    <Timeline mode={timelineMode} items={nttItems} />

                </div>
            </td>

        </tr>
        </tbody>
        <Divider/>
        <tbody>
            <tr>
                <td>
                    <div className="section-50">
                        <h1 >Courses</h1>
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="20ac41c4-15cb-407e-b796-3465531e78ba" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="6532de11-f049-4972-ab56-d99322549263" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="5c541f53-9398-4f51-98ac-423b8fc9ae79" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="1edcdbcc-9941-4d99-9610-ac98358f047a" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="6f23312d-eb7c-49a9-9bb1-d4ff017abcb7" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="073fdb08-6131-471c-b7f7-aa791b9f70b9" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="c0a7ceed-8add-4af4-b538-9a9d9d3952ed" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="2401be49-fc85-4ddc-98e2-db71475d6756" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

                    </div>
                </td>
            </tr>
        </tbody>
        <tbody>
            <tr><a style={{textDecoration: "underline"}} target="_blank" rel="noreferrer" className="nav-submenu" href={curriculum_english}><h3><b>Download CV</b></h3></a></tr>
        </tbody>
      </table>

    </div>

  </div>
  
  );
}

export default CV;

