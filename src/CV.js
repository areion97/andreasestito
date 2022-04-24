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

function App() {
  return (
  <div>
    <div class="content">
      <table>
      <tr>
        <td>

        <div class="section">
            <h1>Education</h1>
            <img src={logo_polimi} id="logo-polimi"></img>
            <br/>
            <br/>
            <br/>
            <h2>
            Bachelor's Degree in Engineering of Computing Systems
            </h2>
            <br/>
            <h2>Ranking Dijkstra shortest path</h2>
            <h3 class="paragraph">The focus of the project was to return the first k graphs given n in input ordering them by shortest path to reach every node starting from an initial node.
                Code needed to be strongly optimized in terms of memory and computational complexity.
            </h3>
            <h2>A VHDL solution for transferring addresses in microprocessors buses</h2>
            <h3 class="paragraph">The project was developed for Bachelor's Thesis for the course of Logical Networks.
                The aim of the project was to develop a VHDL entity which implemented working-zone encoding.¹
                As IDE to support code editing and run simulations I used Vivado Design Suite: Behavioural and Post Sythesis Functional were successfully accomplished on top of FPGA xc7a200tfbg484-1.
                <br/><br/>
                ¹Working-zone methodology is used in modern microprocessors to reduce power consumption when sending adresses through buses.
            </h3>
            <h2>Adrenaline: online multiplayer</h2>
            <h3 class="paragraph">It is a first prototype of multiplayer game inspired by the board game Adrenaline written in Java.
                OOP paradigms are fully exploited in order to give to the project a solid structure; furthermore its architecture composed by MVC, State and Strategy design patterns enhances project mantainability and evolvability.
            </h3>

        </div>
        </td>
        <td>
        <h1>Experience</h1>
        <img src={logo_nttdata} id="logo-nttdata"></img>
        <div class="section" style={{marginLeft: "-12%"}}>

            <Timeline>
            <TimelineItem>
            <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary"/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent><h2>Software Developer Engineer in Test</h2>
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
                <h2>Software Developer Engineer</h2>
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
                <h2>Internship</h2>
                
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
                <img src={logo_coursera} id="logo-coursera"></img>
                <br/>
                <br/>
                <br/>
                <h2>
                B
                </h2>
                <br/>
                <h2>R</h2>
                <h3 class="paragraph">T
                </h3>
                <h2>A</h2>
                <h3 class="paragraph">T
                </h3>
                <h2>A</h2>
                <h3 class="paragraph">
                </h3>

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

export default App;
