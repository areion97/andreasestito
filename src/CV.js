import logo_polimi from "./images/polimi.png"
import logo_nttdata from "./images/nttdata.png"
import logo_coursera from "./images/coursera.png"
import logo_ibm from "./images/ibm-logo.png"
import logo_ulivi from "./images/ulivi.jpg"
import logo_dedalus from "./images/logo-dedalus.png"
import { Document, Page, pdfjs} from 'react-pdf'
import { Timeline, Divider} from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import tesina_superiori from "./files/Tesina Andrea Sestito.pdf"
import curriculum_english from "./files/Curriculum Andrea Sestito 5 - English.pdf"
import progetto_vhdl from "./files/Progetto Reti Logiche.pdf"

import { useEffect, useState, useLayoutEffect} from "react"
function CV() {
    const [timelineMode, setTimelineMode] = useState("left")
    const [isDesktop, setIsDesktop] = useState(false)

    useWindowSize();
    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
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
        pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
                <Document file={progetto_vhdl}>
                    <Page pageNumber={1} renderTextLayer={false}/>
                </Document>
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
                <Document file={tesina_superiori}>
                    <Page pageNumber={1} renderTextLayer={false}/>
                </Document>
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
        <Divider/>
        <tr>
            <td>
                <div className="section-50">
                    <h1 >Courses</h1>
                    <img alt="credly" src={logo_coursera} className="image" width="240" height="240"></img>
                    <a href="https://www.credly.com/badges/2401be49-fc85-4ddc-98e2-db71475d6756/public_url"><h2 className="title-centered">Introduction to Cloud Computing</h2></a>
                    <img alt="credly" src="https://images.credly.com/size/110x110/images/2d178f89-4816-4190-8c4a-3bdbfec9db01/Dev_Skills_Network_-_Cloud_Computing_Core.png" width="150" height="150"/>
                    <a href="https://www.credly.com/badges/c0a7ceed-8add-4af4-b538-9a9d9d3952ed/public_url"><h2 className="title-centered">Web Development with HTML, CSS, JavaScript Essentials</h2></a>
                    <img alt="credly" src="https://images.credly.com/size/110x110/images/6240e108-1407-4773-8621-cc2e4736d4e6/Web_Development_with_HTML-CSS-JavaScript_Essentials.png" width="150" height="150"/>
                    <a href="https://www.credly.com/badges/073fdb08-6131-471c-b7f7-aa791b9f70b9/public_url"><h2 className="title-centered">Developing Cloud Native Applications</h2></a>
                    <img alt="credly" src="https://images.credly.com/size/110x110/images/3545154f-08b4-4f6f-9592-c356d7108965/Developing_Cloud_Native_Applications.png" width="150" height="150"/>
                    <a href="https://www.credly.com/badges/6f23312d-eb7c-49a9-9bb1-d4ff017abcb7/public_url"><h2 className="title-centered">Developing Cloud Apps with Node.js and React</h2></a>
                    <img alt="credly" src="https://images.credly.com/size/110x110/images/73c1a67e-b3e8-44f1-a049-a91532e4f19c/Developing_Cloud_Apps_with_Node.js_and_React.png" width="150" height="150"/>
                    <a href="https://www.credly.com/badges/1edcdbcc-9941-4d99-9610-ac98358f047a/public_url"><h2 className="title-centered">Containers &amp; Kubernetes Essentials</h2></a>
                    <img alt="credly" src="https://images.credly.com/size/340x340/images/66bed44e-4917-48b7-8e88-1b0c83d50437/Containers_and_Kubernetes_Essentials.png" width="150" height="150"/>
                    <a href="https://www.coursera.org/account/accomplishments/certificate/68JHBLGCQLEN"><h2 className="title-centered">Getting Started with Git and GitHub</h2></a>
                    <img alt="ibm" src={logo_ibm} width="175" height="70"/>
                    <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/XABSSQDSSKQU"><h2 className="title-centered">Cloud Application Development Foundations</h2></a>
                    <img alt="ibm" src={logo_ibm} width="175" height="70"/>

                </div>
            </td>
        </tr>
        <tr><a style={{textDecoration: "underline"}} target="_blank" rel="noreferrer" className="nav-submenu" href={curriculum_english}><h3><b>Download CV</b></h3></a></tr>
      </table>

    </div>

  </div>
  
  );
}

export default CV;

