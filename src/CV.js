import './css/global.css';
import logo_polimi from "./images/logo_polimi.png"
import logo_nttdata from "./images/nttdata.png"
import logo_coursera from "./images/coursera.png"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import logo_blazemeter from "./images/blazemeter-logo.jpg"
import logo_cambridge from "./images/cambridge-logo.jpg"


function CV() {
  return (
  <div>
    <div class="content">
      <table>
      <tr>
        <td>
        <div class="section">
            <h1>Education</h1>
            <img src={logo_polimi} width="240vw" height="180vh"></img>
            <br/>
            <br/>
            <br/>
            <h2 class="p-title">
            Bachelor's Degree in Engineering of Computing Systems
            </h2>
            <br/>
            <h2 class="p-title">Ranking Dijkstra shortest path</h2>
            <h3 class="paragraph">The focus of the project was to return the first k graphs given n in input ordering them by shortest path to reach every node starting from an initial node.
                Code needed to be strongly optimized in terms of memory and computational complexity.
            </h3>
            <h2 class="p-title">A VHDL solution for transferring addresses in microprocessors buses</h2>
            <h3 class="paragraph">The project was developed for Bachelor's Thesis for the course of Logical Networks.
                The aim of the project was to develop a VHDL entity which implemented working-zone encoding.¹
                As IDE to support code editing and run simulations I used Vivado Design Suite: Behavioural and Post Sythesis Functional were successfully accomplished on top of FPGA xc7a200tfbg484-1.
                <br/><br/>
                ¹Working-zone methodology is used in modern microprocessors to reduce power consumption when sending adresses through buses.
            </h3>
            <h2 class="p-title">Adrenaline: online multiplayer</h2>
            <h3 class="paragraph">It is a first prototype of multiplayer game inspired by the board game Adrenaline written in Java.
                OOP paradigms are fully exploited in order to give to the project a solid structure; furthermore its architecture composed by MVC, State and Strategy design patterns enhances project mantainability and evolvability.
            </h3>

        </div>
        </td>
        <td>
        <h1>Experience</h1>
        <img src={logo_nttdata} width="240vw" height="240vh"></img>
        <div class="section" style={{marginLeft: "-7vw"}}>

            <Timeline>
            <TimelineItem>
            <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary"/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent><h2 class="p-title">Software Developer Engineer in Test</h2>
            <h3 class="paragraph">
            <b>Apprenticeship</b>
            <br/>
            Sep 2020 - Present · 1 yr 8 mos
            <br/>
            I developed a test automation for REST APIs incrementing project maintainability and reliability; I was focusing on software scalability according to client requirements. 

            During this period I got better knowledge of my role by leading both automation testing and application development.
            I have put hands on a React App improving user experience and design.
            For handling the multitude of tasks I have used JIRA which helped me a lot planning and managing activities.
            </h3>
            </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineSeparator>
                <TimelineDot variant="outlined"/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <h2 class="p-title">Software Developer Engineer</h2>
                <h3 class="paragraph">
                <b>Apprenticeship</b><br/>
                Jan 2020 - Sep 2020 · 9 mos <br/>
                I've worked in team where I learnt basics of Git and Agile methodology actively contributing to test coverage structuring a complete Test automation suite: 
                architecture as-is enables functional testing as well as performance testing.I've worked in team where I learnt basics of Git and Agile methodology actively 
                contributing to test coverage structuring a complete Test automation suite: architecture as-is enables functional testing as well as performance testing.
                Software Developer Engineer InternSoftware Developer Engineer Intern
            </h3>
            </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineSeparator>
                <TimelineDot variant="outlined"/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <h2 class="p-title">Internship</h2>
                
                <h3 class="paragraph">
                Sep 2019 - Dec 2019 · 4 mos <br/>
                I've been studying web application fundamentals from its structure to life-cycle.
                Later on I developed a Web App covering architectural aspects such as deploying on a Servlet Container, setting up Apache Web Server and installing SSL certificate enabling HTTPS protocol.
            </h3>
            </TimelineContent>
            </TimelineItem>
        </Timeline>
        </div>
        </td>
        <td>
            <div class="section">
                <h1>Courses</h1>
                <img src={logo_coursera} width="240vw" height="240vh"></img>
                <br/>
                <br/>
                <a href="https://www.credly.com/badges/2401be49-fc85-4ddc-98e2-db71475d6756/public_url"><h2 class="paragraph">Introduction to Cloud Computing</h2></a>
                <img src="https://images.credly.com/size/110x110/images/2d178f89-4816-4190-8c4a-3bdbfec9db01/Dev_Skills_Network_-_Cloud_Computing_Core.png" width="150" height="150"/>
                <br/>
                <br/>
                <a href="https://www.credly.com/badges/c0a7ceed-8add-4af4-b538-9a9d9d3952ed/public_url"><h2 class="paragraph">Web Development with HTML, CSS, JavaScript Essentials</h2></a>
                <img  src="https://images.credly.com/size/110x110/images/6240e108-1407-4773-8621-cc2e4736d4e6/Web_Development_with_HTML-CSS-JavaScript_Essentials.png" width="150" height="150"/>
                <a href="https://www.credly.com/badges/073fdb08-6131-471c-b7f7-aa791b9f70b9/public_url"><h2 class="paragraph">Developing Cloud Native Applications</h2></a>
                <img  src="https://images.credly.com/size/110x110/images/3545154f-08b4-4f6f-9592-c356d7108965/Developing_Cloud_Native_Applications.png" width="150" height="150"/>
                <a href="https://www.credly.com/badges/6f23312d-eb7c-49a9-9bb1-d4ff017abcb7/public_url"><h2 class="paragraph">Developing Cloud Apps with Node.js and React</h2></a>
                <img  src="https://images.credly.com/size/110x110/images/73c1a67e-b3e8-44f1-a049-a91532e4f19c/Developing_Cloud_Apps_with_Node.js_and_React.png" width="150" height="150"/>
                <h2>JMeter™ Intro</h2>
                <img src={logo_blazemeter} width="300vw" height="126px"></img>
                <h2>JMeter™ Pro</h2>
                <img src={logo_blazemeter} width="300vw" height="126px"></img>
                <h2 class="p-title">First Certificate in English - Level B2</h2>
                <img src={logo_cambridge} width="250vw" height="250px"></img>
                
            </div>
        </td>

        
      </tr>

      </table>

      <footer>
      </footer>
    </div>
  </div>
  );
}

export default CV;