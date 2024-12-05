import React from "react";
import instagram_logo from "../src/images/instagram_logo.png"
import linkedin_logo from "../src/images/linkedin-logo.png"
import facebook_logo from "../src/images/fb-logo.png"

function Footer(props) {

    return (
        <footer style={props.style}>

            <table>
                <tr  className="flexbox-row">
                    <td>
                        <a href="https://www.facebook.com/sestitoandre/"><img  src={facebook_logo} alt="fb" style={{backgroundColor: "none"}} width="40px" height="40px"></img></a>
                    </td>
                    <td>
                        <a href="https://www.linkedin.com/in/andreasestito/"><img src={linkedin_logo} alt="lnkdin" style={{backgroundColor: "none"}} width="40px" height="40px"></img></a>
                    </td>
                    <td>
                        <a href="https://www.instagram.com/sestitoandre/"><img src={instagram_logo} alt="igram" style={{backgroundColor: "none"}} width="40px" height="40px"></img></a>
                    </td>
                </tr>
            </table>
        </footer>
    )
}

export default Footer;