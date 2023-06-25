import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import {useEffect, useState} from 'react';
import { CgMenu } from 'react-icons/cg';

function Nav() {
    const menuBarHidden = {visibility: "hidden", height: "30px"}
    const menuBarVisible = {visibility: "visible",animation: "fadeIn 1.7s"}


    const [menuStyle, setMenuStyle] = useState(menuBarHidden);

    useEffect(()=>{

    }, [menuStyle])

    return (

        <nav class="nav">
            <div class="menu-icon">
                <Button style={{color: "white"}} onClick={()=>setMenuStyle(menuStyle.visibility === "visible" ? menuBarHidden : menuBarVisible)}>
                    <CgMenu style={{width:"50px", height:"50px"}}/>
                </Button>
            </div>
            <div style={menuStyle} class="dropdown-menu">
                <table class="menu-list">
                    <tr>
                        <td>
                            <Button onClick={()=>setMenuStyle(menuBarHidden)}>
                                <Link class="nav-link" to="/andreasestito"><h1>Home</h1></Link>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button onClick={()=>setMenuStyle(menuBarHidden)}>
                                <Link class="nav-link" to="/andreasestito/cv"><h1>Curriculum Vitae</h1></Link>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button onClick={()=>setMenuStyle(menuBarHidden)}>
                                <Link class="nav-link" to="/andreasestito/certificates"><h1>Certificates</h1></Link>
                            </Button>
                        </td>
                    </tr>
                </table>
               
            </div>

        </nav>
    );
  }
  
  export default Nav;
  
