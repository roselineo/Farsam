import { FaInstagram ,FaFacebook,FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css"
import { Link } from "react-router-dom"


function Footer () {
    return(
        <section className="Footer">
         <div className="footer-menu">
         <ul>
                    <li>
                        <Link to="#" className="info-menu">Home</Link>
                    </li>
                    <li>
                        <Link to="#" className="info-menu">About Us</Link>
                    </li>
                    <li>
                        <Link to="#" className="info-menu">Our Range</Link>
                    </li>
                    <li>
                        <Link to="#" className="info-menu">Instruction</Link>
                    </li>
                    <li>
                        <Link to="#" className="info-menu">Contact Us</Link>
                    </li>

                </ul>
         </div>

         <div className="copy"> &copy2020 Farsamfreash All Right Rreserved</div>
         <div className="social-icons">
            <h4>Find us on</h4>
            <span className="inst"><FaInstagram/></span>
            <span><FaFacebook/></span>
            <span><FaXTwitter/></span>
            <span><FaLinkedin/></span>
         </div>

        </section>
    )
}


export default Footer