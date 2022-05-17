import {Link} from "react-router-dom"
import * as React from 'react';
import Button from '@mui/material/Button';

function Nav() {
    return (
        <nav class="nav">
            <Button>
                <Link class="nav-link" to="/andreasestito"><h1>Home</h1></Link>
            </Button>
            
            <Button>
                <Link class="nav-link" to="/andreasestito/cv"><h1>Curriculum Vitae</h1></Link>
            </Button>
        </nav>
    );
  }
  
  export default Nav;
  
