import {Link} from "react-router-dom"
import * as React from 'react';
import {useState} from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import curriculum_pdf from "./files/Curriculum Andrea Sestito.pdf"
function Nav() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <nav class="nav">
            <Button>
                <Link class="nav-link" to="/andreasestito"><h1>Home</h1></Link>
            </Button>
            <Button
                onClick={handleClick}
            >
                <Link class="nav-link" to="/andreasestito/cv"><h1>Curriculum Vitae</h1></Link>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}><a target="_blank" class="nav-submenu" href={curriculum_pdf}><h3><b>Download PDF</b></h3></a></MenuItem>
            </Menu>
        </nav>
    );
  }
  
  export default Nav;
  
