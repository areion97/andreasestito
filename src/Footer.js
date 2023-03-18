import React from "react";
import instagram_logo from "../src/images/instagram_logo.png"
import linkedin_logo from "../src/images/linkedin-logo.png"
import facebook_logo from "../src/images/fb-logo.png"

function Footer() {


    return (
        <footer>
            <table className="centered">
            <tr className="centered-1">
                <td>
                <a href="https://www.facebook.com/sestitoandre/"><img  src={facebook_logo} alt="fb" style={{backgroundColor: "none"}} width="58px" height="58px"></img></a>
                </td>
                <td class="footer-icon">
                <a href="https://www.linkedin.com/in/andreasestito/"><img src={linkedin_logo} alt="lnkding" style={{backgroundColor: "none"}} width="58px" height="58px"></img></a>
                </td>
                <td class="footer-icon">
                <a href="https://www.instagram.com/sestitoandre/"><img src={instagram_logo} alt="igram" style={{backgroundColor: "none"}} width="58px" height="58px"></img></a>
                </td>
            </tr>
            </table>
        </footer>
    )
}

export default Footer;