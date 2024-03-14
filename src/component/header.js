import { Link } from "react-router-dom"
import{FaBars, FaTimes} from "react-icons/fa"
import "./Header.css"
import myimage from"../images/farsam logo.jpg"

function Header() {
    return(
        <div className="Header">
            <div className="logo-image">
                <img src={myimage} alt="profile" className="logo-profile"/>
            </div>
            <div className="mobile-menu">
                    <FaBars/>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="#" className="menu-item">Home</Link>
                    </li>
                    <li>
                        <Link to="#" className="menu-item">About Us</Link>
                    </li>
                    <li>
                        <Link to="#" className="menu-item">Our Range</Link>
                    </li>
                    <li>
                        <Link to="#" className="menu-item">Instruction</Link>
                    </li>
                    <li>
                        <Link to="#" className="menu-item">Contact Us</Link>
                    </li>

                </ul>
            </div>
            
        </div>
    )
}


export default Header