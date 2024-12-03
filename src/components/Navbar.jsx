import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/" className="HomeButton">Home</Link>
            <div className="NavbarElements">
                <Link to="about">About</Link>
                <Link to="journal">Journal</Link>
                <Link to="timeline">Timeline</Link>
            </div>
        </div>
    )
}