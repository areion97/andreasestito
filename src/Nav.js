import {Link} from "react-router-dom"
function Nav() {
    return (
        <nav>
            <ul class="nav">
                <li><Link to="/andreasestito"><h1>Home</h1></Link></li>
                <li><Link to="/andreasestito/cv"><h1>Curriculum Vitae</h1></Link></li>
                <li><Link to="/andreasestito/contacts"><h1>Contacts</h1></Link></li>
            </ul>
        </nav>
    );
  }
  
  export default Nav;
  
